import { useState } from "react";


export default function TodoList({ tasks, dispatch }) {



    const [showComplete, setShowComplete] = useState(true)


    const filteredTasks = tasks.filter(task => showComplete ? task : !task.checked);
    const hasChecked = tasks.some(task => task.checked);
    
    console.log(filteredTasks);


    return (
        <div className="todo-list">
            
            {filteredTasks.length > 0 ? (
                <>
                    <ul>
                        {filteredTasks.map((task) => (
                            <li
                                key={task.id}
                                className={task.checked ? 'checked' : ''}
                                onClick={() => dispatch({ type: 'TOGGLE_CHECK', payload: task.id })}
                            >
                                <p>{task.content}</p>
                                <button onClick={() => dispatch({ type: 'REMOVE_TODO', payload: task.id })}>X</button>
                            </li>
                        ))}
                    </ul>
                    <div className="actions">
                        <label>
                            <input
                                type="checkbox"
                                checked={showComplete}
                                onChange={() => setShowComplete(!showComplete)}
                            />
                            Show completed
                        </label>
                        <button onClick={() => dispatch({ type: "REMOVE_COMPLETE" })} className="delete-complete">Delete completed</button>
                        <button onClick={() => dispatch({ type: "REMOVE_ALL" })} className="delete-all-task">Delete all tasks</button>
                    </div></>
            ) : (
                <>
                {hasChecked && (
                    <div className="actions">
                        <label>
                            <input
                                type="checkbox"
                                checked={showComplete}
                                onChange={() => setShowComplete(!showComplete)}
                            />
                            Show completed
                        </label>
                    </div>
                )}
                <h2>Add a new task to get started</h2>
                </>
            )}


        </div>
    );
}
