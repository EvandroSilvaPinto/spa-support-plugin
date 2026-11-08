import { readFile, stat } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { z } from 'zod';

export const DEMO_PROCEDURE_ID = 'demo-service-status';
export const MAX_INPUT_BYTES = 16_384;
const MAX_CATALOG_BYTES = 32_768;
const DEFAULT_CATALOG = new URL('../catalog/procedures.demo.json', import.meta.url);
const TOOL_NAMES = new Set(['list_procedures', 'get_procedure', 'simulate_procedure']);

export const inputSchemas = Object.freeze({
  list_procedures: z.strictObject({}),
  get_procedure: z.strictObject({ procedure_id: z.literal(DEMO_PROCEDURE_ID) }),
  simulate_procedure: z.strictObject({ procedure_id: z.literal(DEMO_PROCEDURE_ID) })
});

const procedureSchema = z.strictObject({
  procedure_id: z.literal(DEMO_PROCEDURE_ID),
  title: z.string().min(1).max(160),
  description: z.string().min(1).max(600),
  fictitious: z.literal(true),
  read_only: z.literal(true),
  steps: z.array(z.string().min(1).max(250)).min(1).max(6)
});
const catalogSchema = z.strictObject({
  schema_version: z.literal(1),
  mode: z.literal('demo'),
  procedures: z.array(procedureSchema).length(1)
});

const SAFE_MESSAGES = Object.freeze({
  MODE_NOT_ALLOWED: 'Somente o modo demo está disponível.',
  CATALOG_INVALID: 'Catálogo demonstrativo indisponível ou inválido; inicialização bloqueada.',
  TOOL_NOT_ALLOWED: 'Ferramenta não permitida nesta demonstração.',
  INVALID_ARGUMENTS: 'Argumentos inválidos para a ferramenta demonstrativa.',
  INTERNAL_ERROR: 'Não foi possível concluir a demonstração.'
});

export class SupportError extends Error {
  constructor(code) {
    super(SAFE_MESSAGES[code] ?? SAFE_MESSAGES.INTERNAL_ERROR);
    this.name = 'SupportError';
    this.code = Object.hasOwn(SAFE_MESSAGES, code) ? code : 'INTERNAL_ERROR';
  }
}

function freezeDeep(value) {
  for (const child of Object.values(value)) {
    if (child && typeof child === 'object') freezeDeep(child);
  }
  return Object.freeze(value);
}

export async function loadCatalog(catalogUrl = DEFAULT_CATALOG) {
  try {
    const metadata = await stat(catalogUrl);
    if (!metadata.isFile() || metadata.size > MAX_CATALOG_BYTES) throw new SupportError('CATALOG_INVALID');
    const bytes = await readFile(catalogUrl);
    if (bytes.length > MAX_CATALOG_BYTES) throw new SupportError('CATALOG_INVALID');
    const parsed = catalogSchema.safeParse(JSON.parse(bytes.toString('utf8')));
    if (!parsed.success) throw new SupportError('CATALOG_INVALID');
    return freezeDeep(parsed.data);
  } catch {
    throw new SupportError('CATALOG_INVALID');
  }
}

function resultOf(payload, isError = false) {
  const structuredContent = structuredClone(payload);
  return {
    content: [{ type: 'text', text: JSON.stringify(structuredContent) }],
    structuredContent,
    ...(isError ? { isError: true } : {})
  };
}

export async function createSupportService(options = {}) {
  const mode = Object.hasOwn(options, 'mode') ? options.mode : (process.env.SUPPORT_MODE ?? 'demo');
  // This check intentionally runs before loading the catalog. There is no real adapter.
  if (mode !== 'demo') throw new SupportError('MODE_NOT_ALLOWED');
  const catalog = await loadCatalog();
  const auditLimit = options.auditLimit ?? 100;
  if (!Number.isInteger(auditLimit) || auditLimit < 1 || auditLimit > 1_000) throw new SupportError('INTERNAL_ERROR');
  const audit = [];

  function validateCall(tool, args) {
    if (typeof tool !== 'string' || !TOOL_NAMES.has(tool)) throw new SupportError('TOOL_NOT_ALLOWED');
    const normalized = args === undefined && tool === 'list_procedures' ? {} : args;
    try {
      if (Buffer.byteLength(JSON.stringify(normalized) ?? '', 'utf8') > MAX_INPUT_BYTES) throw new SupportError('INVALID_ARGUMENTS');
      const parsed = inputSchemas[tool].safeParse(normalized);
      if (!parsed.success) throw new SupportError('INVALID_ARGUMENTS');
      return parsed.data;
    } catch {
      throw new SupportError('INVALID_ARGUMENTS');
    }
  }

  function call(tool, args) {
    const entry = {
      request_id: randomUUID(),
      timestamp: new Date().toISOString(),
      tool: TOOL_NAMES.has(tool) ? tool : 'unknown',
      outcome: 'denied',
      mode: 'demo'
    };
    // Retain only a validated allowlisted ID, even for rejected argument objects.
    if (args && typeof args === 'object' && !Array.isArray(args) && args.procedure_id === DEMO_PROCEDURE_ID) {
      entry.procedure_id = DEMO_PROCEDURE_ID;
    }
    const base = {
      request_id: entry.request_id,
      mode: 'demo',
      simulated: false,
      side_effects: 'none',
      system_status: 'not_configured'
    };
    let result;
    try {
      const valid = validateCall(tool, args);
      if (tool === 'list_procedures') {
        result = resultOf({ ...base, procedures: catalog.procedures.map(({ steps, ...summary }) => summary) });
      } else if (tool === 'get_procedure') {
        result = resultOf({ ...base, procedure: catalog.procedures[0] });
      } else {
        result = resultOf({
          ...base,
          simulated: true,
          procedure_id: valid.procedure_id,
          fictitious: true,
          result: { service: 'fictional-service', status: 'demo_available' },
          message: 'Resultado fixo e fictício. Nenhum sistema foi consultado.'
        });
      }
      entry.outcome = 'success';
    } catch (error) {
      const safe = error instanceof SupportError ? error : new SupportError('INTERNAL_ERROR');
      result = resultOf({ ...base, error: { code: safe.code, message: safe.message } }, true);
    }
    audit.push(Object.freeze(entry));
    if (audit.length > auditLimit) audit.splice(0, audit.length - auditLimit);
    return result;
  }

  return Object.freeze({
    validateCall,
    call,
    auditSnapshot: () => structuredClone(audit)
  });
}
