import { useEffect } from 'react'
import { useTodos } from './hooks/useTodos'
import TodoList from './components/TodoList'
import TaskForm from './components/TaskForm'
import './App.css'





function App() {

  const {state: tasks, dispatch} = useTodos()


  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    console.log("localStorage: ", localStorage.getItem("tasks"));

  }, [tasks])

  return (
    <main>         
      <TaskForm dispatch={dispatch} />
      <TodoList tasks={tasks} dispatch={dispatch} />
    </main> 
  )
}

export default App
