/**
 * This is the slicer for theme state, and will be used in its store.
 */
import { createSlice } from "@reduxjs/toolkit";

interface ThemeState { // Making an interface so we are not worried about the type later.
    isDarkMode: boolean;
}

const initialState: ThemeState = { // The initial state of the theme state.
    isDarkMode: true,
};

export const themeSlice = createSlice({ // Creating and slicer, which is the base of the theme state.
    name: "theme", // The name for this slicer.
    initialState, // Giving the intial state for the theme storage.
    reducers: { // Specifing reducers, methods that will change the state.
        toggleTheme: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions; // Exporting the function to manipulate the state.
export const themeReducer = themeSlice.reducer; // This will be used for the selector.