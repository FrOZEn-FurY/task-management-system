import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface initialState {
  value: Todo[];
}

const initialState: initialState = {
  value: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    editTodo: (state, action) => {
      const todo = state.value.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
        todo.description = action.payload.description;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
