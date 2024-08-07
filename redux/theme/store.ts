import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./features/themeSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const themeStore = configureStore({
    reducer: {
        themeReducer
    },
});

export type RootState = ReturnType<typeof themeStore.getState>;
export type AppDispatch = typeof themeStore.dispatch;
export const useThemeSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;
