import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

const serverPath = fileURLToPath(new URL('../src/server.mjs', import.meta.url));

async function withClient(run) {
  const client = new Client({ name: 'support-demo-contract-test', version: '0.1.0' });
  const transport = new StdioClientTransport({ command: process.execPath, args: [serverPath], env: { SUPPORT_MODE: 'demo' }, stderr: 'pipe' });
  let stderr = '';
  transport.stderr?.on('data', data => { stderr += data.toString(); });
  try {
    await client.connect(transport);
    await run(client);
    assert.equal(stderr, '');
  } finally {
    await client.close();
  }
}

test('real MCP client initializes, lists strict tools, and calls every demo operation', { timeout: 10_000 }, async () => {
  await withClient(async client => {
    assert.equal(client.getServerVersion().version, '0.1.0');
    const { tools } = await client.listTools();
    assert.deepEqual(tools.map(tool => tool.name).sort(), ['get_procedure', 'list_procedures', 'simulate_procedure']);
    for (const tool of tools) {
      assert.equal(tool.annotations.readOnlyHint, true);
      assert.equal(tool.annotations.destructiveHint, false);
      assert.equal(tool.annotations.openWorldHint, false);
      assert.equal(tool.inputSchema.additionalProperties, false);
    }
    const list = await client.callTool({ name: 'list_procedures', arguments: {} });
    assert.deepEqual(list.structuredContent.procedures.map(p => p.procedure_id), ['demo-service-status']);
    const got = await client.callTool({ name: 'get_procedure', arguments: { procedure_id: 'demo-service-status' } });
    assert.equal(got.structuredContent.procedure.fictitious, true);
    const simulation = await client.callTool({ name: 'simulate_procedure', arguments: { procedure_id: 'demo-service-status' } });
    assert.equal(simulation.structuredContent.simulated, true);
    assert.equal(simulation.structuredContent.side_effects, 'none');
    assert.equal(simulation.structuredContent.system_status, 'not_configured');
  });
});

test('MCP rejects extra fields and unknown tools without reflecting private payloads', { timeout: 10_000 }, async () => {
  await withClient(async client => {
    for (const call of [
      { name: 'simulate_procedure', arguments: { procedure_id: 'demo-service-status', PRIVATE_FIELD: 'PRIVATE_VALUE' } },
      { name: 'get_procedure', arguments: { procedure_id: 'PRIVATE_PROCEDURE' } },
      { name: 'PRIVATE_TOOL', arguments: { password: 'PRIVATE_VALUE' } },
      { name: '__proto__', arguments: {} },
      { name: 'list_procedures', arguments: { nested: Array(50).fill('PRIVATE_VALUE') } }
    ]) {
      const result = await client.callTool(call);
      assert.equal(result.isError, true);
      assert.ok(result.structuredContent.error.code);
      assert.equal(JSON.stringify(result).includes('PRIVATE'), false);
    }
    const recovery = await client.callTool({ name: 'list_procedures', arguments: {} });
    assert.equal(recovery.isError, undefined);
  });
});

test('process fails closed when SUPPORT_MODE is production', { timeout: 10_000 }, async () => {
  const child = spawn(process.execPath, [serverPath], { env: { ...process.env, SUPPORT_MODE: 'production' }, stdio: ['pipe', 'pipe', 'pipe'], windowsHide: true });
  let stdout = '';
  let stderr = '';
  child.stdout.on('data', data => { stdout += data.toString(); });
  child.stderr.on('data', data => { stderr += data.toString(); });
  const code = await new Promise((resolve, reject) => { child.once('exit', resolve); child.once('error', reject); });
  assert.equal(code, 1);
  assert.equal(stdout, '');
  assert.match(stderr, /MODE_NOT_ALLOWED/);
  assert.equal(stderr.includes('production'), false);
});
