import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: {
        cart: []
    },
    reducers: {
        addProduct: (state , action) => {
            state.cart.push(action.payload.item)
        }
    }
})

export const { addProduct } = cartSlice.actions 

export default cartSlice.reducer