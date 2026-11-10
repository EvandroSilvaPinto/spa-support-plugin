# Compatibilidade de distribuição

Versão do plugin: 0.3.1. Verificação: 08/11/2026.

| Verificação | Alcance |
|---|---|
| Testes do pacote | Catálogos apontam para o mesmo plugin; nome e versão coincidem; referências resolvem dentro do pacote; ausência de inicializadores ocultos e de dados de descoberta |
| Validador Claude Code | Manifest de plugin e marketplace, incluindo referências e estrutura |
| Validador de skill Codex | Frontmatter, nome e ausência de placeholders inacabados |
| Exemplo MCP | Dez testes, incluindo cliente stdio, recusas de entradas e modo real |
| Navegação SPA | Controles observados previamente; alterações reais de fluxo não executadas durante a publicação |
| Navegador Claude | Guia adaptado à integração oficial; login e alteração no SPA não testados com Claude Code |

Instalação por GitHub depende do cliente, permissões de instalação, Git/rede e versão do host. O plugin não contém hooks, MCP obrigatório, rotinas de instalação de dependências ou coleta de credenciais. O exemplo Node fica fora da raiz do plugin instalado.

Os clientes podem exigir nova sessão depois da instalação. O teste de instalação verifica distribuição e descoberta da skill; não comprova a execução funcional de regras de negócio no SPA.

## Fontes usadas para o formato

- [OpenAI: estrutura, manifests e marketplace](https://developers.openai.com/plugins/build/plugins)
- [Claude Code: marketplace](https://code.claude.com/docs/en/plugin-marketplaces)
- [Claude Code: manifest](https://code.claude.com/docs/en/plugins-reference)
- [Claude Code: Chrome](https://code.claude.com/docs/en/chrome)

Este repositório é uma distribuição por GitHub. Não foi submetido aos catálogos públicos de OpenAI ou Anthropic.

Em 10/11/2026, em uma sessão autenticada do Chrome no Codex (SPA v84.3.3), foram conferidos o nome e o código de um fluxo e de um passo. O catálogo vinculava o nome à ficha do fluxo. Na tabela filtrada por nome, o link do passo também apareceu em referências de outras linhas. Para reproduzir, consulte um fluxo e um passo conhecidos por nome e depois por ID, comparando os links e os códigos nas fichas. A reprodução pelo Claude Code continua pendente.
