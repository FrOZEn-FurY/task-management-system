"use client";

import { Provider } from "react-redux";
import { todoStore } from "../store";

export default function TodoProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={todoStore}>
            {children}
        </Provider>
    );
}