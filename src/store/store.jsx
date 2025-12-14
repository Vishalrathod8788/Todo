import { createStore } from "redux";

// LocalStorage utility functions
const loadFromLocalStorage = () => {
    try {
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
        console.error('Error loading from localStorage:', error);
        return [];
    }
}

const saveToLocalStorage = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
}

const ADD_TASK = "add/task"
const DELETE_TASK = "delete/task"
const UPDATE_TASK = "update/task"

export const addTask = (task, description = "") => {
    return { type: ADD_TASK, payload: { task, description, completed: false } }
}
export const deleteTask = (index) => {
    return { type: DELETE_TASK, payload: index }
}
export const updateTask = (index) => {
    return { type: UPDATE_TASK, payload: index }
}


// Load initial state from localStorage
const initialState = {
    todo: loadFromLocalStorage(), // Load saved todos on app start
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const newTodos = [...state.todo, action.payload];
            saveToLocalStorage(newTodos); // Save to localStorage
            return { ...state, todo: newTodos };
        }

        case DELETE_TASK: {
            const newTodos = state.todo.filter((_, index) => index !== action.payload);
            saveToLocalStorage(newTodos); // Save to localStorage
            return { ...state, todo: newTodos };
        }

        case UPDATE_TASK: {
            const updatedTodos = state.todo.map((task, index) => {
                if (index === action.payload) {
                    return { ...task, completed: !task.completed };
                }
                return task;
            });
            saveToLocalStorage(updatedTodos); // Save to localStorage
            return { ...state, todo: updatedTodos };
        }


        default:
            return state;
    }
}

export const store = createStore(taskReducer);

