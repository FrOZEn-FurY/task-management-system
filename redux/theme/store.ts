/**
 * This is the store of theme state. we use the slicer we made for it and configure it here.
 */
import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/themeSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const themeStore = configureStore({
    reducer: {
        themeReducer // With the reducer we have made, store can give us access to the data and also can manipulate the data.
    },
});

export type RootState = ReturnType<typeof themeStore.getState>; // The type that this store's state will have.
export type AppDispatch = typeof themeStore.dispatch; // The type of the dispatcher for this store.
export const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>; // Making a custom selector for the theme store.
