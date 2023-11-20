import React, { useState } from "react";

function TodoForm({ addList }) {
  const [inputUpdate, setInputUpdate] = useState("");
  const [input, setInput] = useState("");
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (input !== "") {
      const add = {
        id: getRandomInt(),
        value: input,
        status:false
      };

      addList(add);
      setInput("");
    }
  };
  const onSubmitHandleUpdate=(e)=>{
    e.preventDefault();

  }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmitHandle}>
        <input
     
          type="text"
          value={input}
          placeholder="add to-do"
          onInput={(e) => setInput(e.target.value)}
        />
        <button className="btn">Add</button>
      </form>
      <form className="update-form" onSubmit={onSubmitHandleUpdate} style={{display:'none'}}>
        <input
          type="text"
          value={inputUpdate}
          placeholder="add to-do"
          onInput={(e) => setInputUpdate(e.target.value)}
        />
        <button className="btn">Update</button>
      </form>
    </div>
  );
}

function getRandomInt() {
  return Math.floor(Math.random() * 1000);
}

export default TodoForm;
