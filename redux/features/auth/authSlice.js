import { createSlice } from "@reduxjs/toolkit";
import { token, id, user_role } from "../../../config";

const initialState = {
  token: token ? token : null,
  id: id ? id : null,
  user_role: user_role ? user_role : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.token = null;
      state.id = null;
      state.user_role = null;
    },
    doLogin: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.user_role = action.payload.from;
    },
  },
});

export const { resetLogin, doLogin } = authSlice.actions;

export default authSlice.reducer;
