# SPA Support

Use a skill **spa-fluxos** para explicar e configurar fluxos do SPA Coreplan pela interface do navegador, sem acesso ao banco. Ela cobre passos, atributos, atores, destinatários, fases, regras de transição e dependências.

No Claude Code, invoque `/spa-support:spa-fluxos`. No Codex, use `$spa-support:spa-fluxos`. Defina o fluxo, o passo e o resultado desejado. A skill distingue análise de alteração e confere os valores persistidos depois de salvar.

O navegador precisa estar conectado ao assistente e autenticado com a conta do suporte. No Claude Code, use a integração oficial Claude in Chrome com `/chrome` ou `claude --chrome`. Instalar este plugin não transporta login, não habilita permissões e não conecta banco ou MCP.

Os exemplos são fictícios. A profundidade da cópia nativa e os efeitos de salvar no SPA não foram testados durante a publicação. O modelador pode persistir ações imediatamente; altere apenas no escopo do pedido.

Código, instalação e compatibilidade: [repositório SPA Support](https://github.com/EvandroSilvaPinto/spa-support-plugin).

No Codex, confira as treze skills no seletor de skills ($). No Claude Code, procure os comandos com o prefixo /spa-support:. Para testar uma consulta, use $spa-support:spa-fluxo-por-id no Codex ou /spa-support:spa-fluxo-por-id no Claude Code e informe um código FLU conhecido.

As consultas disponíveis são spa-fluxo-por-nome, spa-fluxo-por-id, spa-passo-por-nome e spa-passo-por-id.

## Scripts em Novo processo → Ações

Use `$spa-support:spa-script` no Codex ou `/spa-support:spa-script` no Claude Code. Envie o texto do script e, se desejar, a referência em **Script de**, a data e a hora. Depois de preencher, o assistente apresenta as opções da tela para você escolher como concluir.

## Relatórios

No Codex, use `$spa-support:spa-relatorio`. No Claude Code, use `/spa-support:spa-relatorio`. Exemplo de pedido

> Use a consulta aberta no SPA e mantenha os filtros atuais. Gere um relatório dos processos por responsável, com o ID de cada processo, o passo atual e o link para a ficha.

Abra o HTML entregue para pesquisar processos, filtrar por responsável e exportar os resultados visíveis em CSV.

## Consultas de pessoas — versão 0.6.0

Use `spa-pessoa-por-nome` pelo nome, `spa-pessoa-por-people` pelo People (ID da pessoa) ou `spa-pessoa-por-id` pelo ID do usuário. As três retornam nome, People, ID do usuário vinculado e link da ficha verificada. Os dois identificadores são confirmados separadamente; valores indisponíveis são indicados como não confirmados.

## Consultas e confirmação — versão 0.6.2

Consultas e relatórios em modo de leitura dispensam confirmação, incluindo filtros, paginação e abertura de fichas. Alterações, preenchimento de formulários de alteração, salvamento, movimentações e scripts exigem conferência e confirmação explícita antes da execução.

## Sessão e mesa — versão 0.6.3

Todas as skills informam o usuário conectado e a mesa em uso antes de consultas ou ações e no resultado. A skill `spa-mesa-de` permite entrar como a pessoa solicitada pelo campo The way na sessão atual, com escolha em caso de homônimos e verificação do novo perfil e da mesa.

Use `$spa-support:spa-mesa-de` no Codex ou `/spa-support:spa-mesa-de` no Claude Code, seguido do nome.
