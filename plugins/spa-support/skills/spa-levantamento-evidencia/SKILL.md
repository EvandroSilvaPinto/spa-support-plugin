---
name: spa-levantamento-evidencia
description: Levantar evidências de um comportamento indevido do SPA (tela, contagem, ordenação, fluxo) e preencher o documento "Especificação de manutenção" para o dev, conferindo no Errbit quando o caso puder ter erro registrado em log. Usar quando o usuário pedir para abrir demanda, preencher a requisição ou o documento de manutenção para o dev, ou confirmar um defeito na tela.
---

## Identificação da sessão e da mesa

Antes de executar cada consulta ou ação no SPA, confira na interface o usuário conectado e a mesa em uso e informe explicitamente ao usuário: **Usuário conectado: {nome completo}; mesa em uso: {nome da pessoa ou mesa exibida}.** Essa identificação é informativa e não exige confirmação adicional.

Diferencie o perfil conectado da mesa selecionada: consultar a mesa de outra pessoa não significa estar conectado como ela. Se estiver fora da mesa de trabalho e não houver mesa selecionada visível, informe **mesa: não exibida nesta página**. Se não conseguir confirmar o usuário, informe **usuário conectado: não confirmado** e identifique a sessão antes de executar a consulta ou ação solicitada. Não presuma a identidade a partir do nome pesquisado, do destinatário da ação ou de uma sessão anterior.

Ao trocar de usuário ou mesa, informe o contexto de origem antes da troca e confirme explicitamente o novo usuário e a nova mesa após a mudança. Inclua também o contexto confirmado na resposta de resultado ou na conferência da ação.

# SPA — Levantamento de evidência e documento de manutenção

Confirma na tela do SPA o comportamento relatado, reúne evidências e preenche uma cópia do modelo "Especificação de manutenção" com os valores da demanda. Quando o caso puder gerar exceção ou log na aplicação, consulta o Errbit. Trabalhe em português, em modo de leitura no SPA e no Errbit.

Modelo (nunca editar o original): https://docs.google.com/document/d/1Bw3QjyIPRp5XUbr2m89v8DrcO6iEfIZnv9xREAyxTiU

Errbit: https://errbit.coreplan.com.br/

## Escopo

- Serve para **manutenção** (erro, bug ou ação pontual sem implementação). Melhoria ou mudança de comportamento padrão não entra neste documento; se o caso parecer melhoria, avise o usuário antes de montar.
- Só preenche valores da demanda. Não altera a estrutura, as instruções nem os títulos do modelo.
- Não altera processos, fluxos ou cadastros do SPA para reproduzir o problema. Não resolve, ignora nem apaga erros no Errbit.

## Passos

1. **Contexto.** Use a aba do SPA já aberta no Chrome. Informe usuário conectado e mesa (bloco acima). Anote domínio/cliente, fluxo (flow_id/FLU), passo, filtros, agrupamentos, ordenação e a URL da tela.
2. **Reproduzir e medir (leitura).** Confira o comportamento relatado na própria tela, com números e valores reais: contagem de cartões, soma de cabeçalhos, ordem exibida, campos preenchidos. Compare com o que seria o esperado e registre o que não foi possível checar (por exemplo, apenas as primeiras páginas carregadas). Se a lista carrega por rolagem, diga quantos itens foram carregados.
3. **Padrão e causa provável.** Procure o padrão que explica os casos (fronteira de paginação, ordenação como texto, campo vazio...). Descreva a causa como **hipótese**; não afirme sem ler o código. Para cenários de formulário, compare o passo que funciona com o que não funciona.
4. **Errbit.** Siga a seção abaixo sempre que houver chance de log.
5. **Rascunho.** Monte o texto de cada seção (ver [modelo-documento.md](references/modelo-documento.md)) e apresente ao usuário um resumo do que será escrito: título, cenário, resultado esperado/obtido, RF, RN, links e resultado do Errbit. Pergunte: "Confirma a criação do documento conforme este rascunho?" e aguarde o sim antes de copiar o modelo.
6. **Criar o documento.** Faça uma cópia do modelo (Arquivo → Fazer uma cópia), renomeie com um título relacionado ao erro e preencha. Use o Google Docs aberto no Chrome; o texto é desenhado em canvas, então confira por captura de tela, não por `get_page_text`. Veja dicas em [modelo-documento.md](references/modelo-documento.md).
7. **Conferir.** Releia o documento final por capturas: cabeçalho, imagem, todas as seções, links clicáveis e tamanho de fonte. Confirme que o modelo original continua intacto.
8. **Entregar.** Informe o link do documento, o contexto (usuário/mesa), o que foi observado, o que é hipótese e o que não foi verificado, o resultado do Errbit e a classificação bug versus melhoria.

## Conferência no Errbit

**Quando consultar.** Consulte quando o caso puder deixar rastro: erro ou mensagem de falha na tela, tela em branco ou carregamento infinito, ação que não salva ou não grava, botão sem efeito, requisição que falha (HTTP 4xx/5xx no console ou na rede), integração externa, script/automação que não executou, ou dado que "some". Para defeito puramente visual ou de regra (contagem, ordem, texto), consulte apenas se houver erro visível, e registre "Não há" quando nada indicar exceção. Em caso de dúvida, faça a busca rápida abaixo; ela é de leitura.

**Como consultar.**
1. Abra https://errbit.coreplan.com.br/ no Chrome já autenticado do usuário. Se pedir login, peça que o usuário conclua; não leia nem digite credenciais.
2. Escolha o app do cliente/ambiente correto (por exemplo o da procuradoria em questão). Se houver mais de um candidato, pergunte qual.
3. Filtre pelo período da ocorrência (data e hora aproximadas informadas ou observadas, considerando o fuso) e procure por: mensagem de erro exibida, nome da classe/controller, rota ou ID do processo/passo. Mantenha apenas erros do mesmo período e contexto.
4. Abra o erro correspondente e anote: título/classe, mensagem, local (arquivo:linha ou controller#action), quantidade de ocorrências, primeira e última ocorrência, ambiente, e a **URL do erro**. Não copie parâmetros, cookies, sessões nem dados pessoais de processos para o documento.
5. Se a correspondência for incerta, descreva como **possível** e explique por que (horário, rota, mensagem), sem afirmar relação causal.

**No documento.** Em "Link do Errbit", coloque a URL do erro e uma frase com a relação com o problema. Se a busca não achou nada, escreva: "Não há. Não foi encontrado erro correspondente no Errbit (app X, período Y) e não foi observada exceção na tela." Se não houve consulta, escreva: "Não há. Não foi observado erro ou exceção na tela; o defeito é apenas {descrição}." Nunca invente link.

**Limites.** Somente leitura: não marque como resolvido, não ignore, não apague nem comente. Se o acesso estiver bloqueado ou o app não existir, registre "não consultado: {motivo}" no relato ao usuário e na seção do documento.

## Cuidados

- Distinga **observado**, **hipótese** e **não verificado** no texto do documento e na resposta.
- Requisitos funcionais e regras de negócio descrevem o comportamento esperado que o usuário pediu; se foram deduzidos por você, avise o usuário para revisar.
- Imagem: anexe um print que mostre o problema (ou deixe indicado no documento onde o vídeo deve ser anexado no follow-up). Omita dados alheios à demanda.
- Links de telas: cada link precisa descrever a relação direta com o problema. Informe de qual mesa/usuário o link funciona.
- Não envie o documento a ninguém nem altere o compartilhamento sem pedido do usuário.
