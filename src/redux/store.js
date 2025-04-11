import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./slices/cartSlice";
import userSlice from "./slices/userSlice";
import productSlice from "./slices/productSlice"

const store = configureStore({
    reducer: {
        cart: createSlice,
        user: userSlice,
        products : productSlice
    }
});

export default store;