import React, { useState } from 'react';

export const EditTodoForm = ({ editarTarefas, task }) => {
  const [valor, setValor] = useState(task.task);

  const handleSubmit = e => {
    e.preventDefault();

    editarTarefas(valor, task.id);

    setValor("")
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-input' value={valor}
        placeholder='Editar tarefa'
        onChange={e => setValor(e.target.value)}
      />
      <button type='submit' className='todo-btn'>
        Atualizar tarefa
      </button>
    </form>
  );
};

export default EditTodoForm;