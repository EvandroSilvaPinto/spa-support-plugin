---
name: spa-mover-processos
description: Mover procedures no SPA pela página Mover processos, alterando responsável e/ou passo e, opcionalmente, Definitivo e Provisório.
---

## Consultas e confirmação de alterações

Execute consultas, buscas, diagnóstico, comparação e relatórios em modo de leitura sem pedir confirmação. Isso inclui preencher filtros de pesquisa, paginar e abrir fichas para conferir os dados. Obtenha órgão e ambiente da sessão existente. Peça esclarecimento somente quando faltar um dado necessário ou houver ambiguidade que afete o resultado.

Para demandas que preencham formulários de alteração, salvem, movam, criem, dupliquem, excluam, ativem ou acionem scripts no SPA, prepare a conferência antes dessas ações. A leitura e as pesquisas necessárias para preparar a conferência podem ser feitas diretamente. Apresente ação e resultado esperado; ambiente observado; nomes, códigos e IDs; lote e quantidade; origem e destino; valores atuais → propostos; campos opcionais e opção de conclusão; efeitos conhecidos e dados não confirmados, conforme aplicável. Para pessoas, diferencie People (ID da pessoa) de ID do usuário.

Peça: “Confirma a execução conforme esta conferência?” e aguarde confirmação explícita antes de preencher formulários de alteração ou executar a ação. O pedido inicial não substitui a confirmação da conferência concreta. Uma confirmação cobre o escopo apresentado, incluindo as etapas das skills auxiliares descritas; não a repita por clique. Se identificadores, destinos, escopo ou efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir.

Após a confirmação, execute somente o escopo conferido e verifique o resultado. Em resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata nas referências. Uma consulta não autoriza alterar cadastros nem executar scripts, mesmo quando o script se destina a obter informações.


# Mover processos

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e use o contexto observado na consulta ou na conferência de uma alteração.

Use a sessão autenticada do SPA já aberto no navegador.

1. Peça o(s) **procedure_id** e o **Responsável e/ou Passo** de destino. Se já estiverem informados, use os dados fornecidos e peça somente o que faltar ou estiver ambíguo. Deve haver ao menos um destino: responsável, passo ou ambos. **Definitivo** e **Provisório** são opcionais; não exija esses dados para prosseguir. Valide os procedure_id como inteiros positivos e remova duplicatas. Use os IDs internos das procedures, não números judiciais ou números SPA.
2. Na página **Mover processos**, preencha **Consulta SQL** com `id in (procedure_id)`, substituindo o marcador pelos IDs fornecidos, separados por vírgulas. Exemplo: `id in (101, 202)`. Clique em **Pesquisar**.
3. Confira os IDs retornados e selecione todos os registros referentes aos procedure_id solicitados. Confira todas as páginas e verifique se a seleção é mantida ao paginar. Antes de mover, a seleção deve corresponder ao lote solicitado, sem registros adicionais. Se faltarem IDs ou a paginação impedir conferir a seleção, resolva a diferença antes de prosseguir.
4. Preencha **Mover para o Responsável:** e/ou **Mover para o Passo:** conforme fornecido. Deixe sem destino o campo não solicitado. Configure **Definitivo** e **Provisório** somente conforme informado, respeitando também pedidos explícitos para desmarcar. Quando omitidos, preserve o estado desses controles e inclua seus valores na revisão. Resolva qualquer ambiguidade entre opções de responsável ou passo antes de selecionar.
5. Confira e apresente os IDs, a quantidade selecionada, o responsável e/ou passo de destino e os estados de **Definitivo** e **Provisório**. Confirme que correspondem ao pedido e, após a confirmação do usuário sobre a conferência, acione **Mover**, usando o rótulo real do botão nessa instalação (por exemplo, **Mover Processos**). Aguarde sempre a confirmação explícita dessa conferência antes de acionar a movimentação. Relate a confirmação ou o erro exibido pelo SPA e confira o resultado para o lote. Se o resultado for parcial ou incerto, consulte o estado dos IDs antes de repetir, para evitar movimentação duplicada.
