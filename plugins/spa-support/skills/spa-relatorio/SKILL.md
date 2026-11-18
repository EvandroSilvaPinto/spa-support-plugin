---
name: spa-relatorio
description: Gerar ou atualizar qualquer relatório solicitado ao SPA Support. O formato padrão é um arquivo HTML interativo, inclusive quando outra skill do plugin fornece os dados. Respeitar pedidos explícitos de outro formato.
---

## Identificação da sessão e da mesa

Antes de executar cada consulta ou ação no SPA, confira na interface o usuário conectado e a mesa em uso e informe explicitamente ao usuário: **Usuário conectado: {nome completo}; mesa em uso: {nome da pessoa ou mesa exibida}.** Essa identificação é informativa e não exige confirmação adicional.

Diferencie o perfil conectado da mesa selecionada: consultar a mesa de outra pessoa não significa estar conectado como ela. Se estiver fora da mesa de trabalho e não houver mesa selecionada visível, informe **mesa: não exibida nesta página**. Se não conseguir confirmar o usuário, informe **usuário conectado: não confirmado** e identifique a sessão antes de executar a consulta ou ação solicitada. Não presuma a identidade a partir do nome pesquisado, do destinatário da ação ou de uma sessão anterior.

Ao trocar de usuário ou mesa, informe o contexto de origem antes da troca e confirme explicitamente o novo usuário e a nova mesa após a mudança. Inclua também o contexto confirmado na resposta de resultado ou na conferência da ação.


## Consultas e confirmação de alterações

Execute consultas, buscas, diagnóstico, comparação e relatórios em modo de leitura sem pedir confirmação. Isso inclui preencher filtros de pesquisa, paginar e abrir fichas para conferir os dados. Obtenha órgão e ambiente da sessão existente. Peça esclarecimento somente quando faltar um dado necessário ou houver ambiguidade que afete o resultado.

Para demandas que preencham formulários de alteração, salvem, movam, criem, dupliquem, excluam, ativem ou acionem scripts no SPA, prepare a conferência antes dessas ações. A leitura e as pesquisas necessárias para preparar a conferência podem ser feitas diretamente. Apresente ação e resultado esperado; ambiente observado; nomes, códigos e IDs; lote e quantidade; origem e destino; valores atuais → propostos; campos opcionais e opção de conclusão; efeitos conhecidos e dados não confirmados, conforme aplicável. Para pessoas, diferencie People (ID da pessoa) de ID do usuário.

Peça: “Confirma a execução conforme esta conferência?” e aguarde confirmação explícita antes de preencher formulários de alteração ou executar a ação. O pedido inicial não substitui a confirmação da conferência concreta. Uma confirmação cobre o escopo apresentado, incluindo as etapas das skills auxiliares descritas; não a repita por clique. Se identificadores, destinos, escopo ou efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir.

Após a confirmação, execute somente o escopo conferido e verifique o resultado. Em resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata nas referências. Uma consulta não autoriza alterar cadastros nem executar scripts, mesmo quando o script se destina a obter informações.


Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e use o contexto observado na consulta ou na conferência de uma alteração.

# Relatórios do SPA

Entregue o arquivo .html pronto para abrir no navegador e um link para ele. Aplique este padrão também a pedidos de atualização de um relatório anterior. Uma consulta pontual ou um pedido de IDs separados por vírgula pode ser respondido diretamente no formato solicitado.

## Dados e cobertura

Use a consulta ou a skill do SPA adequada ao assunto. Preserve os filtros do pedido e informe no relatório a fonte, o momento de referência e a quantidade de registros. Para processos, diferencie passo atual de passo executado e data de recebimento de data de andamento. Se o usuário indicar uma consulta aberta, confira seus filtros e percorra todas as páginas. Compare o total exibido com os IDs distintos do conjunto coletado. Se houver divergência, reconcilie os dados ou identifique a cobertura parcial. Em atualizações baseadas em arquivo já coletado, indique a data dessa coleta.

## Entrega interativa

- Gere um HTML autônomo em português, com estilos e interações locais. Escape os valores vindos do SPA ao montar o HTML. Use somente os campos necessários ao pedido.
- Para tabelas, inclua busca, ordenação por coluna, contagem de resultados visíveis e filtros pelos campos relevantes, como responsável ou fluxo. Em relatórios descritivos, organize os assuntos em seções expansíveis com busca.
- Para processos, mostre o ID da procedure com link para a ficha no ambiente consultado. Preserve identificadores como texto e ordene datas e quantidades pelos seus valores.
- Em relatórios tabulares, permita exportar a seleção filtrada em CSV. Ofereça uma versão de impressão legível. Indique quando a consulta está vazia e quando os filtros locais ocultam todos os resultados.
- Aplique a identidade visual do SPA (abaixo) e o botão Atualizar com persistência de filtros (abaixo).
- Antes da entrega, abra o arquivo, confira totais e links e teste busca, filtros e ordenação com os dados disponíveis. Teste também o botão Atualizar: aplique busca, filtros e ordenação, atualize e confirme que continuam aplicados. Ao atualizar, substitua também contagens, critérios e datas apresentados no HTML.

## Identidade visual do SPA

Medida no SPA (spa.pge.mt.gov.br). Defina como variáveis em `:root` e use em todo o HTML.

- Fonte: `Roboto, sans-serif`, corpo 13,5px. Não carregue fonte externa; a pilha cai para sans-serif se Roboto não existir.
- Fundo da página `#f4f7fb`; cartões brancos com cantos arredondados e sombra suave; texto secundário `#747a80`; texto de campos `#30425e`.
- Cabeçalho e faixa de título: `linear-gradient(110deg, #0e3263 0%, #1456a0 58%, #1776d2 100%)`, texto branco.
- Cabeçalho do relatório: marca textual **SPA** em negrito seguida de uma etiqueta arredondada com o órgão (ex.: **PGE-MT**, obtido da sessão), depois o título do relatório e, abaixo, fonte, momento de referência e quantidade de registros. Não use imagem de logo.
- Primário/foco/link/página ativa `#1769e0`, com anel de foco `rgba(23,105,224,.2)`; botão secundário fundo `#eef2f7`, texto `#59677c`, hover `#dfe6ef`; borda de botão outline `#aeb9c8`; raio dos botões 9px.
- Campos: fundo `#f8faff`, borda `#dce3ec`, foco `#77aaf0`, placeholder `#8793a7`.
- Destaques semânticos dos indicadores: âmbar (a vencer), roxo (próximos dias), vermelho (vencidos), verde (informativo), cada um em ícone/fundo claro.
- Suporte a tema escuro com `prefers-color-scheme`, mantendo o gradiente do cabeçalho, e layout legível em celular. Na impressão, remova o gradiente e use fundo branco.

## Botão Atualizar sem perder filtros

- Entregue **um único arquivo .html**: os dados ficam embutidos em `<script id="dados" type="application/json">` (fonte, órgão, ambiente, momento de referência e registros), lidos com `JSON.parse`. Escape `</` como `<\/` dentro do JSON. Não crie arquivo de dados separado nem use `fetch`, que o Chrome bloqueia em `file://`.
- O botão **Atualizar** (ícone de recarregar) grava o estado e a data/quantidade da coleta atual, e recarrega a página com `location.reload()`. Ao reabrir, restaura o estado e informa "Dados atualizados." ou "Sem alterações desde {data}." conforme a coleta mudou ou não. Exibe a data/hora da coleta junto ao botão.
- Mantenha o estado de busca, filtros, ordenação, página e seções abertas em um objeto único, gravado em `localStorage` (chave com o nome do relatório) dentro de `try/catch`, e também no hash da URL como reserva. Ao abrir ou atualizar, restaure esse estado; valores de filtro que não existam mais nos dados novos são descartados e o aviso "filtro removido: X" é exibido.
- Inclua também um botão **Limpar filtros**, separado do Atualizar.
- O botão não consulta o SPA. Para dados novos, o Claude refaz a coleta e **regrava o bloco de dados do mesmo .html** (mantendo o nome do arquivo); o usuário então clica em Atualizar na aba já aberta. Informe isso no rodapé do relatório.
- Teste na entrega: aplique filtros, altere a coleta no arquivo, clique em Atualizar e confirme dados novos com filtros mantidos.
