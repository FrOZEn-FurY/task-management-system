'use client';

import { Provider } from "react-redux";
import { themeStore } from "../store";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={themeStore}>
            {children}
        </Provider>
    );
}