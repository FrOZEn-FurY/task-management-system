import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    name: string;
};

const initialState: initialState = {
    name: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const { setName } = userSlice.actions;
export const userReducer = userSlice.reducer;
