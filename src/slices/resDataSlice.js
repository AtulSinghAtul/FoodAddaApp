import { createSlice } from "@reduxjs/toolkit";

const resDataSlice = createSlice({
  name: "resDataSlice",
  initialState: {
    resData: null,
  },
  reducers: {
    addResData: (state, action) => {
      state.resData = action.payload;
    },
  },
});

export const { addResData } = resDataSlice.actions;

export default resDataSlice.reducer;
