import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'


function Todo({newList}) {
    const [data,setData] = useState([{'id':'dsffdfd','value':"Homework"},{'id':'dsffdfd1213','value':"Homework123"}]);

    const updateData = (newList) => {
        setData((prev)=>[...prev,{
            id:newList.id,
            value:newList.value
        }])
    }
    const deleteList = (id) => {
        setData(data.filter((item)=> item.id != id))
    } 
  return (
    <div className="todo-container">
        <h2>Todo List</h2>
        <TodoForm updateList = {updateData} />
        <TodoList todoList={data} deleteList={deleteList}  />
    </div> 
  )
}

export default Todo