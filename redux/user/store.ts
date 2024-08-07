import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const userStore = configureStore({
    reducer: {
        userReducer
    }
});

export type RootState = ReturnType<typeof userStore.getState>;
export type AppDispatch = typeof userStore.dispatch;
export const useUserSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;