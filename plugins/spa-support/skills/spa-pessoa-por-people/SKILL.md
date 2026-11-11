---
name: spa-pessoa-por-people
description: Localizar uma pessoa no SPA pelo People (ID da pessoa) e retornar nome e ID do usuário vinculado.
---

## Consultas e confirmação de alterações

Execute consultas, buscas, diagnóstico, comparação e relatórios em modo de leitura sem pedir confirmação. Isso inclui preencher filtros de pesquisa, paginar e abrir fichas para conferir os dados. Obtenha órgão e ambiente da sessão existente. Peça esclarecimento somente quando faltar um dado necessário ou houver ambiguidade que afete o resultado.

Para demandas que preencham formulários de alteração, salvem, movam, criem, dupliquem, excluam, ativem ou acionem scripts no SPA, prepare a conferência antes dessas ações. A leitura e as pesquisas necessárias para preparar a conferência podem ser feitas diretamente. Apresente ação e resultado esperado; ambiente observado; nomes, códigos e IDs; lote e quantidade; origem e destino; valores atuais → propostos; campos opcionais e opção de conclusão; efeitos conhecidos e dados não confirmados, conforme aplicável. Para pessoas, diferencie People (ID da pessoa) de ID do usuário.

Peça: “Confirma a execução conforme esta conferência?” e aguarde confirmação explícita antes de preencher formulários de alteração ou executar a ação. O pedido inicial não substitui a confirmação da conferência concreta. Uma confirmação cobre o escopo apresentado, incluindo as etapas das skills auxiliares descritas; não a repita por clique. Se identificadores, destinos, escopo ou efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir.

Após a confirmação, execute somente o escopo conferido e verifique o resultado. Em resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata nas referências. Uma consulta não autoriza alterar cadastros nem executar scripts, mesmo quando o script se destina a obter informações.


Execute a consulta no SPA já aberto no navegador, usando a sessão autenticada existente. Obtenha o contexto diretamente da aba aberta; não peça procuradoria, órgão ou ambiente ao usuário.

Use a interface em modo de consulta, sem banco de dados, conteúdo de processos ou alterações nos cadastros. Se o identificador não foi informado, peça o People (ID da pessoa). Aceite somente um inteiro positivo como identificador.

Localize o cadastro de Pessoas e procure o People informado usando os filtros disponíveis. Confirme que o ID do cadastro corresponde exatamente ao número fornecido. Se não houver filtro por ID, use links ou mecanismos de navegação observados na interface; não invente rotas. Observe filtros ativos e percorra as páginas necessárias para localizar o cadastro.

Abra a ficha do candidato e confirme o nome completo e o People, que é o ID do cadastro da pessoa, exibido na interface ou no destino do link da própria ficha. Localize também o usuário vinculado e confirme o ID do usuário na interface ou no link da ficha desse usuário. People e ID da pessoa são o mesmo identificador; ID do usuário pertence ao cadastro de usuário e deve ser confirmado separadamente. Não confunda esses valores com matrícula, documento ou outros códigos. Não presuma que os IDs sejam iguais nem derive um do outro. Não presuma rotas ou prefixos de código.

Se houver resultados com nomes iguais, use a correspondência exata do identificador informado e o vínculo entre os cadastros para distinguir a pessoa. Se o vínculo não puder ser confirmado, informe essa limitação sem escolher por semelhança do nome.

Inclua sempre os campos People (ID da pessoa) e ID do usuário na resposta, inclusive para cada candidato em caso de homônimos. Responda de forma breve: “**{nome completo}** — People (ID da pessoa): **{people}**; ID do usuário: **{user_id}**.” Se um dos valores não puder ser confirmado, mantenha o respectivo campo como **não confirmado** e explique o limite observado. Se a interface mostrar que não há usuário vinculado, indique **sem usuário vinculado**. Acrescente o link da ficha verificada. Se não encontrar ou se sessão, permissão, paginação ou filtros impedirem a confirmação, informe o limite observado e o alcance da busca. Nunca invente identificadores nem reutilize valores de exemplo.
