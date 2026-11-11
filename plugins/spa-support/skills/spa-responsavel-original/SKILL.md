---
name: spa-responsavel-original
description: Use quando o suporte SPA precisar preparar e salvar um script de Responsável Original para uma ou mais procedures.
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


# Responsável Original

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e use o contexto observado na consulta ou na conferência de uma alteração.

Peça obrigatoriamente ao usuário o número da **People** (ID de `Person`) do usuário de destino e o(s) ID(s) interno(s) das **procedures** para preencher o script padrão. Se ambos já estiverem explicitamente informados no pedido, use esses valores; peça qualquer dado ausente ou ambíguo antes de preencher. Não deduza esses IDs pelo nome do usuário nem confunda People com ID de User ou procedure com número judicial/SPA.

Aceite somente inteiros positivos. Para várias procedures, preencha a lista com os IDs separados por vírgulas. Substitua `people` pelo número da People informado e `procedure_id` pelo(s) ID(s) informado(s), mantendo o restante do script:

```ruby
user = Person.find(people).user
procedures = [procedure_id]

procedures.each do |p|
  Procedure.find(p).update!(original_responsible: user)
end
```

Leia e use a skill [spa-support:spa-script](../spa-script/SKILL.md) para preencher o formulário no SPA, com:

- **Script:** o script padrão acima com os números fornecidos.
- **Script de:** `Responsável Original`.
- **Conclusão:** `Salvar`.

Siga a conferência do editor, referência, data, hora e opções disponíveis exigida por `spa-script`. Apresente o script final, People, IDs das procedures e a opção **Salvar** na conferência e aguarde confirmação explícita antes de preencher ou salvar. Se a conferência já confirmada abranger essas etapas e valores, prossiga dentro desse escopo. Acione somente **Salvar**, sem executar o script. Se não houver essa opção ou ela estiver desabilitada, informe o impedimento. Relate a confirmação ou o erro apresentado pelo SPA.
