/**
 * This is the store for the todo state. we use the slicer we made for it and configure it here.
 */
import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./features/todoSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const todoStore = configureStore({
    reducer: {
        todoReducer // With the reducer we have made, store can give us access to the data and also can manipulate the data.
    }
});

export type RootState = ReturnType<typeof todoStore.getState>; // The type that this store's state will have.
export type AppDispatch = typeof todoStore.dispatch; // The type of the dispatcher for this store.
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>; // Making a custom selector for the theme store.