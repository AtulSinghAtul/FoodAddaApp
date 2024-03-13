import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addCartData: (state, action) => {
      state.cartData.push(action.payload);
    },
    removeCartData: (state, action) => {
      const id = action.payload;

      state.cartData = state.cartData.filter((item) => item.id !== id);
    },
    clearCartData: (state, action) => {
      state.cartData.length = 0;
    },
  },
});

export const { addCartData, removeCartData, clearCartData } = cartSlice.actions;
export default cartSlice.reducer;
