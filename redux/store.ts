import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/features/userSlice";
import { todoReducer } from "./todo/features/todoSlice";
import { themeReducer } from "./theme/features/themeSlice";

export const rootReducer = combineReducers({
    userReducer,
    todoReducer,
    themeReducer
});

export const store = configureStore({
    reducer: rootReducer
});