import React, { useEffect } from 'react'
import classes from './todo.module.css'
import {v4 as uuidv4} from 'uuid';

function Form({input,setInput,todos,setTodos,editTodo,setEditTodo}) {

  const handleChange=(e)=>{
    setInput(e.target.value)
  }


  const updateTodo = (title, id) => {                      //line no 25 che key
    const newTodo = todos.map((todo)=> todo.id === id ? { id, title } : todo)
    setTodos(newTodo)           //ui vrti todos map kely mhnun todos mde janar setTodos mdhun 

    setEditTodo("")   ///clear input box after updation 

    }
  // console.log(todos)

  

  const handleSubmit=(e)=>{
    e.preventDefault()
   
    if (editTodo) {
      updateTodo(input,editTodo.id)  //argument(value) of title and id
    } else {
       setTodos([...todos ,{id: uuidv4() ,title:input, complete:false}])
       setInput("")
    }
  }

  

  useEffect(() => {          //ek warning yete tyamule useEffect vaprtat// its 
    if (editTodo) {
        setInput(editTodo.title)
    } else {
        setInput("")
    }
}, [editTodo]);  //editTodo run zalyavr set input vr title dakhva//

return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} placeholder='Enter a Todo...'  className={classes.todoInput} value={input}/>
        <button type='Submit' className={classes.todoSubmit}>{editTodo?"Update":"Add"}</button>
      </form>
    </>
  )
}

export default Form