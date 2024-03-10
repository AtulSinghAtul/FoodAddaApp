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
      console.log(id);
      state.cartData = state.cartData.filter((item) => item.id !== id);
      console.log(state.cartData);
    },
  },
});

export const { addCartData, removeCartData } = cartSlice.actions;
export default cartSlice.reducer;
