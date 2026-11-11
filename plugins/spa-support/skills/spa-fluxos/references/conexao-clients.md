# Conectar pelo host disponível

O plugin fornece instruções de trabalho. A navegação usa a ferramenta de navegador/computador do próprio host e o login do suporte; o plugin não inicia um servidor de acesso ao SPA.

## Codex / ChatGPT desktop

Localize as ferramentas de navegador ou uso do computador disponíveis na sessão. Use o inventário do host para escolher aba, janela e perfil corretos. Leia a documentação da ferramenta antes de agir; use os métodos e índices da observação atual. Não reaproveite IDs de abas de outra conversa ou instalação.

Se o host não expuser controle do navegador, informe isso. A instalação do plugin não instala ou habilita automaticamente extensões, ferramentas de computador ou acessos da conta. Onde houver um plugin de uso do computador compatível, siga a instalação autorizada pelo usuário e a política do host. Não configure permissões amplas ou execuções sem confirmação como atalho.

No Codex, a invocação da skill instalada como plugin usa `$spa-support:spa-fluxos`. Depois de instalar, inicie uma nova sessão para carregar skills e ferramentas.

## Claude Code

Use a integração oficial **Claude in Chrome** quando disponível. Em uma sessão interativa, `/chrome` mostra o estado da conexão e as permissões. Para iniciar pelo terminal com integração de navegador, o comando é `claude --chrome`.

O suporte deve ter Claude Code, a extensão Claude in Chrome compatível, login Anthropic compatível com esse recurso e acesso ao site. A integração oficial possui requisitos de plano, autenticação e ambiente que podem mudar; consulte a documentação oficial antes de orientar instalação. Não prometa funcionamento por API key, provedores terceirizados ou WSL.

Descubra as ferramentas de navegador realmente fornecidas à sessão e siga suas descrições para inventariar contexto, navegar, ler, preencher e salvar. Não suponha que existam APIs `cua`, `sky` ou `tab.playwright` no Claude. Nunca tente executar essas chamadas em Bash ou instalar outro agente como alternativa.

Use sempre o SPA já aberto no navegador e a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta; nunca peça esses dados ou sua confirmação ao usuário. Se aparecer login ou CAPTCHA, entregue essa etapa ao usuário. Respeite as aprovações por site e ação.

A invocação da skill como plugin é `/spa-support:spa-fluxos`. Se a sessão ainda não carregou o plugin, inicie outra após a instalação. Instalação e login do SPA são etapas separadas.

## Sem controle disponível

Continue com explicação e um roteiro assistido quando isso for útil, identificando claramente que o usuário fará as ações. Não use SQL, `curl`, endpoints privados, extração de cookies ou scripts de navegador por fora do host para contornar a ausência de ferramenta. Não reporte alteração concluída sem observar o resultado.

## Documentação oficial

- [OpenAI — empacotar e distribuir plugins](https://developers.openai.com/plugins/build/plugins)
- [Claude Code — integração com Chrome](https://code.claude.com/docs/en/chrome)
- [Claude Code — marketplaces](https://code.claude.com/docs/en/plugin-marketplaces)

Compatibilidade de empacotamento verificada em 08/11/2026. A integração de navegador do Claude não foi testada contra uma instalação real de cliente durante a publicação deste pacote.
