import styles from "./TodoItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

function TodoItem(props) {
  const { todo, handleDeleteItem, ariaLabel } = props;

  return (
    <>
      <li className={styles.todoItem}>
        {todo.name}
        <IconButton aria-label={ariaLabel} onClick={handleDeleteItem}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </li>
      <hr />
    </>
  );
}

export default TodoItem;
