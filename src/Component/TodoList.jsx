import React, { useState } from 'react';

function TodoList({ todoList,deleteList }) {
const [strike,setStrike] = useState(0);
const handleDelete = (ids) => {
    deleteList(ids);
}
const handleStatus = (ids) => {
    deleteList(ids);
}
  return (
    <div className='todo-list'>
      {todoList.map((list) => (
        <div style={{textDecoration: strike ? 'line-through' : 'none'}} key={list.id} >{list.value}<button onClick={() => handleDelete(list.id)}>x</button></div>
      ))}
    </div>
  );
}

export default TodoList;
