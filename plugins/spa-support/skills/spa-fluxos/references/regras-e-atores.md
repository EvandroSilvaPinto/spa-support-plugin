# Regras, atores e roteamento

## As camadas que devem ser conferidas

| Camada | Onde conferir | Pergunta |
|---|---|---|
| Executores | Dados do passo → Quem pode executar | Quem pode acionar esta ação? |
| Destinatários | Atributo Tramitar/Distribuição → Atores | Para quem o processo será encaminhado? |
| Recursos do ator | Editor de ator → associações | A qual área, subárea, função, usuário ou atributo esse ator corresponde? |
| Disponibilidade do destino | Lista de próximos passos → Sequência/regras | Quando esse destino é oferecido? |
| Acesso/visualização | Passo confidencial, invisibilidade e visualizadores da fase | O destinatário pode ver o estado em que o processo ficará? |
| Continuidade | Continuar com função/ator, bloqueio de tramitação, fase e destino | A configuração preserva ou troca a responsabilidade pretendida? |

Não deduza uma camada da outra. Executor, destinatário, função e usuário são entidades diferentes. Um passo de distribuir a um procurador pode ser executado por cadastro/chefia. Um ator existir no fluxo não garante membros elegíveis nem acesso ao próximo passo.

Antes de reutilizar um ator, leia a associação completa, inclusive várias linhas. Nomes parecidos não bastam. Não troque vínculos globais de um ator compartilhado quando o pedido é duplicar um passo; prefira usar o ator correto já existente. Se for necessário criar ou ampliar acesso sensível, prepare a associação proposta e siga a confirmação aplicável antes de salvar.

## Distribuição de Processo

O atributo de distribuição tem configuração própria: Atores, Não incluir os usuários, Complexidade, datas de disparidade definitiva/provisória, Disparidade zero, Fixar definitivo/provisório, distribuição por peso, percentual de disparidade, distribuição provisória/automática, não exibir último usuário distribuído, zerar disparidade por periodicidade, somente para funções e passos executados. Também pode gravar uma variável, por exemplo `responsavel-da-tarefa`.

Ao adaptar Núcleo Origem → Núcleo Destino, confira os destinatários desse atributo e os recursos dos atores, não só a lista de executores. Revise exclusões, função, subárea, peso e distribuição automática para evitar herdar uma política de carga de outro núcleo. Preserve critérios comprovadamente comuns; não zere exclusões/disparidade por conveniência.

## Três objetos distintos de regra

1. **Regra de transição:** sequência liga passo de origem ao próximo e contém uma condição configurada de disponibilidade, sujeita às demais restrições da aplicação. No detalhe do fluxo, o link na coluna Próximos passos abre `/sequences/...`, e não o editor do passo de destino.
2. **Regra para habilitar atributo:** fica no editor do próprio ATR, com Expressão e “Adicionar Expressão”. Decide habilitação de campo; não crie aí uma condição de encaminhamento esperando efeito na transição.
3. **Variável/valor padrão/configuração específica:** pode alimentar valores e ações, mas não substitui os dois objetos anteriores.

## Editor de sequência observado

Mostra origem > destino, Expressão e tabela de regras. Campos para uma regra: Regra/código, Valor origem, Operador, Valor origem esperado e Valor esperado. O botão “Criar Regra” é um salvamento, não simulação. Editar a sequência mostra Expressão, Abrir Subprocesso e Importar CSV; importação não faz parte de uma edição comum.

Operadores disponíveis observados: Igual, Diferente, Maior, Maior ou igual, Menor, Menor ou igual, Não existir, Existir, Contém, Não contém, Começa com, Termina com. Use o operador nomeado na tela. Origem esperada e valor literal esperado são controles distintos. Não preencha ambos sem entender a regra de precedência da aplicação.

Exemplo didático fictício: a sequência liga um passo de triagem ao passo de distribuição; expressão `A`; regra A usa origem **Núcleo**, operador **Igual**, valor literal **Núcleo Destino**. Isso ilustra a configuração, não comprova a gramática completa de expressões ou sua execução num processo. Leia [exemplo-ficticio.md](exemplo-ficticio.md).

Antes de combinar condições, inspecione exemplo existente e ajuda da versão atual. Não invente se AND/OR são escritos como palavras, símbolos ou letras. Preserve parênteses e códigos das regras. Explique a lógica em português independentemente da sintaxe. Se a sintaxe não estiver comprovada, deixe a alteração dependente pendente e peça apenas a definição faltante.

## Projetar regras que façam sentido

Parta do resultado operacional informado, não de uma regra jurídica presumida. Especifique cada condição com origem disponível, tipo, operador, valor/variável, efeito e caminho alternativo. Verifique se o valor é produzido antes da decisão, se lista usa rótulo/código, se vazio difere de falso e como datas/valores limite são interpretados.

Monte casos concretos, com dados fictícios:

| Caso | Entrada | Saída esperada |
|---|---|---|
| Positivo | Núcleo = Núcleo Destino | Oferecer destino Núcleo Destino |
| Negativo | Núcleo = Núcleo Origem | Não oferecer por esta regra |
| Ausente | Núcleo não preenchido | Comportamento a confirmar; não equiparar a Núcleo Origem |
| Ambíguo | Duas regras verdadeiras | Verificar se múltiplos destinos são intencionais |

Para limites numéricos/data, acrescente valor imediatamente abaixo, igual e acima. Para campos obrigatórios condicionais, confirme que nenhum caso exige um campo invisível/inacessível. Verifique autorreferência, ciclos automáticos sem saída, destinos inativos, perda de responsável e caminhos de falha. Um ciclo de devolução pode ser legítimo; explique a condição de saída antes de classificá-lo como defeito.

A revisão dos casos é análise lógica. Executar um passo de verdade, abrir subprocesso ou acionar automação exige tarefa própria; não use processo de produção como caso fictício. Se não puder confirmar pelo acesso disponível, informe o limite em vez de “validado”.
