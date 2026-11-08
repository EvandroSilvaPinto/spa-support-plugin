import { pathToFileURL } from 'node:url';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { createSupportService, inputSchemas, SupportError } from './core.mjs';
import { GuardedStdioTransport } from './transport.mjs';

export async function createDemoServer(options = {}) {
  const support = await createSupportService(options);
  const server = new McpServer({ name: 'internal-support-demo-mcp', version: '0.1.0' }, { maxToolInputElements: 4 });
  const descriptions = {
    list_procedures: 'Lista somente o exemplo fictício disponível. Sistema real não configurado.',
    get_procedure: 'Lê as etapas do procedimento fictício demo-service-status, sem consultas externas.',
    simulate_procedure: 'Retorna o status fixo de um serviço fictício. Simulação sem efeitos externos.'
  };
  for (const [name, inputSchema] of Object.entries(inputSchemas)) {
    server.registerTool(name, {
      description: descriptions[name],
      inputSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        openWorldHint: false,
        idempotentHint: true
      }
    }, args => support.call(name, args));
  }
  // Never print SDK error objects, because upstream errors may include input details.
  server.server.onerror = () => { process.stderr.write('MCP input rejected.\n'); };
  return { server, support };
}

export async function startDemoServer() {
  const { server, support } = await createDemoServer();
  await server.connect(new GuardedStdioTransport(support));
  return { server, support };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  startDemoServer().catch(error => {
    const code = error instanceof SupportError ? error.code : 'INTERNAL_ERROR';
    process.stderr.write(`Support demo startup blocked: ${code}.\n`);
    process.exitCode = 1;
  });
}
