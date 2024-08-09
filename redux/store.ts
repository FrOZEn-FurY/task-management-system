/**
 * We are making a root store here, with the combination of all the reducers we have made, with this we can provide all the storages in one place.
 */
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/features/userSlice";
import { todoReducer } from "./todo/features/todoSlice";
import { themeReducer } from "./theme/features/themeSlice";

export const rootReducer = combineReducers({ // Using this function to combine reducers and get one general reducer.
    userReducer,
    todoReducer,
    themeReducer
});

export const store = configureStore({ // Making a root store.
    reducer: rootReducer
});