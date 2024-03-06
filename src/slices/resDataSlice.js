import { createSlice } from "@reduxjs/toolkit";

const resDataSlice = createSlice({
  name: "resDataSlice",
  initialState: {
    resData: null,
    filterData: null,
    resListData: null,
  },
  reducers: {
    addResData: (state, action) => {
      state.resData = action.payload;
    },
    addFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    addResListData: (state, action) => {
      state.resListData = action.payload;
    },
  },
});

export const { addResData, addFilterData, addResListData } =
  resDataSlice.actions;

export default resDataSlice.reducer;
