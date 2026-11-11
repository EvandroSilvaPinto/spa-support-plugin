---
name: spa-mesa-de
description: Abrir a mesa de trabalho de um usuário no SPA pelo campo The way, quando o usuário pedir para entrar como alguém ou acessar a mesa de uma pessoa.
---

## Identificação da sessão e da mesa

Antes de executar cada consulta ou ação no SPA, confira na interface o usuário conectado e a mesa em uso e informe explicitamente ao usuário: **Usuário conectado: {nome completo}; mesa em uso: {nome da pessoa ou mesa exibida}.** Essa identificação é informativa e não exige confirmação adicional.

Diferencie o perfil conectado da mesa selecionada: consultar a mesa de outra pessoa não significa estar conectado como ela. Se estiver fora da mesa de trabalho e não houver mesa selecionada visível, informe **mesa: não exibida nesta página**. Se não conseguir confirmar o usuário, informe **usuário conectado: não confirmado** e identifique a sessão antes de executar a consulta ou ação solicitada. Não presuma a identidade a partir do nome pesquisado, do destinatário da ação ou de uma sessão anterior.

Ao trocar de usuário ou mesa, informe o contexto de origem antes da troca e confirme explicitamente o novo usuário e a nova mesa após a mudança. Inclua também o contexto confirmado na resposta de resultado ou na conferência da ação.


# SPA — Mesa de um usuário

Acessar a mesa da pessoa solicitada usando a interface do SPA no navegador atual.

## Fluxo

1. Usar a aba atual do SPA no navegador do usuário, preservando sua sessão autenticada. Localizar a aba pelas ferramentas de navegador disponíveis; não abrir outro perfil ou uma sessão isolada.
2. Acessar `/do_you_know_the_way` no mesmo domínio da sessão autenticada. Se a aba já estiver nessa página, inspecioná-la sem recarregar.
3. Abrir o seletor **The way \***, pesquisar pelo nome solicitado e ler as opções retornadas.
4. Se houver mais de uma pessoa compatível, pedir uma escolha curta com os nomes completos e manter a página pronta para continuar. Incorporar respostas como “exemplo” à busca anterior. Não escolher arbitrariamente nem fixar João Exemplo como padrão.
5. Selecionar a pessoa identificada. Conferir o nome completo exibido no seletor e clicar em **Gimme the way** para entrar, salvo se o pedido limitar a ação ao preenchimento do campo.
6. Confirmar que a mesa abriu e que o perfil corresponde à pessoa selecionada. Os sinais observados incluem a página `/workspace`, a saudação **Olá, JOÃO.**, o nome completo no menu e a mensagem **You know the way!**. A saudação sozinha não distingue homônimos.
7. Manter a aba aberta e responder brevemente com o nome da pessoa cuja mesa foi acessada.

## Situações observadas

- Uma sessão de navegador diferente pode redirecionar para `/users/sign_in`, exibindo apenas Google e token. Verificar se foi usada a aba atual autenticada antes de concluir que não existe o campo The way. Se a aba correta também exigir autenticação, explicar o bloqueio e solicitar que o usuário faça login; não iniciar outro método de acesso por conta própria.
- O seletor é pesquisável (Select2). Depois de abri-lo, usar o campo de pesquisa da lista. Se o clique por acessibilidade não abrir a lista, observar a tela antes de usar outra interação suportada.
- IDs de elementos e identificadores de abas variam. Obter estado atualizado ao retomar uma escolha ou após erro de elemento obsoleto.
- Se não houver correspondência, informar o resultado e pedir um nome mais completo. Encerrar ao confirmar a mesa; não alterar processos nem outras configurações.

Exemplo: “entre na mesa de joão” pode retornar **JOÃO EXEMPLO**, **JOÃO MODELO** e **JOÃO DEMONSTRAÇÃO**. Perguntar qual deles; com a resposta “exemplo”, selecionar **JOÃO EXEMPLO**, entrar e verificar o perfil.
