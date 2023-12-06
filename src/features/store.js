import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from './quotes/quoteSlice';

export default configureStore({
    reducer: {
        quote: quoteReducer,
    },
});