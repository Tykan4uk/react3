import { useContext } from "react";
import { TodosContext } from "../../providers/todosProvider";
import { InputBlock } from "../inputBlock/inputIBlock";
import { TodoItem } from "../todoItem/todoItem";

import styles from "./todoList.module.css";

export const TodoList = () => {
  const { todos, setTodos } = useContext(TodosContext);

  const onRemoveClick = (todo: string) => {
    const array = [...todos];
    const index = array.indexOf(todo);
    array.splice(index, 1);
    setTodos(array);
  }

  return (
    <div className={styles["todoList"]}>
      <InputBlock />
      <div className={styles["todos"]}>
        {
          todos.length
            ? todos?.map(todo => (<TodoItem
              text={todo}
              onClick={() => onRemoveClick(todo)}
              key={Math.random() + todo} />))
            : <span className={styles["moqText"]}>List empty</span>
        }
      </div>
    </div>
  );
}