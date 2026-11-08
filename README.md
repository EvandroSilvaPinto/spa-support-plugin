# SPA Support

Plugin de suporte para configurar fluxos do **SPA Coreplan pela interface do navegador**, com a skill **spa-fluxos**. Compatível com o empacotamento do Codex e do Claude Code.

Não exige banco, Metabase, chave de API nem servidor MCP próprio. O acesso ao SPA usa o navegador conectado ao assistente e a conta de cada suporte.

## Instalar pelo próprio chat

Compartilhe este repositório e peça ao assistente:

> Instale o plugin SPA Support de https://github.com/EvandroSilvaPinto/spa-support-plugin. Leia o README e os manifests, use a instalação nativa adequada ao cliente em que estamos e confira que spa-fluxos ficou disponível. Não altere o SPA nem habilite permissões amplas. Se faltar acesso a terminal ou instalação de plugins, explique o passo manual necessário.

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

## O que a skill cobre

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
  skills/spa-fluxos/                   # uma única skill para ambos
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
