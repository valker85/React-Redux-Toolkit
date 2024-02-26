import React from 'react'
import { removeTodo, toggleTodoComplete } from '../store/todoSlice'
import { useDispatch } from 'react-redux'

export default function TodoItem({ id, text, completed }) {
    const dispatch = useDispatch() 

    return (
    <li>
        <input 
            type='checkbox' 
            checked={completed} 
            onChange={() => dispatch( toggleTodoComplete({id}) )} 
        />
        <span>{text}</span>
        <span onClick={() => dispatch( removeTodo({id}) )} className='delete'>&times;</span>
    </li>
  )
}
