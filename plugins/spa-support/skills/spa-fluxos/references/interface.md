# Navegação e edição pela interface

Referência observada em SPA v84.3.3, 08/11/2026. Rótulos podem variar por versão e permissão. Descubra o alvo pelos links atuais; os caminhos abaixo são um mapa, não autorização para construir URLs de ações.

## Catálogo e identificação

Administração → Processos → Fluxos de Trabalho abre `/flows`. O menu também tem Fluxos de Trabalho (novo), Modelos de Documento, Lista de Opções, Gatilhos, Variáveis de Negócio e outras configurações. A existência no menu não comprova acesso de todo suporte.

Pesquise pelo nome e confira o código FLU e o órgão. A busca do catálogo também corresponde a descrições/atores e pode trazer fluxos com nomes diferentes. No detalhe `/flows/[id]`, confira o código do objeto escolhido. Há Nome, Descrição, Publicado, Atores, Atributos do fluxo, Fases e passos para iniciar subprocessos de diferentes tipos.

A lista Passos do Fluxo mostra Código, Nome, Atores, Próximos passos, Fase, Opções e Ações. Pesquisar STP pode retornar tanto o próprio passo quanto outros que o referenciam como destino; não conte resultados da busca como quantidade de passos de mesmo código. O campo “Adicionar passo” é uma ação de criação, não um filtro; não digite nele durante descoberta.

O menu de opções do fluxo oferece “Versão Completa”, “Duplicar Fluxo” e rotinas de atualizar cabeçalho, variáveis, fase e próximos passos de TODOS os processos. As rotinas em massa são alterações operacionais separadas. Não as use como etapa implícita de editar uma configuração.

## Painéis e links

Clicar no nome de um passo abre um painel de configuração sobre a página. Espere o título do objeto substituir “Carregando configuração…”. O código aparece abaixo do título. A troca de aba também pode carregar de forma assíncrona: confirme que o conteúdo corresponde à aba escolhida antes de editar.

Painéis de passo, ator e atributo foram expostos como diálogo; “Fechar configuração” e “Cancelar” permitem sair sem salvar. Fase e sequência podem aparecer em janelas legadas sem papel de diálogo. Nesses casos use o título e os controles da janela; não conclua que falhou só porque não existe `dialog` na árvore.

Links de edição de ator/fase podem exigir o contexto do painel e falhar quando abertos diretamente como página. Prefira clicar no link original. A sequência `/sequences/[id]` funcionou como página após a abertura sobreposta não expor os campos. Use somente URL que tenha sido observada em link de configuração não destrutivo.

Ícones isolados são ambíguos. Confira tooltip/nome acessível e, se necessário, atributos DOM do próprio link. No levantamento, o ícone da coluna Ações apontando a `/steps/[id]` era **Deletar**, com `data-method=delete`, e não “ver detalhes”. Não navegue ou clique baseado apenas no formato do endereço. Leia DOM apenas para elementos/controles; não examine estado interno, credenciais ou código da aplicação.

## Formulário de passo

Abas: **Dados do passo** e **Atributos do formulário**, com contagem de atributos.

Dados do passo:

- Identificação: Nome, Retorno do passo, Retorno da edição do passo, Descrição, Tipo, Passo Ativo. Tipos observados: Inicial, Comum, Armazenar, Finalizar, Único, Cancelar, Esperar. Não atribua significado a códigos numéricos por memória do banco.
- Comportamento e fase: reexecução, editável, em massa, automatizado, sugestionável, funcional, invisível externamente, notificações, confirmação dupla, rascunho, desfazer, manter passo/fluxo, sigilo e outras opções. Fase e momento “Ao executar o passo”/“Ao tramitar o processo”; não atualizar status, remover fase e ações no subprocesso são controles separados.
- Responsáveis, acesso e tramitação: **Quem pode executar este passo**, visualizadores do passo confidencial, invisibilidade por função/ator, Desabilitar tramitar para (Todos atores/Mesmo ator/Outros atores), Instituição, Área e continuar com função/ator.
- Documentos e documentação: documentos gerados e opções de exibição/atualização de modelo.
- Botões e navegação: rótulos de botões, redirecionamento após salvar, seleção/ordenação dos próximos passos, caixa de entrada/principal e passo em caso de falha.
- Próximos passos: linhas com Ordem e destino. Alguns destinos têm regras e não podem ser removidos antes de tratar essas regras. Não remova regras apenas para desbloquear exclusão.
- Gatilhos, Comunicações, Recorrências, Configuração de API: grupos distintos. “Adicionar” pode alterar apenas o formulário ou persistir; confirme o comportamento antes de depender de cancelamento.

O botão final observado é “Atualizar passo”. Cada editor filho pode ter salvamento próprio. Voltar ao pai não prova que os filhos foram persistidos.

## Atributos do formulário

A tabela mostra Nome, Tipo, Posição, Variável, Opções, Agrupador e Código ATR. “Adicionar campo” é criação. Clicar no nome abre o editor do atributo.

Grupos: Identificação e posição; Comportamento e exibição; Valores e integração; Agrupamento; Configurações do tipo; Regras para habilitar o atributo; Orientações e documentação.

Conferir nome, tipo, código global/API, posição/largura, obrigatório, múltiplo, invisível, pesquisável, somente leitura, valor único, variável de negócio, padrão, máscara, lista de tradução, agrupador e subagrupamentos. Campos específicos dependem do tipo. O tipo “Distribuição de Processo” tem destinatários e critérios próprios; ver regras-e-atores.md.

Tipos incluem textos, listas, booleanos, números, datas, documentos, pessoas, tramitação, distribuição, prazos e ações com efeitos. “Excutar código”, “Peticionar”, “Liberação de permissão”, sigilo e encerramentos não são campos de texto comuns. Não insira nem execute código armazenado para descobrir sua função.

## Atores, fases e atributos do fluxo

- Clicar no ator abre Nome, alertas e associações repetíveis de Área, Subárea, Função, Usuário e Atributo do passo. Uma mesma denominação pode corresponder a recursos diferentes.
- Clicar na fase abre Nome, Ordem de Exibição e Visualizadores da fase, incluindo opções de funções e atores. Essas permissões não são as mesmas de executar um passo.
- “Atributos” do cabeçalho do fluxo são projeções/variáveis do fluxo; não equivalem automaticamente a atributos de um formulário de passo.
- Configurações gerais incluem publicação, visibilidade, subprocessos, cabeçalhos e permissões de editar. Não altere globalmente para resolver um pedido local.

## Modelador visual

`/flows/[id]/designer` mostrou “Modelador de Fluxo PROTÓTIPO”. Clique simples abre detalhes com atores, opções e campos; duplo clique abre formulário. Há ferramentas de criar tarefa, conectar, renomear, mover e excluir.

A própria tela informa persistência imediata dessas ações no fluxo real; Ctrl+Z desfaz no banco, exceto exclusão de passo, que é definitiva, e passos com histórico não podem ser excluídos. Use só seleção/leitura na exploração. Uma ação visual não precisa de botão Salvar para ter efeito.

“Exibir passos inativos”/“Versão Completa” permite ampliar o inventário. Diferencie ativo, publicado e visível. Quantidades são evidência datada.

## Controles enriquecidos e verificação

Seletores podem apresentar o select original e um combobox visual ao mesmo tempo. Leia itens selecionados; a lista de opções disponíveis não representa a configuração. Prefira seleção por rótulo e identidade, dentro da seção certa. Para campos sem nome acessível, inspecione o rótulo/tooltip e o DOM do controle antes de agir; não use a posição de um checkbox como significado.

Após cada salvamento, confirme mensagem e reabra. Verifique nome/código do alvo e valores selecionados. Se houver falha de permissão, não procure rota alternativa para burlá-la; descreva o controle ausente e a parte que foi possível realizar.
