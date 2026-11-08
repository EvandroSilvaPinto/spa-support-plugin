# SPA Support

Use a skill **spa-fluxos** para explicar e configurar fluxos do SPA Coreplan pela interface do navegador, sem acesso ao banco. Ela cobre passos, atributos, atores, destinatários, fases, regras de transição e dependências.

No Claude Code, invoque `/spa-support:spa-fluxos`. No Codex, use `$spa-support:spa-fluxos`. Defina o fluxo, o passo e o resultado desejado. A skill distingue análise de alteração e confere os valores persistidos depois de salvar.

O navegador precisa estar conectado ao assistente e autenticado com a conta do suporte. No Claude Code, use a integração oficial Claude in Chrome com `/chrome` ou `claude --chrome`. Instalar este plugin não transporta login, não habilita permissões e não conecta banco ou MCP.

Os exemplos são fictícios. A profundidade da cópia nativa e os efeitos de salvar no SPA não foram testados durante a publicação. O modelador pode persistir ações imediatamente; altere apenas no escopo do pedido.

Código, instalação e compatibilidade: [repositório SPA Support](https://github.com/EvandroSilvaPinto/spa-support-plugin).
