import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { MAX_INPUT_BYTES } from './core.mjs';

/**
 * Uses the official stdio transport with a guard before SDK argument parsing.
 * The guard keeps rejected payload details out of SDK validation errors and
 * records denied tool calls through the same in-memory audit as successful calls.
 */
export class GuardedStdioTransport {
  constructor(support, stdin = process.stdin, stdout = process.stdout) {
    this.support = support;
    this.inner = new StdioServerTransport(stdin, stdout, { maxBufferSize: MAX_INPUT_BYTES });
  }

  async start() {
    this.inner.onmessage = message => {
      if (message.method === 'tools/call') {
        const name = message.params?.name;
        const args = message.params?.arguments;
        try {
          this.support.validateCall(name, args);
        } catch {
          const result = this.support.call(name, args);
          if (Object.hasOwn(message, 'id')) {
            void this.send({ jsonrpc: '2.0', id: message.id, result }).catch(() => {
              this.onerror?.(new Error('MCP transport failure.'));
            });
          }
          return;
        }
      }
      this.onmessage?.(message);
    };
    this.inner.onerror = () => this.onerror?.(new Error('Invalid MCP input.'));
    this.inner.onclose = () => this.onclose?.();
    await this.inner.start();
  }

  async send(message) {
    await this.inner.send(message);
  }

  async close() {
    await this.inner.close();
  }
}
