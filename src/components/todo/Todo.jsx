import { useState } from "react";
import Button from "../button/Button";
import Input from "../input/Input";
import styles from "./Todo.module.css";

function Todo(props) {
  const [todo, setTodo] = useState("");
  const { handleAddTodo } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Input {...getInputProps()} />
      <Button {...getButtonProps()} />
    </form>
  );

  function getInputProps() {
    return {
      className: styles.input,
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
      text: "Add Todo",
    };
  }

  function handleTodoChange(event) {
    setTodo(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddTodo(todo);
  }
}

export default Todo;
