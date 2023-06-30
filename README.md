# Lista de Tarefas
Este é um projeto simples de uma lista de tarefas desenvolvido em React. Permite adicionar, editar, marcar como completa e excluir tarefas.

# Componentes:
## App.js
O arquivo App.js é o componente principal do aplicativo. Ele importa e renderiza o componente TodoWrapper e aplica o estilo definido no arquivo app.css.

## TodoWrapper.js
O arquivo TodoWrapper.js contém o componente TodoWrapper, que é responsável por gerenciar a lista de tarefas. Ele possui o estado tarefas, que armazena as tarefas adicionadas pelo usuário. O componente também possui métodos para adicionar, marcar como completa, excluir e editar tarefas.

# TodoForm.js
O arquivo TodoForm.js contém o componente TodoForm, que é responsável por exibir o formulário para adicionar novas tarefas. Ele possui um campo de texto controlado que atualiza o estado valor ao digitar. Quando o formulário é enviado, o método handleSubmit é chamado para adicionar a tarefa à lista de tarefas e limpar o campo de texto.

# Tarefa.js
O arquivo Tarefa.js contém o componente Tarefa, que representa uma única tarefa na lista. Ele exibe o texto da tarefa e fornece opções para marcar como completa, excluir e editar a tarefa. O método alteracaoCompleta é chamado ao clicar no texto da tarefa para alternar o estado de completação. O método deletarTarefa é chamado ao clicar no ícone de lixeira para excluir a tarefa. O método editarTarefa é chamado ao clicar no ícone de edição para alternar o modo de edição da tarefa.

# EditTodoForm.js
O arquivo EditTodoForm.js contém o componente EditTodoForm, que é exibido quando uma tarefa está no modo de edição. Ele exibe um campo de texto controlado com o valor da tarefa e permite ao usuário atualizar o texto da tarefa. Quando o formulário é enviado, o método handleSubmit é chamado para atualizar a tarefa na lista de tarefas e limpar o campo de texto.

# Estilos
O arquivo app.css contém os estilos CSS utilizados no aplicativo. Define a cor de fundo, o alinhamento e a estilização dos elementos da lista de tarefas.

Esse é um exemplo básico de uma lista de tarefas implementada em React. Os componentes podem ser personalizados e expandidos para atender às necessidades do projeto.
