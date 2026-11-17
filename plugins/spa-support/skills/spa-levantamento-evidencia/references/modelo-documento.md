# Modelo "Especificação de manutenção": o que preencher

Estrutura da cópia, na ordem do modelo. Preencha somente os valores; mantenha títulos e instruções.

## Identificação do projeto

- **Cliente:** nome do cliente (por exemplo, PGE-MT).
- **Imagem:** print da tela com o problema, inserido no campo (ou aviso de que imagem/vídeo vai no follow-up).
- **Solicitante (interno):** quem abriu a demanda e a área (por exemplo, Implantação).

## Problemática da solicitação

Parágrafos curtos, nesta ordem (tamanho de fonte 12 no corpo da problemática, 11 no restante, como nas demandas anteriores):

1. **Sintoma** em uma ou duas frases.
2. **Cenário observado:** mesa/usuário, fluxo (nome e flow_id), passo, filtros, agrupamento, ordenação, quantidade de resultados.
3. **Resultado esperado.**
4. **Resultado obtido:** lista com números e valores reais; tabela quando houver comparação.
5. **Padrão observado:** o que explica os casos.
6. **Causa provável:** marcada como hipótese, com a observação de que o código não foi analisado.

## Requisitos funcionais (RF001, RF002...)

Frases no imperativo/"deve", testáveis, uma por requisito: o comportamento correto, as exceções (formatos, vazios) e a persistência após recarregar ou paginar.

## Regras de negócio (RN001, RN002...)

Contexto de uso: por que o usuário depende do comportamento correto e o que **não** deve mudar (por exemplo, exibição ou paginação).

## Links das telas

Um item por link, com a descrição da relação direta com o problema e a indicação de qual mesa/usuário abre a tela.

## Link do Errbit

URL do erro com a relação com o problema, ou "Não há...", conforme a seção de Errbit da skill.

## Dicas para preencher no Google Docs

- Copie o modelo e renomeie para algo relacionado ao erro (por exemplo, "Manutenção SPA - {resumo do defeito}"). Não edite o modelo.
- O texto do Docs é desenhado em canvas: confira por capturas de tela. Para substituir um parágrafo, selecione com triplo clique, ou com Ctrl+Shift+Seta para cima em vários, e digite por cima.
- Ao digitar sobre um parágrafo, o tamanho e o negrito podem herdar do trecho anterior: confira e ajuste (links e marcadores costumam sair maiores; corrija para 11).
- Evite Ctrl+A: apagou a cópia inteira em uma tentativa anterior (foi desfeito com Ctrl+Z).
- Imagem: arraste o arquivo para o campo Imagem ou use Inserir → Imagem; confira que ficou no campo certo e sem cobrir texto.
- Ao colar um link, confira se ficou clicável e na fonte do restante.
- Se a aba do Chrome do grupo de ferramentas desaparecer, recrie o grupo e navegue de novo para o documento.
- Ao final, confira se aparece o aviso "Leave site?" ao sair do documento e descarte alterações apenas se tiver certeza de que tudo foi salvo.
