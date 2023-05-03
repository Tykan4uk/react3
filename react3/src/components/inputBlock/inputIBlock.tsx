import { useContext, useRef } from "react";
import { TodosContext } from "../../providers/todosProvider";

import styles from "./inputItem.module.css";

export const InputBlock = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const onAddClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setTodos([...todos, inputRef.current!.value]);
  }

  return (
    <div className={styles["inputBlock"]}>
      <input
        className={styles["inputField"]}
        type="text"
        placeholder="Input your TODO..."
        ref={inputRef} />
      <button
        className={styles["inputButton"]}
        onClick={onAddClick}>
        Add
      </button>
    </div>
  )
}