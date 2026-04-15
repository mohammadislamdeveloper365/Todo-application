import TodoItem from "../todoitem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList(props) {
  const { todos, handleDeleteItem } = props;
  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteItem={() => handleDeleteItem(todo)}
          ariaLabel="Delete Item"
        />
      ))}
    </ul>
  );
}

export default TodoList;
