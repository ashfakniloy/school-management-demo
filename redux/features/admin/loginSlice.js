import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userId: null,
  pending: false,
  error: false,
};

export const login = createAsyncThunk("admin/login", async (values) => {
  const API_URL = `http://192.168.1.106:8000/v1/admin/login`;

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  const data = await res.json();

  if (res.ok) {
    console.log("success", data);
    localStorage.setItem(`school erp admin`, data.token);
    router.push(`/admin`);
  } else {
    console.log("error", data);
  }

  return data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.pending = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.pending = false;
        state.userId = action.payload.id;
      })
      .addCase(login.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export default loginSlice.reducer;
