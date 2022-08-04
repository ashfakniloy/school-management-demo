import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { API_URL, token, schoolId } from "../../../config";

const initialState = {
  token: token ? token : null,
  schoolId: schoolId ? schoolId : null,
  role: "admin",
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "admin/login",
  async (values, thunkAPI) => {
    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    if (res.ok) {
      console.log("success", data.token);
      localStorage.setItem("school token", data.token);
      localStorage.setItem("school id", data.id);
    } else {
      console.log("error", data);
      toast.error(data.message);
      return thunkAPI.rejectWithValue(data);
    }
    return data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.token = null;
      state.schoolId = null;
      state.isLoggedIn = false;
    },
    // loggedIn: (state, action) => {
    //   state.isLoggedIn = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.schoolId = action.payload.id;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
        state.schoolId = null;
      });
  },
});

export const { reset } = loginSlice.actions;

export default loginSlice.reducer;
