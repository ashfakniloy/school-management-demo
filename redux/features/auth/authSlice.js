import { createSlice } from "@reduxjs/toolkit";
import { token, id } from "../../../config";

const initialState = {
  token: token ? token : null,
  id: id ? id : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.token = null;
      state.id = null;
    },
    doLogin: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
  },
});

export const { resetLogin, doLogin } = authSlice.actions;

export default authSlice.reducer;
