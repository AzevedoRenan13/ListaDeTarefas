import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'



export const Tarefa = ({task, alteracaoCompleta, deletarTarefa, editarTarefa}) => {

  return (
    <div className="Tarefa">
        <p className={`${task.completa ? 'completa' : ""}`} onClick={() => alteracaoCompleta(task.id)}>{task.task}</p>
        <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editarTarefa(task.id)}  />
        <FontAwesomeIcon icon={faTrash} onClick={() => deletarTarefa(task.id)}  />
        </div>
    </div>
  )
}