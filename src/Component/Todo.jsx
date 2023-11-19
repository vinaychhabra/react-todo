import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";

function Todo({ newList }) {
  const [data, setData] = useState([
    { id: "dsffdfd", value: "Homework", status:false },
    { id: "dsffdfd1213", value: "Homework123", status:false },
  ]);

  const addData = (newList) => {
    setData((prev) => [
      ...prev,
      {
        id: newList.id,
        value: newList.value,
        status:newList.status,
      },
    ]);
  };
  const deleteList = (id) => {
    setData(data.filter((item) => item.id != id));
  };
  const updateStatus = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };
  return (
    <div className="page-wrapper">
        <Header  />
      <div className="todo-container">
        <TodoForm addList={addData} />
        <TodoList todoList={data} deleteList={deleteList} updateStatus={updateStatus} />
      </div>
    </div>
  );
}

export default Todo;
