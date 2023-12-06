import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
        setQuote: (state, action) => {
            state = action.payload
        }
    }
});

export const { setQuote } = quoteSlice.actions;
export default quoteSlice.reducer;