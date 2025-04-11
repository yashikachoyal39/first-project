import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export default productSlice.reducer;