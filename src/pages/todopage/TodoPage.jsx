import { useState } from "react";
import Todo from "../../components/todo/Todo";
import TodoList from "../../components/todolist/TodoList";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Todo handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }
}

export default TodoPage;
