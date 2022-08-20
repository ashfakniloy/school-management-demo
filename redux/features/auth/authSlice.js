import { createSlice } from "@reduxjs/toolkit";
import { token, id, user_role, identity_id } from "../../../config";

const initialState = {
  token: token ? token : null,
  id: id ? id : null,
  user_role: user_role ? user_role : null,
  identity_id: identity_id ? identity_id : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetLogin: (state) => {
      state.token = null;
      state.id = null;
      state.user_role = null;
      state.identity_id = null;
    },
    doLogin: (state, action) => {
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.user_role = action.payload.role;
      state.identity_id = action.payload.identity_id;
    },
  },
});

export const { resetLogin, doLogin } = authSlice.actions;

export default authSlice.reducer;
