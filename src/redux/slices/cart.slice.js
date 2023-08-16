import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cartQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.cartQuantity += 1
            state.products.push(action.payload)
            state.totalPrice += action.payload.price * action.payload.quantity
        }
    }
});

const {reducer: cartReducer, actions: {addProduct}} = cartSlice;

const cartActions = {
    addProduct
}


export {cartActions, cartReducer}
