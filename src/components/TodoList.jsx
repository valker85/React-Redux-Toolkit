import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

export default function TodoList() {
    const todos = useSelector(state => state.todos.todos)
  
    return (
    <ul>
        {
            todos.map((todo)=>{
                return <TodoItem 
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                ></TodoItem>
            })
        }
    </ul>
  )
}
