---
name: spa-responsavel-original
description: Use quando o suporte SPA precisar preparar e salvar um script de Responsável Original para uma ou mais procedures.
---

# Responsável Original

Execute os comandos sempre no SPA já aberto no navegador, usando a sessão existente. Nunca peça ao usuário a procuradoria, o órgão ou o ambiente, nem solicite confirmação desses dados; obtenha o contexto diretamente da aba aberta.

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

Siga a conferência do editor, referência, data, hora e opções disponíveis exigida por `spa-script`. Quando o pedido já autorizar salvar, essa é a opção escolhida; não peça a mesma autorização novamente. Se o pedido não autorizar a conclusão, aguarde a escolha conforme `spa-script`. Acione somente **Salvar**, sem executar o script. Se não houver essa opção ou ela estiver desabilitada, informe o impedimento. Relate a confirmação ou o erro apresentado pelo SPA.
