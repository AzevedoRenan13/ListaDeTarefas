import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Tarefa } from './Todo';
import EditTodoForm from './EditTodoForm';
uuidv4();

const TodoWrapper = () => {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = tarefa => {
    setTarefas([...tarefas, { id: uuidv4(), task: tarefa, completa: false, editada: false }]);
    console.log(tarefas);
  };

  const alteracaoCompleta = id => {
    setTarefas(tarefas.map(tarefa => tarefa.id === id ?
      { ...tarefa, completa: !tarefa.completa } : tarefa))
  }

  const deletarTarefa = id => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };


  const editarTarefas = (id) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, alterado: !tarefa.alterado } : tarefa
      )
    );

  }

  const editarTask = (task, id) => {
    setTarefas(tarefas.map(tarefa => tarefa.id === id ? {
      ...
      tarefa, task, alterado: !tarefa.alterado
    } : tarefa))
  }

  return (
    <div className='TodoWrapper'>
      <h1>Lista de tarefas</h1>
      <TodoForm addTarefa={addTarefa} />
      {tarefas.map((tarefa, index) => (
        tarefa.alterado ? (
          <EditTodoForm editarTarefas={editarTask} task={tarefa} />

        ) :

          <Tarefa
            task={tarefa}
            key={index}
            alteracaoCompleta={alteracaoCompleta}
            deletarTarefa={deletarTarefa}
            editarTarefa={editarTarefas} 
          />
      ))}

    </div>
  );
};

export default TodoWrapper;
