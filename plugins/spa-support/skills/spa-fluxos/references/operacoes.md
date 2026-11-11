# Operações pela aplicação

## Diagnóstico, explicação e comparação

Identifique FLU/STP/ATR/ACT na interface, ambiente, data e estado ativo/publicado. Leia passo e referências de entrada/saída, atributos, atores e fases relevantes. Consulte versão completa quando inativos importarem. Restrinja o levantamento ao pedido; não abra processos para deduzir regras de configuração.

Explique: evento inicial → executores → formulário → destinatários → fase → próximos passos/condições → efeitos adicionais → término/falha. Diferencie o que a configuração mostra do que foi comprovado por execução. Compare fonte e destino por função operacional, não só por nomes ou IDs.

Um problema de “passo não aparece” pode estar em condições de transição, inatividade, executor, recurso do ator, invisibilidade, sigilo ou fase. Cheque essas camadas antes de propor ampliar permissões. Se a interface não expuser uma dependência, registre essa lacuna; não torne o banco obrigatório.

## Criar/editar

Prepare a configuração a partir de um passo semelhante existente, quando adequado. Descreva em formato antes → depois os itens afetados e resolva apenas lacunas que mudariam o resultado. Um pedido genérico “crie um passo que faça sentido” requer objetivo e ponto de entrada, não autorização para escolher uma regra de negócio arbitrária.

Ordem preferida, adaptável ao comportamento real da versão:

1. Registrar configuração atual e referências relevantes; identificar responsáveis e fonte das regras.
2. Definir nome/retorno/tipo e criação no fluxo correto. Antes de acionar “Adicionar passo”, descubra se o ato cria imediatamente. Não trate Enter como busca. Anote o novo STP antes de continuar.
3. Configurar dados básicos, executores, fase/momento e opções pertinentes. Se a interface permitir criar inativo, use isso para evitar expor uma configuração incompleta; não presuma que há modo de rascunho. Se a criação publicar imediatamente e os efeitos não estiverem determinados, esclareça esse ponto antes da criação.
4. Criar/adaptar atributos e dependências, cada um com tipo, posição, variável, valor padrão, obrigatoriedade e condições corretas. Confira o salvamento de cada filho.
5. Configurar destinatários, transições e regras, além de falha e retorno. Conectar entrada torna o passo alcançável; altere passos anteriores somente se isso estiver no pedido.
6. Conferir casos positivos/negativos/vazios e persistência. Ativar/publicar somente conforme o resultado autorizado; não faça teste funcional em processo por conta própria.

Apresente a conferência da criação/edição concreta e aguarde confirmação explícita conforme SKILL.md. Após a confirmação, conclua somente o escopo conferido. Se faltam dados ou permissões, entregue a parte pronta e a decisão exata que falta.

## Duplicar passo

Duplicar significa produzir um novo passo adequado ao destino e preservar a origem. Não equivale a trocar só o nome. Primeiro procure se o destino já possui um passo equivalente e confira seu código e função; existência de algo parecido não autoriza editá-lo nem criar outra cópia sem resolver qual resultado o usuário quer. Registre origem/destino e a política de copiar ou adaptar:

| Componente | Revisão necessária |
|---|---|
| Identificação | Novo STP, nome, retorno, ativo, tipo |
| Atores | Executores, destinatários dos atributos, recursos, visualizadores e invisibilidade |
| Atributos | Novos ATR quando copiados, variáveis compartilhadas ou locais, padrões, listas, agrupadores e modelos |
| Condições | Novas regras ligadas ao objeto correto; remapear origens locais e códigos de expressão |
| Transições | Destinos, regras, ordem, entrada, falha e referências para outros fluxos |
| Efeitos | Gatilhos, sequência/evento, parâmetros, comunicações, recorrência e subprocessos |
| Fase | Fase do destino, momento da atualização e visualizadores |

**A cópia nativa de passo não foi comprovada no levantamento inicial.** Procure a ação na versão atual sem adivinhar rota `/duplicate`. Antes de acioná-la, confirme se abre formulário ou persiste imediatamente. Não assuma que duplica atributos/regras/atores e não assuma que os remapeia.

Se existir cópia nativa adequada, use-a no escopo autorizado e inventarie o resultado. Se ela não existir, reconstrua o passo pela criação normal e pelos editores de filhos, usando a matriz acima. Não use duplicação de fluxo inteiro como substituto silencioso para duplicar um passo. Para esclarecer o comportamento de criação, leia rótulos, ajuda e documentação disponível, sem acionar a criação como experiência. Se essas evidências não esclarecerem a persistência e os efeitos relevantes, exponha a limitação antes de criar e prepare o trabalho revisável.

Depois, compare a cópia com a matriz desejada e confira que a origem não foi alterada. Uma cópia criada parcialmente é resultado parcial: registre STP e filhos existentes para retomada sem duplicar novamente.

## Clonar fluxo

O menu do fluxo observado contém “Duplicar Fluxo”, mas a ação e a profundidade da cópia não foram executadas/verificadas. Trate o clique como potencial criação imediata. Não o use durante investigação.

Para um pedido autorizado de clonagem, identifique nome/destino, necessidade de publicação, atores/recursos e dependências compartilhadas. Após clonar, inventarie novos códigos pela tela e mapeie origem → cópia para passos, atores, fases, atributos e condições. Diferencie referências internas remapeadas, compartilhadas preservadas e externas intencionais. Não invente mapa antes de observar o resultado.

Revise subprocessos, fluxos associados, modelos, listas, variáveis, falhas e automações que ainda apontem à origem. Não habilite integrações ou comunicações herdadas automaticamente se o pedido é somente preparar uma cópia. Também não desative componentes da origem. Se a interface não permitir uma cópia isolada/adequada, prepare o plano e informe a restrição.

## Dependências e alterações adicionais

- **Fases:** conferir nome, ordem, momento da mudança e visualizadores; alterar o passo não equivale a reclassificar processos existentes.
- **Variáveis/listas/modelos:** verificar se pertencem a vários passos/fluxos; modificar compartilhado pode afetar todos. Prefira nova configuração local quando a mudança é exclusiva e a interface suportar, conforme escopo do pedido.
- **Gatilhos:** mapear evento/momento, ordem, método apresentado e parâmetros necessários sem consultar segredos. Configurar vínculo não autoriza acionar o método. Não execute scripts ou variáveis com código para validar.
- **Comunicações/recorrências:** confirmar destinatário, condição, horário, periodicidade e prevenção de duplicação antes de configurar; salvar uma recorrência pode agendar atividade real. Não faça envio para provar que o formulário funciona.
- **Permissões/sigilo:** verificar impacto e escopo; conservar os limites autorizados. A skill não concede acesso ao suporte e não contorna controles ausentes.
- **Exclusão/desativação:** diferenciar as duas ações. Exclusão de passo no modelador é definitiva e exige confirmação conforme o host. Não substituir por outra operação sem explicar a mudança de resultado.

## Registro e retomada

Para alterações, mantenha registro compacto no local de trabalho: data/ambiente, pedido, FLU/STP/ATR/ACT, antes/depois dos campos afetados, dependências, ações salvas, comprovação de releitura e pendências. Capture somente configuração relevante, sem senhas, cookies ou conteúdos de processos. Não embuta registros de clientes na skill compartilhável.

Em erro/timeout, leia a lista e procure novo código antes de repetir. Não apague automaticamente objetos parcialmente criados nem use Ctrl+Z para tentar resolver. Descreva o estado observado e a correção necessária. Restaurar campos de configuração não garante reverter os efeitos que uma automação já produziu.
