import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./features/todoSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const todoStore = configureStore({
    reducer: {
        todoReducer
    }
});

export type RootState = ReturnType<typeof todoStore.getState>;
export type AppDispatch = typeof todoStore.dispatch;
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;