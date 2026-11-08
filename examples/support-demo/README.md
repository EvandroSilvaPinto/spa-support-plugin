# MCP demonstrativo opcional

Este exemplo preserva o servidor local da primeira versão do projeto. Usa somente dados fictícios e não acessa o SPA. Não está registrado no marketplace e não inicia ao instalar SPA Support.

Requisitos do exemplo: Node >=24.15.0 e <25; dependências fixadas no package-lock.json. Para verificar:

```sh
npm ci --ignore-scripts
npm test
```

`npm start` inicia o servidor MCP por stdio, não uma página. As ferramentas implementadas são `list_procedures`, `get_procedure` e `simulate_procedure`; o único procedimento é `demo-service-status`. O modo real e campos extras são recusados. Não há ferramenta de execução nem adaptador de produção. A auditoria é limitada e fica em memória.

Os testes incluem inicialização por um cliente MCP e chamadas reais de stdio contra esta demonstração. Isso não valida conexão a sistemas de clientes. Nenhuma configuração desse exemplo é necessária para a skill spa-fluxos.
