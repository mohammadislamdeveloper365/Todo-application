import { useState } from "react";
import Header from "../../components/header/Header";
import Todo from "../../components/todo/Todo";
import TodoList from "../../components/todolist/TodoList";
import styles from "./TodoPage.module.css";

function TodoPage() {
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.todoPage}>
      <Header title="Todo Application" className={styles.header} />
      <div className={styles.todoContainer}>
        <Todo handleAddTodo={handleAddTodo} />
        <TodoList todos={todos} />
      </div>
    </div>
  );

  function handleAddTodo(todo) {
    setTodos([...todos, todo]);
  }
}

export default TodoPage;
