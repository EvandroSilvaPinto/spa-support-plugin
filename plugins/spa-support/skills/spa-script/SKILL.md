---
name: spa-script
description: Preencher um script fornecido pelo usuário em Novo processo → Ações no SPA e apresentar as opções disponíveis para executar ou salvar.
---

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Nunca peça ao usuário a procuradoria, o órgão ou o ambiente, nem solicite confirmação desses dados; obtenha o contexto diretamente da aba aberta.

Use a sessão autenticada do SPA já aberto no navegador. Abra Novo processo → Ações e localize o formulário pelo campo Script.

1. Preencha Script com o texto fornecido, preservando espaços, aspas e quebras de linha. Se o texto estiver faltando, peça o script.
2. Script de é a referência opcional do script. Preencha quando o usuário informar a referência. Se o controle oferecer opções e houver mais de uma correspondência, peça que escolha.
3. A data e a hora do script também são opcionais. Preencha os valores informados conforme o formato exibido na tela. Quando o usuário omitir um campo opcional, preserve o estado do formulário e indique qualquer valor já preenchido na revisão.
4. Antes de concluir, confira o texto no editor e apresente a referência, a data e a hora como aparecem na tela. Liste todas as opções de conclusão exibidas nessa instalação, incluindo as de menus associados aos botões. Use os rótulos reais e indique quais estão desabilitadas. Abra menus de opções apenas pelo controle de expansão.
5. Aguarde a escolha do usuário e acione somente a opção escolhida. Relate a confirmação ou o erro exibido pelo SPA. Se a resposta for interrompida, confira o estado da ação antes de repetir, para evitar execução duplicada.
