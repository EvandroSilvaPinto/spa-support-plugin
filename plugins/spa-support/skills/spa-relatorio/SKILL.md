---
name: spa-relatorio
description: Gerar ou atualizar qualquer relatório solicitado ao SPA Support. O formato padrão é um arquivo HTML interativo, inclusive quando outra skill do plugin fornece os dados. Respeitar pedidos explícitos de outro formato.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e inclua o contexto observado na conferência da demanda.

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
