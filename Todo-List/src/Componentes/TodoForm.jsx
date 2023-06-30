import React, { useState } from 'react';

export const TodoForm = ({ addTarefa }) => {
  const [valor, setValor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTarefa(valor);
    setValor("");
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
     <input
    type='text'
    className='todo-input'
     value={valor}
     placeholder='Qual a tarefa desejada?'
     onChange={e => setValor(e.target.value)}
/>
      <button type='submit' className='todo-btn'>
        Adicionar Tarefas
      </button>
    </form>
  );
};

export default TodoForm;