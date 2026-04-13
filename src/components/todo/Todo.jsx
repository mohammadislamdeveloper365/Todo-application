import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./Todo.module.css";

function Todo(props) {
  const [todo, setTodo] = useState("");
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
      value: todo,
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
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(todo);
    setTodo("");
  }
}

export default Todo;
