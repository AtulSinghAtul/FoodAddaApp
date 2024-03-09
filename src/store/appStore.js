import { configureStore } from "@reduxjs/toolkit";
import resDataSlice from "../slices/resDataSlice";
import cart from "../slices/cartSlice";

const store = configureStore({
  reducer: {
    app: resDataSlice,
    cart: cart,
  },
});

export default store;
