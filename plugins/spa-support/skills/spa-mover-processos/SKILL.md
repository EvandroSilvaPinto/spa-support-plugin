---
name: spa-mover-processos
description: Mover procedures no SPA pela página Mover processos, alterando responsável e/ou passo e, opcionalmente, Definitivo e Provisório.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


# Mover processos

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e inclua o contexto observado na conferência da demanda.

Use a sessão autenticada do SPA já aberto no navegador.

1. Peça o(s) **procedure_id** e o **Responsável e/ou Passo** de destino. Se já estiverem informados, use os dados fornecidos e peça somente o que faltar ou estiver ambíguo. Deve haver ao menos um destino: responsável, passo ou ambos. **Definitivo** e **Provisório** são opcionais; não exija esses dados para prosseguir. Valide os procedure_id como inteiros positivos e remova duplicatas. Use os IDs internos das procedures, não números judiciais ou números SPA.
2. Na página **Mover processos**, preencha **Consulta SQL** com `id in (procedure_id)`, substituindo o marcador pelos IDs fornecidos, separados por vírgulas. Exemplo: `id in (101, 202)`. Clique em **Pesquisar**.
3. Confira os IDs retornados e selecione todos os registros referentes aos procedure_id solicitados. Confira todas as páginas e verifique se a seleção é mantida ao paginar. Antes de mover, a seleção deve corresponder ao lote solicitado, sem registros adicionais. Se faltarem IDs ou a paginação impedir conferir a seleção, resolva a diferença antes de prosseguir.
4. Preencha **Mover para o Responsável:** e/ou **Mover para o Passo:** conforme fornecido. Deixe sem destino o campo não solicitado. Configure **Definitivo** e **Provisório** somente conforme informado, respeitando também pedidos explícitos para desmarcar. Quando omitidos, preserve o estado desses controles e inclua seus valores na revisão. Resolva qualquer ambiguidade entre opções de responsável ou passo antes de selecionar.
5. Confira e apresente os IDs, a quantidade selecionada, o responsável e/ou passo de destino e os estados de **Definitivo** e **Provisório**. Confirme que correspondem ao pedido e, após a confirmação do usuário sobre a conferência, acione **Mover**, usando o rótulo real do botão nessa instalação (por exemplo, **Mover Processos**). Aguarde sempre a confirmação explícita dessa conferência antes de acionar a movimentação. Relate a confirmação ou o erro exibido pelo SPA e confira o resultado para o lote. Se o resultado for parcial ou incerto, consulte o estado dos IDs antes de repetir, para evitar movimentação duplicada.
