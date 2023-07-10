import React, { useState } from 'react'
import Header from './Header'
import classes from './todo.module.css'
import Form from './form'
import TodoList from './TodoList'

function Todo() {

  const [input,setInput]=useState("")
  const [todos,setTodos]=useState([])
  const [editTodo,setEditTodo]=useState(null)
  

  return (
    <div className={classes.todoContainer}>
        <div className={classes.todoWrapper}>
            <Header/>
            <Form
               input={input}
               setInput={setInput}
               todos={todos}
               setTodos={setTodos}
               editTodo={editTodo}
               setEditTodo={setEditTodo}
            />
            <TodoList 
              todos={todos}
              setTodos={setTodos}
              editTodo={editTodo}
              setEditTodo={setEditTodo}

            />

            
        </div>
    </div>
  )
}

export default Todo