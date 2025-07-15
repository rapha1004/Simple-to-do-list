import { useReducer } from "react";


function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, { content: action.payload, checked: false, id: new Date().valueOf() }]

        case 'REMOVE_TODO':
            return state.filter(task => task.id !== action.payload)
        
        case 'TOGGLE_CHECK':
            return state.map(task => task.id === action.payload ? { ...task, checked: !task.checked } : task)

        case 'REMOVE_COMPLETE':
            return state.filter(task => !task.checked)

        case 'REMOVE_ALL':
            return []
    }


    return state
}


export function useTodos() {
    const [state, dispatch] = useReducer(todoReducer, [], () => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });


    return { state, dispatch }
}