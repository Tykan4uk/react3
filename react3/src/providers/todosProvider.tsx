import { ReactNode, createContext, useState } from "react"

interface ITodosContext {
  todos: string[],
  setTodos: (todosArray: string[]) => void
}

export const TodosContext = createContext<ITodosContext>({
  todos: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTodos: () => { }
})

interface ITodosProvider {
  children: ReactNode
}

export const TodosProvider = ({ children }: ITodosProvider) => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
}