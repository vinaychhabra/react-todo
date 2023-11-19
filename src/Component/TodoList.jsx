import React from 'react';

function TodoList({ todoList,deleteList,updateStatus }) {
// const [status,setStatus] = useState(0);
const handleDelete = (ids) => {
    deleteList(ids);
}
const handleStatus = (ids) => {
    updateStatus(ids);
}
  return (
    <div className='todo-list'>
      {todoList.map((list) => (
        <div className="list-item" style={{textDecoration: list.status ? 'line-through' : 'none'}} onClick={() => handleStatus(list.id)} key={list.id} >{list.value}<div>
        {/* <button className='btn edit-button'>Edit</button> */}
        <button className="btn delete-button" onClick={() => handleDelete(list.id)}>x</button></div></div>
      ))}
    </div>
  );
}

export default TodoList;
