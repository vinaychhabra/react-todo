import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Header from "./Header";

function Todo({ newList }) {
  const [data, setData] = useState([
    { id: "dsffdfd", value: "Homework" },
    { id: "dsffdfd1213", value: "Homework123" },
  ]);

  const updateData = (newList) => {
    setData((prev) => [
      ...prev,
      {
        id: newList.id,
        value: newList.value,
      },
    ]);
  };
  const deleteList = (id) => {
    setData(data.filter((item) => item.id != id));
  };
  return (
    <div className="page-wrapper">
        <Header />
      <div className="todo-container">
        
        <TodoForm updateList={updateData} />
        <TodoList todoList={data} deleteList={deleteList} />
      </div>
    </div>
  );
}

export default Todo;
