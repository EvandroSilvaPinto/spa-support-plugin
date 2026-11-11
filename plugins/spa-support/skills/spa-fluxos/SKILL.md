---
name: spa-fluxos
description: "Use when working with SPA Coreplan workflow configuration through its web interface, including new or duplicated steps, actors, distribution, phases, attributes, transition rules, automations, comparison, and validation without database access."
---

## Consultas e confirmação de alterações

Execute consultas, buscas, diagnóstico, comparação e relatórios em modo de leitura sem pedir confirmação. Isso inclui preencher filtros de pesquisa, paginar e abrir fichas para conferir os dados. Obtenha órgão e ambiente da sessão existente. Peça esclarecimento somente quando faltar um dado necessário ou houver ambiguidade que afete o resultado.

Para demandas que preencham formulários de alteração, salvem, movam, criem, dupliquem, excluam, ativem ou acionem scripts no SPA, prepare a conferência antes dessas ações. A leitura e as pesquisas necessárias para preparar a conferência podem ser feitas diretamente. Apresente ação e resultado esperado; ambiente observado; nomes, códigos e IDs; lote e quantidade; origem e destino; valores atuais → propostos; campos opcionais e opção de conclusão; efeitos conhecidos e dados não confirmados, conforme aplicável. Para pessoas, diferencie People (ID da pessoa) de ID do usuário.

Peça: “Confirma a execução conforme esta conferência?” e aguarde confirmação explícita antes de preencher formulários de alteração ou executar a ação. O pedido inicial não substitui a confirmação da conferência concreta. Uma confirmação cobre o escopo apresentado, incluindo as etapas das skills auxiliares descritas; não a repita por clique. Se identificadores, destinos, escopo ou efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir.

Após a confirmação, execute somente o escopo conferido e verifique o resultado. Em resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata nas referências. Uma consulta não autoriza alterar cadastros nem executar scripts, mesmo quando o script se destina a obter informações.


Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e use o contexto observado na consulta ou na conferência de uma alteração.

# SPA Fluxos

Configure fluxos do SPA Coreplan pela interface que o suporte tem disponível. Trabalhe em português. Esta skill contém conhecimento operacional; usa as ferramentas de navegador/computador disponíveis no host e a sessão do usuário. Não fornece conexão autônoma, credenciais ou novas permissões.

## Entrada e conexão

1. Localize o SPA já aberto no navegador e obtenha domínio, órgão e ambiente diretamente da tela, sem pedir que o usuário forneça esses dados. Confira o fluxo e o código na interface. Não transfira IDs entre instalações.
2. Use a ferramenta de navegador conectada ao perfil correto; havendo falha, consulte o inventário e use a janela nativa como alternativa. Siga a documentação das ferramentas. Sem controle disponível, explique o requisito concreto; continue com orientação assistida, sem fingir conexão.
3. Use a sessão existente. Se exigir login, permita que o usuário o conclua. Não leia cookies, senhas, tokens ou perfis locais. A skill compartilhada não leva a sessão junto.
4. Para conectar no Codex ou Claude Code, leia [conexao-clients.md](references/conexao-clients.md). Depois abra Administração → Processos → Fluxos de Trabalho. Não dependa de Metabase, SQL, API privada, scripts da aplicação ou requisições diretas. Leia [interface.md](references/interface.md) para os caminhos e comportamentos observados.

## Escolha da operação

| Pedido | Referência a ler |
|---|---|
| Explicar, mapear, comparar, diagnosticar | [operacoes.md](references/operacoes.md), seção Diagnóstico |
| Criar ou editar passo/formulário | [operacoes.md](references/operacoes.md), seção Criar/editar |
| Atores, tramitação ou distribuição | [regras-e-atores.md](references/regras-e-atores.md) |
| Condições e próximos passos | [regras-e-atores.md](references/regras-e-atores.md) |
| Duplicar passo ou clonar fluxo | [operacoes.md](references/operacoes.md), seção Duplicar |
| Fases, variáveis, gatilhos, comunicação, recorrência | [interface.md](references/interface.md) e seção Dependências de [operacoes.md](references/operacoes.md) |

## Contrato de trabalho

- Determine origem, destino, resultado desejado e limites da alteração. Leia o estado atual antes de formular uma proposta. Faça perguntas apenas quando uma decisão necessária não puder ser resolvida pelas telas ou pelo pedido.
- Registre um plano concreto: alvo/código, antes → depois, atores executores, destinatários, condições, fases e dependências. Execute pela interface somente após a confirmação da conferência concreta. Um pedido de criar esta skill não autoriza modificar fluxos reais como teste.
- Mudanças de acesso sensível, exclusão definitiva e demais ações sujeitas à confirmação seguem a política do host no momento da ação. Prepare primeiro o resultado revisável. Não amplie acesso de atores para contornar uma falha de roteamento.
- **O modelador visual persiste criar, conectar, renomear, mover e excluir no fluxo real.** Não explore arrastando tarefas, criando conexões ou usando Ctrl+Z. Prefira formulários para alterações precisas. Não suponha que existe rascunho.
- Altere somente o solicitado. Configurar um passo e executá-lo num processo são ações distintas. Não execute passos, peticionamentos, gatilhos ou rotinas em massa para testar configuração sem pedido específico. Não leia conteúdos de processos.
- Não confunda opções disponíveis com selecionadas. Confira o estado selecionado dos controles e a identidade completa do objeto. Não escolha atores por semelhança de nome.
- Após salvar, reabra o objeto e confira os valores persistidos, relações e novo código. Em timeout, procure o resultado antes de tentar criar outra vez. Salvar sem erro não demonstra execução funcional.
- Entregue o que mudou, onde, como verificou e o que ficou pendente. Distinga **observado**, **proposto** e **não verificado**. Use capturas do estado final quando a ferramenta permitir, omitindo dados alheios à tarefa.

## Conhecimento inicial

Leia [exemplo-ficticio.md](references/exemplo-ficticio.md) para um caso didático sem dados de cliente. Os controles foram observados em SPA v84.3.3; configurações internas não integram o pacote público. Revalide na sessão atual: não trate exemplos como regras universais nem prometa cobertura integral de tipos ainda não inspecionados.
