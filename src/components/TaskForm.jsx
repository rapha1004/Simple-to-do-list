import { useState } from "react"


export default function TaskForm({ dispatch }) {

    const [taskInput, setTaskInput] = useState("")


    const updateForm = (e) => {
        setTaskInput(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: taskInput})
        setTaskInput("")
    }

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input type="text" value={taskInput} placeholder="send 10€ to rapha1004" onChange={updateForm} />
            <button>add task</button>
        </form>
    )
}