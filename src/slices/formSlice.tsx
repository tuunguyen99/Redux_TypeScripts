import { createSlice } from "@reduxjs/toolkit";

export const addformSlice = createSlice({
  name: "addform",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    del: (state, action) => {
      for (var i = 0; i < state.length; i++) {
        if (state[i].id === action.payload) {
          state.splice(i, 1);
        }
      }
    },
    edit: (state, action) => {
      for (var i = 0; i < state.length ; i++) {
        if (state[i].id === action.payload.id) {
          state[i] = action.payload;
        }
      }
    },
  },
});

export const { add, del,edit } = addformSlice.actions;

export const list = (state: { addform: any; }) => state.addform;

export default addformSlice.reducer;
