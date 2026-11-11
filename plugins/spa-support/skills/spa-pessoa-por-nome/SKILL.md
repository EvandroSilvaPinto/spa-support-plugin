---
name: spa-pessoa-por-nome
description: Localizar uma pessoa no SPA pelo nome completo ou parcial e retornar seu People (ID da pessoa) e o ID do usuário vinculado.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


Execute a consulta no SPA já aberto no navegador, usando a sessão autenticada existente. Obtenha o contexto diretamente da aba aberta; não peça procuradoria, órgão ou ambiente ao usuário.

Use a interface em modo de consulta, sem banco de dados, conteúdo de processos ou alterações nos cadastros. Se o nome não foi informado, peça o nome completo ou um trecho para pesquisar.

Localize o cadastro de Pessoas pelo menu disponível e pesquise o nome. Considere diferenças de caixa, acentos e nomes parciais ao identificar candidatos. Se necessário, tente trechos mais distintivos. Percorra todas as páginas dos resultados filtrados e observe filtros ativos, inclusive de situação, que possam limitar a busca.

Abra a ficha do candidato e confirme o nome completo e o People, que é o ID do cadastro da pessoa, exibido na interface ou no destino do link da própria ficha. Localize também o usuário vinculado e confirme o ID do usuário na interface ou no link da ficha desse usuário. People e ID da pessoa são o mesmo identificador; ID do usuário pertence ao cadastro de usuário e deve ser confirmado separadamente. Não confunda esses valores com matrícula, documento ou outros códigos. Não presuma que os IDs sejam iguais nem derive um do outro. Não presuma rotas ou prefixos de código.

Se houver homônimos ou mais de um candidato plausível, apresente os nomes, People e IDs dos usuários confirmados e apenas os dados de contexto necessários à escolha, como unidade ou situação quando disponíveis. Não selecione uma pessoa só pela semelhança do nome. Peça um dado de distinção se ainda necessário.

Inclua sempre os campos People (ID da pessoa) e ID do usuário na resposta, inclusive para cada candidato em caso de homônimos. Responda de forma breve: “**{nome completo}** — People (ID da pessoa): **{people}**; ID do usuário: **{user_id}**.” Se um dos valores não puder ser confirmado, mantenha o respectivo campo como **não confirmado** e explique o limite observado. Se a interface mostrar que não há usuário vinculado, indique **sem usuário vinculado**. Acrescente o link da ficha verificada. Se não encontrar ou se sessão, permissão, paginação ou filtros impedirem a confirmação, informe o limite observado e o alcance da busca. Nunca invente identificadores nem reutilize valores de exemplo.
