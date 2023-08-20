import { createSlice } from "@reduxjs/toolkit";
import { getSingle, showTodo } from "./thunk";
export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    loading:false,
    list: [],
  },
  reducers: {
    clearList: (state) => {
      state.list = [];
    },
    clearSingleItem: (state) => {
      state.singlelist = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(showTodo.pending, (state) => {
      state.loading=true
    });
    builder.addCase(showTodo.fulfilled, (state, action) => {
      state.loading=false
      state.list = action.payload;
    });
    builder.addCase(getSingle.fulfilled, (state, action) => {
      state.singlelist = action.payload;
    });
  },
});
export const { clearList, clearSingleItem } = todoSlice.actions;
export default todoSlice.reducer;
