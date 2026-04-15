import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./Todo.module.css";

function Todo(props) {
  const [todo, setTodo] = useState({ id: uuidv4(), name: "", done: false });
  const { handleAddTodo } = props;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input {...getInputProps()} />
      <Button {...getButtonProps()} />
    </form>
  );

  function getInputProps() {
    return {
      className: styles.input,
      placeholder: "Enter a todo...",
      type: "text",
      name: "todo",
      value: todo.name,
      handleChange: handleTodoChange,
    };
  }

  function getButtonProps() {
    return {
      className: styles.button,
      type: "submit",
      text: "Add",
    };
  }

  function handleTodoChange(event) {
    setTodo({ ...todo, name: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(todo);
    setTodo({ id: uuidv4(), name: "", done: false });
  }
}

export default Todo;
