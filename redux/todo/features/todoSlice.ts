/**
 * This is the slicer for theme state, and will be used in its store.
 * We declare the methods and the initial stats in here.
 */
import { createSlice } from "@reduxjs/toolkit";

interface Todo { // Making an interface for the todo so we are not worried about the type later.
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface initialState { // And here is the interface for the initialState.
  value: {
    lastId: number;
    todos: Todo[];
  }
}

const initialState: initialState = { // The initial state of the todo container.
  value: {
    lastId: 0, // We use this variable to give our todos a unique id.
    todos: []
  }
};

export const todoSlice = createSlice({ // Creating and slicer, which is the base of the todo state.
  name: "todo", // The name for this slicer.
  initialState, // Giving the intial state for the todo storage.
  reducers: { // Specifing reducers, methods that will change the state.
    addTodo: (state, action) => { // Adds todo to the state.
      state.value.todos.push(action.payload);
    },
    removeTodo: (state, action) => { // Removes a todo based on the id.
      state.value.todos = state.value.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => { // Toggles a todo's stats based on the id.
      const todo = state.value.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => { // Edits a todo based on the id.
      const todo = state.value.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.description = action.payload.description;
        todo.completed = action.payload.completed;
      }
    },
    setLastID: (state, action) => { // Sets the lastId attribute.
      state.value.lastId = action.payload;
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, editTodo, setLastID } = todoSlice.actions; // Exporting the function to manipulate the state.
export const todoReducer = todoSlice.reducer; // This will be used for the selector.
