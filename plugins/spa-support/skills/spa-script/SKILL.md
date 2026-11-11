---
name: spa-script
description: Preencher um script fornecido pelo usuário em Novo processo → Ações no SPA e apresentar as opções disponíveis para executar ou salvar.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e inclua o contexto observado na conferência da demanda.

Use a sessão autenticada do SPA já aberto no navegador. Abra Novo processo → Ações e localize o formulário pelo campo Script.

1. Preencha Script com o texto fornecido, preservando espaços, aspas e quebras de linha. Se o texto estiver faltando, peça o script.
2. Script de é a referência opcional do script. Preencha quando o usuário informar a referência. Se o controle oferecer opções e houver mais de uma correspondência, peça que escolha.
3. A data e a hora do script também são opcionais. Preencha os valores informados conforme o formato exibido na tela. Quando o usuário omitir um campo opcional, preserve o estado do formulário e indique qualquer valor já preenchido na revisão.
4. Antes de concluir, confira o texto no editor e apresente a referência, a data e a hora como aparecem na tela. Liste todas as opções de conclusão exibidas nessa instalação, incluindo as de menus associados aos botões. Use os rótulos reais e indique quais estão desabilitadas. Abra menus de opções apenas pelo controle de expansão.
5. Aguarde a escolha do usuário e acione somente a opção escolhida. Relate a confirmação ou o erro exibido pelo SPA. Se a resposta for interrompida, confira o estado da ação antes de repetir, para evitar execução duplicada.
