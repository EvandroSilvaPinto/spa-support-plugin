---
name: spa-mover-processos
description: Mover procedures no SPA pela página Mover processos, alterando responsável e/ou passo e, opcionalmente, Definitivo e Provisório.
---

# Mover processos

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Nunca peça ao usuário a procuradoria, o órgão ou o ambiente, nem solicite confirmação desses dados; obtenha o contexto diretamente da aba aberta.

Use a sessão autenticada do SPA já aberto no navegador.

1. Peça o(s) **procedure_id** e o **Responsável e/ou Passo** de destino. Se já estiverem informados, use os dados fornecidos e peça somente o que faltar ou estiver ambíguo. Deve haver ao menos um destino: responsável, passo ou ambos. **Definitivo** e **Provisório** são opcionais; não exija esses dados para prosseguir. Valide os procedure_id como inteiros positivos e remova duplicatas. Use os IDs internos das procedures, não números judiciais ou números SPA.
2. Na página **Mover processos**, preencha **Consulta SQL** com `id in (procedure_id)`, substituindo o marcador pelos IDs fornecidos, separados por vírgulas. Exemplo: `id in (101, 202)`. Clique em **Pesquisar**.
3. Confira os IDs retornados e selecione todos os registros referentes aos procedure_id solicitados. Confira todas as páginas e verifique se a seleção é mantida ao paginar. Antes de mover, a seleção deve corresponder ao lote solicitado, sem registros adicionais. Se faltarem IDs ou a paginação impedir conferir a seleção, resolva a diferença antes de prosseguir.
4. Preencha **Mover para o Responsável:** e/ou **Mover para o Passo:** conforme fornecido. Deixe sem destino o campo não solicitado. Configure **Definitivo** e **Provisório** somente conforme informado, respeitando também pedidos explícitos para desmarcar. Quando omitidos, preserve o estado desses controles e inclua seus valores na revisão. Resolva qualquer ambiguidade entre opções de responsável ou passo antes de selecionar.
5. Confira e apresente os IDs, a quantidade selecionada, o responsável e/ou passo de destino e os estados de **Definitivo** e **Provisório**. Confirme que correspondem ao pedido e acione **Mover**, usando o rótulo real do botão nessa instalação (por exemplo, **Mover Processos**). Se o usuário tiver solicitado revisão antes da movimentação, aguarde sua confirmação. Relate a confirmação ou o erro exibido pelo SPA e confira o resultado para o lote. Se o resultado for parcial ou incerto, consulte o estado dos IDs antes de repetir, para evitar movimentação duplicada.
