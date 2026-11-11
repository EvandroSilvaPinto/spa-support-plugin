---
name: spa-fluxo-por-nome
description: Identificar o ID de um fluxo do SPA pelo nome completo ou parcial.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e inclua o contexto observado na conferência da demanda.

Use a interface do SPA na sessão autenticada do navegador, em modo de consulta. Trabalhe apenas com cadastros de configuração. Dispense banco de dados, conteúdo de processos e alterações.

No catálogo Fluxos de Trabalho, pesquise o nome. Aceite diferenças de caixa, acentos e palavras omitidas ao localizar candidatos. Percorra todas as páginas dos resultados filtrados, se houver paginação. Confira o nome no link e extraia o ID do destino /flows/{id}. Se houver mais de um resultado plausível, apresente nomes e IDs para escolha. Para concluir, abra a ficha do candidato e confirme o nome e o código FLU em Dados do fluxo. Se a cobertura for parcial, informe quais resultados conferiu.

Responda em uma frase, por exemplo: “O fluxo **{nome oficial}** tem o ID **{id}**.” Acrescente o link da ficha verificada. Se a sessão, a permissão ou a abrangência da busca impedir a confirmação, descreva o limite observado. Nunca atribua um ID por semelhança ou a partir de um exemplo anterior.
