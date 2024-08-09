/**
 * This is the store of theme state. we use the slicer we made for it and configure it here.
 */
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const userStore = configureStore({
    reducer: {
        userReducer // With the reducer we have made, store can give us access to the data and also can manipulate the data.
    }
});

export type RootState = ReturnType<typeof userStore.getState>; // The type that this store's state will have.
export type AppDispatch = typeof userStore.dispatch; // The type that this store's dispatch will have.
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>; // Making a custom selector for the theme store.