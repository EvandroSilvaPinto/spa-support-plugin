# SPA Support

Plugin de suporte para configurar fluxos do **SPA Coreplan pela interface do navegador**, com **spa-fluxos** para configuração, **spa-script** para ações, **spa-relatorio** para relatórios e quatro skills para consultas por nome ou ID. Compatível com o empacotamento do Codex e do Claude Code.

Não exige banco, Metabase, chave de API nem servidor MCP próprio. O acesso ao SPA usa o navegador conectado ao assistente e a conta de cada suporte.

## Catálogo de skills

No Codex, digite `$spa-support:` seguido do nome da skill. No Claude Code, use `/spa-support:` seguido do mesmo nome.

### Configuração de fluxos

| Pedido | Skill |
| --- | --- |
| Como está configurado este fluxo? Preciso revisar atores, regras ou adaptar um passo. | `spa-fluxos` |

### Consultas por nome ou ID

| Pedido | Skill |
| --- | --- |
| Qual é o ID do fluxo pelo nome? | `spa-fluxo-por-nome` |
| Como se chama o fluxo com este ID ou código FLU? | `spa-fluxo-por-id` |
| Qual é o ID deste passo dentro do meu fluxo? | `spa-passo-por-nome` |
| Como se chama o passo com este ID ou código STP? | `spa-passo-por-id` |

A resposta inclui o nome oficial, o ID e o link da ficha consultada. Quando vários nomes correspondem à busca, a skill apresenta as opções.

### Relatórios

| Pedido | Skill |
| --- | --- |
| Gere ou atualize um relatório do SPA usando os filtros da consulta. | `spa-relatorio` |

Exemplo no Codex com uma consulta de processos aberta

> `$spa-support:spa-relatorio` Use a consulta aberta no SPA e mantenha os filtros atuais. Gere um relatório dos processos por responsável, com o ID de cada processo, o passo atual e o link para a ficha.

No Claude Code, use `/spa-support:spa-relatorio` com o mesmo pedido. O resultado padrão é um arquivo HTML que abre no navegador e permite filtrar por responsável e exportar as linhas visíveis em CSV.

### Scripts em Novo processo → Ações

| Pedido | Skill |
| --- | --- |
| Preencha este script e mostre as opções para salvar ou executar. | `spa-script` |

Veja o [passo a passo com um script de exemplo](#primeiro-uso-da-spa-script).

## Instalar pelo próprio chat

Compartilhe este repositório e peça ao assistente:

> Instale o plugin SPA Support de https://github.com/EvandroSilvaPinto/spa-support-plugin. Leia o README e os manifests, use a instalação nativa adequada ao cliente em que estamos e confira em uma nova sessão se as skills do catálogo estão disponíveis. Não altere o SPA nem habilite permissões amplas. Se faltar acesso a terminal ou instalação de plugins, explique o passo manual necessário.

Em clientes com terminal e instalação de plugins habilitados, o assistente pode executar os comandos abaixo. A instalação respeita as aprovações e políticas do cliente. Um link do GitHub, sozinho, não instala software em qualquer chat nem adiciona o plugin aos catálogos públicos dos fornecedores.

## Claude Code

Na conversa do Claude Code:

```text
/plugin marketplace add EvandroSilvaPinto/spa-support-plugin
/plugin install spa-support@spa-support-marketplace
```

Ou peça ao assistente para executar no terminal:

```sh
claude plugin marketplace add EvandroSilvaPinto/spa-support-plugin
claude plugin install spa-support@spa-support-marketplace --scope user
```

Inicie uma nova sessão e use:

```text
/spa-support:spa-fluxos
```

Para acessar o navegador, habilite a integração oficial Claude in Chrome com `/chrome` ou inicie `claude --chrome`. A extensão, autenticação e plano compatíveis são requisitos separados do plugin. Veja a [documentação oficial do Chrome](https://code.claude.com/docs/en/chrome).

## Codex

Peça ao assistente para executar no terminal local:

```sh
codex plugin marketplace add EvandroSilvaPinto/spa-support-plugin
codex plugin add spa-support@spa-support-marketplace
```

Inicie uma nova sessão e peça:

```text
Use $spa-support:spa-fluxos para analisar o fluxo aberto no SPA. Primeiro explique os atores, destinatários e regras; não altere nada.
```

Em superfícies sem esses comandos, use o gerenciador de plugins/marketplaces oferecido pelo host. Não há promessa de instalação por URL no ChatGPT comum ou em uma superfície que não permita plugins de repositório. A distribuição usa os formatos oficiais de [plugins OpenAI](https://developers.openai.com/plugins/build/plugins) e [marketplaces Claude Code](https://code.claude.com/docs/en/plugin-marketplaces).

## O que a spa-fluxos cobre

- Explicar, mapear, comparar e diagnosticar configurações de fluxos.
- Preparar e aplicar criação/edição de passos e atributos pelas telas disponíveis.
- Adaptar duplicações, conferindo **executores**, **destinatários** e **associações dos atores** separadamente.
- Revisar regras de habilitação, sequências, próximos passos, fases e condições de falha.
- Examinar dependências de modelos, listas, variáveis, gatilhos, comunicações e recorrências.
- Reabrir objetos após salvar e registrar o que foi confirmado ou permaneceu pendente.

Exemplo de pedido:

> Duplique o passo [código] do fluxo [nome] para o núcleo [destino]. Preserve a origem, confira os atores e recursos do destino e adapte regras, atributos, fases e próximos passos. Antes de criar, confira se já existe um equivalente. Aplique pela interface a configuração definida no pedido.

Não reutiliza atores só pela semelhança dos nomes. Não confunde destinatários da distribuição com quem pode executar a ação. Não exige acesso ao banco para validar o que está visível.

## Alcance e limites

Os controles foram estudados em SPA v84.3.3. O pacote público usa exemplos fictícios e não inclui inventários, configurações reais, consultas SQL, credenciais ou sessões de clientes. Revalide os controles na versão e na conta utilizadas.

Ações no modelador podem persistir imediatamente; a skill diferencia configuração e execução em processo. Uma criação, alteração, ativação ou duplicação real só deve ocorrer no escopo da tarefa solicitada, com as aprovações aplicáveis. Não se testa configuração acionando gatilhos ou processos de produção.

A descoberta não testou salvamento nem profundidade da cópia nativa no SPA. A skill orienta a inspeção da versão atual, reconstrução pela interface quando apropriado e verificação do resultado. Não promete clonagem nativa onde ela não foi observada.

## Estrutura

```text
.agents/plugins/marketplace.json        # catálogo Codex
.claude-plugin/marketplace.json         # catálogo Claude Code
plugins/spa-support/
  plugin.json                          # manifest portable/OpenAI
  .claude-plugin/plugin.json           # manifest Claude Code
  skills/                              # sete skills compartilhadas pelos dois clientes
examples/support-demo/                 # servidor MCP fictício anterior, opcional
tests/                                # validação do empacotamento público
```

O exemplo MCP não é carregado na instalação do plugin. Ele preserva o código demonstrativo anterior e seus testes, sem adicionar dependências ao uso de spa-fluxos. Veja [o exemplo](examples/support-demo/README.md).

## Verificação e atualização

Para quem mantém o repositório, Node 24.15.x é usado nos testes:

```sh
npm test
claude plugin validate . --strict
claude plugin validate plugins/spa-support --strict
```

Confira os [resultados e limites de compatibilidade](docs/compatibilidade.md). Para uma nova versão, altere a versão nos dois manifests do plugin e na validação. No Claude Code, versões de manifest controlam atualização do cache; não mantenha a mesma versão para uma mudança publicada.

Atualizar no cliente:

```sh
claude plugin marketplace update spa-support-marketplace
claude plugin update spa-support@spa-support-marketplace
```

```sh
codex plugin marketplace upgrade spa-support-marketplace
codex plugin add spa-support@spa-support-marketplace
```

Reabra a sessão após atualizar. Não é necessário alterar manualmente permissões, arquivos de login ou configurações globais para usar a skill.

Licença [MIT](LICENSE). Projeto independente; não é um plugin oficial da Coreplan, OpenAI ou Anthropic.

## Primeiro uso da spa-script

1. Após instalar ou atualizar o plugin, inicie uma nova sessão do assistente. Abra o SPA da procuradoria no navegador conectado e confira o ambiente e a conta.
2. No Codex, copie o pedido abaixo. No Claude Code, troque a primeira linha por `/spa-support:spa-script`.

   ~~~text
   $spa-support:spa-script
   Abra Novo processo → Ações no SPA.
   No campo “Script de”, use a referência “Primeiro teste da equipe”.
   Deixe a data e a hora em branco.
   Preencha o campo “Script” com esta expressão:
   2 + 3
   Mostre as opções disponíveis para salvar ou executar e aguarde minha escolha.
   ~~~

3. Confira se o campo **Script** contém apenas `2 + 3`. A expressão serve para experimentar o preenchimento sem depender de IDs ou cadastros da procuradoria. **Script de**, data e hora são opcionais. Para usar um script da equipe, substitua a expressão pelo texto completo, mantendo as quebras de linha.
4. Leia a lista de opções que o assistente encontrou na tela. Para concluir, responda com o rótulo da opção desejada. Para testar apenas o preenchimento, responda “Pare aqui”. Se escolher salvar ou executar, confira a mensagem que o SPA apresentar.
