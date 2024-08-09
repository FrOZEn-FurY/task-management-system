/**
 * This is the slicer for theme state, and will be used in its store.
 */
import { createSlice } from "@reduxjs/toolkit";

interface initialState { // The initial state of the user container's interface.
    name: string;
};

const initialState: initialState = { // The initial state value.
    name: ""
};

export const userSlice = createSlice({ // Creating the slice to make the user container.
    name: "user", // The name for the slicer.
    initialState, // Giving the initial and the beginning state of the user container.
    reducers: { // The method to manipulate the data.
        setName: (state, action) => { // Set the logged in user's username.
            state.name = action.payload;
        }
    }
});

export const { setName } = userSlice.actions; // Exporting functions to manipulate the data later.
export const userReducer = userSlice.reducer; // With this reducer we are going to configure the store.
