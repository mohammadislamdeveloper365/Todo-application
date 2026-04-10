import TodoItem from "../todoitem/TodoItem";

function TodoList(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
