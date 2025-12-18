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
      <center><p>made with ❤️ by <a href='https://rapha1004.me'>rapha1004</a>. <a href="https://github.com/rapha1004/Simple-to-do-list/">source code</a></p></center>
    </main> 
  )
}

export default App
