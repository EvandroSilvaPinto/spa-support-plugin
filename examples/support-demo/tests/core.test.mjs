import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import * as implementation from '../src/core.mjs';

const service = options => implementation.createSupportService(options);

test('demo lists only the fictitious implemented procedure', async () => {
  const support = await service();
  const result = support.call('list_procedures', {});
  assert.equal(result.isError, undefined);
  assert.equal(result.structuredContent.mode, 'demo');
  assert.equal(result.structuredContent.system_status, 'not_configured');
  assert.equal(result.structuredContent.side_effects, 'none');
  assert.deepEqual(result.structuredContent.procedures.map(p => p.procedure_id), ['demo-service-status']);
  assert.equal(result.structuredContent.procedures[0].fictitious, true);
  assert.deepEqual(JSON.parse(result.content[0].text), result.structuredContent);
});

test('get and simulate return fictitious data with no configured system', async () => {
  const support = await service();
  const got = support.call('get_procedure', { procedure_id: 'demo-service-status' });
  assert.equal(got.structuredContent.procedure.fictitious, true);
  assert.ok(got.structuredContent.procedure.steps.length > 0);
  const result = support.call('simulate_procedure', { procedure_id: 'demo-service-status' });
  assert.equal(result.structuredContent.simulated, true);
  assert.equal(result.structuredContent.system_status, 'not_configured');
  assert.equal(result.structuredContent.side_effects, 'none');
  assert.equal(result.structuredContent.result.service, 'fictional-service');
  assert.deepEqual(JSON.parse(result.content[0].text), result.structuredContent);
});

test('unrecognized IDs, fields, types, and tools are rejected without echoing payloads', async () => {
  const support = await service();
  const secret = 'PRIVATE_VALUE_SHOULD_NEVER_LEAK';
  const cases = [
    ['get_procedure', { procedure_id: secret }],
    ['simulate_procedure', { procedure_id: 'demo-service-status', actor: secret }],
    ['list_procedures', { [secret]: true }],
    ['get_procedure', { procedure_id: 'demo-service-status', approved: true }],
    ['get_procedure', { procedure_id: 'demo-service-status', url: 'https://example.invalid/' + secret }],
    ['get_procedure', { procedure_id: 'demo-service-status', command: secret }],
    ['get_procedure', {}],
    ['get_procedure', []],
    ['list_procedures', null],
    ['__proto__', {}],
    [secret, {}],
    ['simulate_procedure', { procedure_id: 'x'.repeat(20_000) }]
  ];
  for (const [tool, args] of cases) {
    const result = support.call(tool, args);
    assert.equal(result.isError, true, tool);
    assert.ok(result.structuredContent.error.code);
    assert.equal(result.structuredContent.side_effects, 'none');
    assert.equal(JSON.stringify(result).includes(secret), false);
    assert.equal(JSON.stringify(result).includes('https://'), false);
  }
  assert.equal(support.call('list_procedures', {}).isError, undefined);
});

test('every explicitly non-demo mode is denied before startup', async () => {
  for (const mode of ['production', 'real', '', 'DEMO', null, true]) {
    await assert.rejects(implementation.createSupportService({ mode }), { code: 'MODE_NOT_ALLOWED' });
  }
});

test('changing returned catalog and result objects cannot affect future requests', async () => {
  const support = await service();
  const listed = support.call('list_procedures', {});
  listed.structuredContent.procedures[0].procedure_id = 'real-system';
  const got = support.call('get_procedure', { procedure_id: 'demo-service-status' });
  got.structuredContent.procedure.steps.splice(0);
  assert.deepEqual(support.call('list_procedures', {}).structuredContent.procedures.map(p => p.procedure_id), ['demo-service-status']);
  assert.ok(support.call('get_procedure', { procedure_id: 'demo-service-status' }).structuredContent.procedure.steps.length > 0);
});

test('audit is bounded, cloned, and contains only safe metadata from successful or denied calls', async () => {
  const support = await service({ auditLimit: 3 });
  support.call('list_procedures', {});
  support.call('get_procedure', { procedure_id: 'demo-service-status' });
  support.call('simulate_procedure', { procedure_id: 'demo-service-status', tenant: 'PRIVATE_TENANT' });
  support.call('PRIVATE_TOOL', { procedure_id: 'PRIVATE_ID', password: 'PRIVATE_PASSWORD' });
  const audit = support.auditSnapshot();
  assert.equal(audit.length, 3);
  assert.deepEqual(audit.map(row => row.outcome), ['success', 'denied', 'denied']);
  assert.equal(audit[1].procedure_id, 'demo-service-status');
  assert.equal(audit[2].tool, 'unknown');
  assert.equal(audit[2].procedure_id, undefined);
  for (const row of audit) {
    assert.deepEqual(Object.keys(row).sort(), (row.procedure_id ? ['request_id', 'timestamp', 'tool', 'outcome', 'mode', 'procedure_id'] : ['request_id', 'timestamp', 'tool', 'outcome', 'mode']).sort());
    assert.equal(row.mode, 'demo');
    assert.ok(Number.isFinite(Date.parse(row.timestamp)));
    assert.match(row.request_id, /^[0-9a-f-]{36}$/i);
  }
  assert.equal(JSON.stringify(audit).includes('PRIVATE'), false);
  audit[0].tool = 'tampered';
  audit.push({ payload: 'PRIVATE' });
  assert.equal(support.auditSnapshot().length, 3);
  assert.notEqual(support.auditSnapshot()[0].tool, 'tampered');
  assert.equal(new Set(support.auditSnapshot().map(row => row.request_id)).size, 3);
});

test('missing, malformed, oversized, duplicate, or unimplemented catalogs fail closed', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'support-demo-catalog-'));
  try {
    const url = pathToFileURL(join(dir, 'catalog.json'));
    await assert.rejects(implementation.loadCatalog(url), { code: 'CATALOG_INVALID' });
    for (const data of ['{broken', 'x'.repeat(40_000), JSON.stringify({ schema_version: 1, mode: 'demo', procedures: [] })]) {
      await writeFile(url, data);
      await assert.rejects(implementation.loadCatalog(url), { code: 'CATALOG_INVALID' });
    }
    const valid = await implementation.loadCatalog();
    for (const mutate of [
      c => { c.procedures[0].procedure_id = 'real-procedure'; },
      c => { c.procedures.push(structuredClone(c.procedures[0])); },
      c => { c.procedures[0].shell = 'forbidden'; },
      c => { c.mode = 'production'; },
      c => { c.procedures[0].fictitious = false; }
    ]) {
      const changed = structuredClone(valid);
      mutate(changed);
      await writeFile(url, JSON.stringify(changed));
      await assert.rejects(implementation.loadCatalog(url), { code: 'CATALOG_INVALID' });
    }
  } finally {
    await rm(dir, { recursive: true, force: true });
  }
});
