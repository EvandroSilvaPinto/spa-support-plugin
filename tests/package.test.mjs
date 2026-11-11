import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pluginRoot = resolve(root, 'plugins/spa-support');
const read = p => readFile(resolve(root, p), 'utf8');
const json = async p => JSON.parse(await read(p));

async function allFiles(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (['.git', 'node_modules'].includes(entry.name)) continue;
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) result.push(...await allFiles(path));
    else result.push(path);
  }
  return result;
}

test('both marketplaces resolve to the same plugin with matching identities', async () => {
  const portable = await json('plugins/spa-support/plugin.json');
  const claude = await json('plugins/spa-support/.claude-plugin/plugin.json');
  assert.equal(portable.name, 'spa-support');
  assert.equal(portable.version, '0.6.3');
  assert.equal(claude.name, portable.name);
  assert.equal(claude.version, portable.version);
  const codexMarket = await json('.agents/plugins/marketplace.json');
  const claudeMarket = await json('.claude-plugin/marketplace.json');
  assert.equal(codexMarket.name, 'spa-support-marketplace');
  assert.equal(claudeMarket.name, codexMarket.name);
  assert.equal(codexMarket.plugins.length, 1);
  assert.equal(claudeMarket.plugins.length, 1);
  for (const [market, source] of [[codexMarket, codexMarket.plugins[0].source.path], [claudeMarket, claudeMarket.plugins[0].source]]) {
    assert.equal(market.plugins[0].name, portable.name);
    assert.equal(resolve(root, source), pluginRoot);
  }
  assert.equal(codexMarket.plugins[0].policy.installation, 'AVAILABLE');
  assert.ok(claudeMarket.owner.name);
});

test('all published skills have a matching frontmatter name', async () => {
  const expected = ['spa-fluxo-por-id', 'spa-fluxo-por-nome', 'spa-fluxos', 'spa-mesa-de', 'spa-mover-processos', 'spa-passo-por-id', 'spa-passo-por-nome', 'spa-pessoa-por-id', 'spa-pessoa-por-nome', 'spa-pessoa-por-people', 'spa-relatorio', 'spa-responsavel-original', 'spa-script'];
  const base = resolve(pluginRoot, 'skills');
  const entries = await readdir(base, { withFileTypes: true });
  assert.deepEqual(entries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort(), expected);
  for (const name of expected) {
    const source = await readFile(resolve(base, name, 'SKILL.md'), 'utf8');
    const header = source.split(/\r?\n---\r?\n/, 1)[0];
    assert.ok(header.startsWith('---'));
    assert.equal(header.match(/^name: (.+)$/m)?.[1], name);
  }
});

test('all packaged skill reference links resolve within the plugin', async () => {
  const skill = resolve(pluginRoot, 'skills');
  const files = await allFiles(skill);
  assert.ok(files.some(f => f.endsWith(`${sep}SKILL.md`)));
  for (const path of files) {
    const data = await readFile(path);
    const text = new TextDecoder('utf-8', { fatal: true }).decode(data);
    assert.ok(!text.includes('\ufffd'), relative(root, path));
    if (!path.endsWith('.md')) continue;
    for (const [, link] of text.matchAll(/\]\(([^)]+)\)/g)) {
      if (/^[a-z]+:\/\//i.test(link) || link.startsWith('#')) continue;
      const target = resolve(dirname(path), link.split('#')[0]);
      assert.ok(!relative(pluginRoot, target).startsWith('..'), `escaped link: ${link}`);
      await readFile(target);
    }
  }
});

test('default installation has no hooks, MCP process or hidden dependency installer', async () => {
  const files = await allFiles(pluginRoot);
  assert.ok(!files.some(f => /(?:^|[/\\])(?:hooks|scripts|bin)(?:[/\\])/.test(relative(pluginRoot, f))));
  assert.ok(!files.some(f => /(?:^|[/\\])\.?mcp\.json$/.test(f)));
  for (const path of ['plugins/spa-support/plugin.json', 'plugins/spa-support/.claude-plugin/plugin.json']) {
    const manifest = await json(path);
    assert.equal(manifest.hooks, undefined);
    assert.equal(manifest.mcpServers, undefined);
  }
});

test('public package excludes client discovery artifacts and local identity', async () => {
  for (const path of await allFiles(root)) {
    const local = relative(root, path).replaceAll('\\', '/');
    assert.ok(!/CONTINUAR-NO|checkpoint|consultas-fluxo|levantamento-fluxo|evidencias-pgemt/i.test(local), local);
    if (local === 'tests/package.test.mjs') continue;
    const text = await readFile(path, 'utf8');
    assert.ok(!/https?:\/\/[^\s/]+\.coreplan\.com\.br|C:[/\\]Users[/\\][^/\\\s]+|\b(?:ACT|ATR|STP|FLU)\d{6}\b/.test(text), local);
    assert.ok(!/(?:gh[pousr]_[a-zA-Z0-9]{20,}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----)/.test(text), local);
  }
});
