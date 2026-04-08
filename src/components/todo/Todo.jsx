import { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState("");
  const 

  function handleTodoChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(todo);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" value={todo} onChange={(e) => handleTodoChange(e)} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default Todo;
