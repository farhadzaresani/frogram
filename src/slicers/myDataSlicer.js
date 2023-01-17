import { createSlice } from "@reduxjs/toolkit";

export const myDataSlicer = createSlice({
  name: "me",
  initialState: { currnetUser: { name: "Farhad", img: "" } },
  reducers: {
    updateProilePicture: (state, action) => {
      state.currnetUser = {
        ...state.currnetUser,
        img: action.payload,
      };
    },
    updateName: (state, action) => {
      state.currnetUser = {
        ...state.currnetUser,
        name: action.payload,
      };
    },
  },
});

export const { updateProilePicture, updateName } = myDataSlicer.actions;
export const myData = (state) => state.me.currnetUser;
export default myDataSlicer.reducer;
