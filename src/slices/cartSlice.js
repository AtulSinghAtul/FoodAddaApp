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
  },
});

export const { addCartData } = cartSlice.actions;
export default cartSlice.reducer;
