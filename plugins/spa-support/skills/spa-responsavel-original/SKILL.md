---
name: spa-responsavel-original
description: Use quando o suporte SPA precisar preparar e salvar um script de Responsável Original para uma ou mais procedures.
---

## Conferência e confirmação antes da execução

Antes de executar qualquer demanda no SPA, inclusive consultas, relatórios, preenchimento de formulários e alterações, prepare uma conferência e aguarde confirmação explícita do usuário. O pedido inicial descreve a demanda; a confirmação deve ocorrer depois da apresentação dessa conferência.

Para preparar a conferência, leia apenas o contexto já aberto e navegue em modo de leitura no mínimo necessário para identificar alvos e valores atuais. Não execute a consulta solicitada, preencha formulários, salve, mova, crie, duplique ou acione scripts antes da confirmação. Obtenha órgão e ambiente da sessão existente, sem exigir que o usuário os forneça.

Apresente: ação e resultado esperado; ambiente observado; nomes, códigos e IDs disponíveis; filtros, lote e quantidade quando aplicáveis; origem e destino; valores atuais → propostos para alterações; campos opcionais e opções de conclusão; efeitos conhecidos e dados ainda não confirmados. Para pessoas, diferencie People (ID da pessoa) de ID do usuário. Em consultas cujo resultado ainda é desconhecido, confira o critério recebido e deixe claro o que será pesquisado, sem inventar resultados.

Peça: “Confirma a execução conforme esta conferência?” e pare antes da execução até receber uma resposta inequívoca. Uma confirmação cobre o escopo apresentado, inclusive as etapas das skills auxiliares descritas nele; não peça novamente por cada clique. Se o escopo, os identificadores, os destinos ou os efeitos mudarem, apresente a conferência revisada e obtenha nova confirmação antes de prosseguir. Para alterações, se a consulta aprovada revelar dados necessários à decisão que não constavam da conferência, apresente-os e confirme a alteração concreta antes de persistir.

Depois da confirmação, execute somente o escopo conferido e verifique o resultado. Em falha ou resultado incerto, consulte o estado antes de repetir para evitar duplicidade. Esta regra prevalece sobre orientações operacionais de execução imediata ou autorização pelo pedido inicial presentes nas referências.


# Responsável Original

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Obtenha procuradoria, órgão e ambiente diretamente da aba aberta e inclua o contexto observado na conferência da demanda.

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
