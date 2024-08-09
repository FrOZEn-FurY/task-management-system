'use client';
/**
 * This is the wrapper component that is used to wrap the application inside a provider that gives us all the states made in the store.
 */
import { Provider } from "react-redux";
import { themeStore } from "../store";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={themeStore}>
            {children}
        </Provider>
    );
}