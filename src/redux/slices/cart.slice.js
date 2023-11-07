import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  cartQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartQuantity += 1;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {      
      const index = state.products.findIndex(item => item._id === action.payload);
      state.totalPrice -= state.products[index].price * state.products[index].quantity;
      state.products.splice(index,1);
      state.cartQuantity -= 1;
    
    },
  },
});

const {
  reducer: cartReducer,
  actions: { addProduct, deleteProduct },
} = cartSlice;

const cartActions = {
  addProduct,
  deleteProduct,
};

export { cartActions, cartReducer };
