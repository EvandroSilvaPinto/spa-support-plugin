---
name: spa-pessoa-por-people
description: Localizar uma pessoa no SPA pelo People (ID da pessoa) e retornar nome e ID do usuário vinculado.
---

Execute a consulta no SPA já aberto no navegador, usando a sessão autenticada existente. Obtenha o contexto diretamente da aba aberta; não peça procuradoria, órgão ou ambiente ao usuário.

Use a interface em modo de consulta, sem banco de dados, conteúdo de processos ou alterações nos cadastros. Se o identificador não foi informado, peça o People (ID da pessoa). Aceite somente um inteiro positivo como identificador.

Localize o cadastro de Pessoas e procure o People informado usando os filtros disponíveis. Confirme que o ID do cadastro corresponde exatamente ao número fornecido. Se não houver filtro por ID, use links ou mecanismos de navegação observados na interface; não invente rotas. Observe filtros ativos e percorra as páginas necessárias para localizar o cadastro.

Abra a ficha do candidato e confirme o nome completo e o People, que é o ID do cadastro da pessoa, exibido na interface ou no destino do link da própria ficha. Localize também o usuário vinculado e confirme o ID do usuário na interface ou no link da ficha desse usuário. People e ID da pessoa são o mesmo identificador; ID do usuário pertence ao cadastro de usuário e deve ser confirmado separadamente. Não confunda esses valores com matrícula, documento ou outros códigos. Não presuma que os IDs sejam iguais nem derive um do outro. Não presuma rotas ou prefixos de código.

Se houver resultados com nomes iguais, use a correspondência exata do identificador informado e o vínculo entre os cadastros para distinguir a pessoa. Se o vínculo não puder ser confirmado, informe essa limitação sem escolher por semelhança do nome.

Inclua sempre os campos People (ID da pessoa) e ID do usuário na resposta, inclusive para cada candidato em caso de homônimos. Responda de forma breve: “**{nome completo}** — People (ID da pessoa): **{people}**; ID do usuário: **{user_id}**.” Se um dos valores não puder ser confirmado, mantenha o respectivo campo como **não confirmado** e explique o limite observado. Se a interface mostrar que não há usuário vinculado, indique **sem usuário vinculado**. Acrescente o link da ficha verificada. Se não encontrar ou se sessão, permissão, paginação ou filtros impedirem a confirmação, informe o limite observado e o alcance da busca. Nunca invente identificadores nem reutilize valores de exemplo.
