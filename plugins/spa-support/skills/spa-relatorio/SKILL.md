---
name: spa-relatorio
description: Gerar ou atualizar qualquer relatório solicitado ao SPA Support. O formato padrão é um arquivo HTML interativo, inclusive quando outra skill do plugin fornece os dados. Respeitar pedidos explícitos de outro formato.
---

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Nunca peça ao usuário a procuradoria, o órgão ou o ambiente, nem solicite confirmação desses dados; obtenha o contexto diretamente da aba aberta.

# Relatórios do SPA

Entregue o arquivo .html pronto para abrir no navegador e um link para ele. Aplique este padrão também a pedidos de atualização de um relatório anterior. Uma consulta pontual ou um pedido de IDs separados por vírgula pode ser respondido diretamente no formato solicitado.

## Dados e cobertura

Use a consulta ou a skill do SPA adequada ao assunto. Preserve os filtros do pedido e informe no relatório a fonte, o momento de referência e a quantidade de registros. Para processos, diferencie passo atual de passo executado e data de recebimento de data de andamento. Se o usuário indicar uma consulta aberta, confira seus filtros e percorra todas as páginas. Compare o total exibido com os IDs distintos do conjunto coletado. Se houver divergência, reconcilie os dados ou identifique a cobertura parcial. Em atualizações baseadas em arquivo já coletado, indique a data dessa coleta.

## Entrega interativa

- Gere um HTML autônomo em português, com estilos e interações locais. Escape os valores vindos do SPA ao montar o HTML. Use somente os campos necessários ao pedido.
- Para tabelas, inclua busca, ordenação por coluna, contagem de resultados visíveis e filtros pelos campos relevantes, como responsável ou fluxo. Em relatórios descritivos, organize os assuntos em seções expansíveis com busca.
- Para processos, mostre o ID da procedure com link para a ficha no ambiente consultado. Preserve identificadores como texto e ordene datas e quantidades pelos seus valores.
- Em relatórios tabulares, permita exportar a seleção filtrada em CSV. Ofereça uma versão de impressão legível. Indique quando a consulta está vazia e quando os filtros locais ocultam todos os resultados.
- Antes da entrega, abra o arquivo, confira totais e links e teste busca, filtros e ordenação com os dados disponíveis. Ao atualizar, substitua também contagens, critérios e datas apresentados no HTML.
