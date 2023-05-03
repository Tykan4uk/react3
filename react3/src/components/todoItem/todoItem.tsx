import styles from "./todoItem.module.css";

interface TodoItemProps {
  text: string,
  onClick: () => void
}

export const TodoItem = ({ text, onClick }: TodoItemProps) => {
  return (
    <div className={styles["todoItem"]}>
      <span className={styles["todoText"]}>{text}</span>
      <button
        className={styles["todoButton"]}
        onClick={onClick}>
        Remove
      </button>
    </div>
  )
}