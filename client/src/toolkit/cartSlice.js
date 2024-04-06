// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.productSlug !== action.payload);
    },
    emptyCart : (state)=> {
      state.items = []
    }
  },
});

export const { addItem, removeItem ,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;
