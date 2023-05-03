import { TodoList } from './components/todoList/todoList'
import { TodosProvider } from './providers/todosProvider'

function App() {
  return (
    <>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </>
  )
}

export default App
