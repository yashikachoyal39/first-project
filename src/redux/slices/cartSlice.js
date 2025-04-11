import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload.id)
            if (index === -1) {
                action.payload.quantity = action.payload.minimumOrderQuantity
                state.value.push(action.payload)
                toast.success("Product added to cart")
            } else {
                state.value[index].quantity++;
                toast.warn("product already in cart")
            }
        },
        removeFromCart: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.value.splice(index, 1)
                toast.success("Product removed from cart")
            }
        },
        incrementQuantity: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.value[index].quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            let index = state.value.findIndex((item) => item.id === action.payload)
            if (index !== -1) {
                state.value[index].quantity--;
            }
        }
    }
});


export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;