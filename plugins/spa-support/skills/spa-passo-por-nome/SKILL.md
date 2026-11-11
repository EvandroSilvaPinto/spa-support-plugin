---
name: spa-passo-por-nome
description: Localizar IDs de passos do SPA pelo nome, inclusive dentro de um fluxo específico.
---

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Nunca peça ao usuário a procuradoria, o órgão ou o ambiente, nem solicite confirmação desses dados; obtenha o contexto diretamente da aba aberta.

Use a interface do SPA na sessão autenticada do navegador, em modo de consulta. Trabalhe apenas com cadastros de configuração. Dispense banco de dados, conteúdo de processos e alterações.

Abra o fluxo indicado e filtre a lista Passos do fluxo pelo nome ou trecho. Leia o nome e o código STP da própria linha: o filtro também pode encontrar o texto em Próximos passos. Percorra as páginas de resultados. Considere somente o link da coluna do próprio passo e reúna as ocorrências pelo ID. Abra a ficha escolhida e confirme o código STP e o campo Nome. Para nomes repetidos, mostre cada ID com seu fluxo. Sem fluxo informado, use uma busca de configuração de passos se disponível ou peça o nome ou ID do fluxo para delimitar a pesquisa.

Responda em uma frase, por exemplo: “O passo **{nome oficial}** tem o ID **{id}** no fluxo **{fluxo}**.” Acrescente o link da ficha verificada. Se a sessão, a permissão ou a abrangência da busca impedir a confirmação, descreva o limite observado. Nunca atribua um ID por semelhança ou a partir de um exemplo anterior.
