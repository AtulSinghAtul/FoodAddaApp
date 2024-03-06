import { configureStore } from "@reduxjs/toolkit";
import resDataSlice from "../slices/resDataSlice";

const store = configureStore({
  reducer: {
    app: resDataSlice,
  },
});

export default store;
