import React, { useState } from "react";

function TodoForm({ updateList }) {
  const [input, setInput] = useState("");
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (input != "") {
      const add = {
        id: getRandomInt(),
        value: input,
      };

      updateList(add);
      setInput("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <input
          type="text"
          value={input}
          placeholder="add to-do"
          onInput={(e) => setInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function getRandomInt() {
  return Math.floor(Math.random() * 1000);
}

export default TodoForm;
