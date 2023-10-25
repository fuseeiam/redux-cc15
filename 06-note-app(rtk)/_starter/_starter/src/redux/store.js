import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";

const store = configureStore({
    reducer: {
        note: noteReducer,
        //auth: authReducer,
        // cart: cartReducer
    },
});

export default store;