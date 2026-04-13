import TodoItem from "../todoitem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul className={styles.todoList}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
