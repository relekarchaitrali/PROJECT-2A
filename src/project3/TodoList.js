import React from 'react'
import classes from './todo.module.css'
import { FaCheckCircle , FaEdit , FaTrash } from "react-icons/fa";

function TodoList({todos,setTodos,setEditTodo}) {

  const handleEdit =({id})=>{
    const findTodo = todos.find((todo)=> todo.id ===id) //will apply condition and return only one value
    setEditTodo(findTodo)
    console.log(findTodo)
  }

  const handleDelete = ({id})=>{
    const deleteT= todos.filter((todo)=>todo.id!==id) //it will apply condition and return multiple values
    setTodos(deleteT)
  }

  return (
    <>
        {todos.map((todo)=>{
            return <li  className={classes.todoList}>{todo.title}
                <div className={classes.iconWrapper}>
                    <button className={classes.iconComplete}><FaCheckCircle/></button>
                    <button className={classes.iconEdit} onClick={()=>handleEdit(todo)}><FaEdit/></button>
                    <button className={classes.iconDelete} onClick={()=>handleDelete(todo)}><FaTrash/></button>
                </div>
            </li>
           
        })}
    </>
  )
}

export default TodoList