import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const token =
  typeof window !== "undefined" && localStorage.getItem("school erp");

// const token = {
//   watchlist: checkWindow(localStorage.getItem("school erp"))
//       ? JSON.parse(checkWindow(localStorage.getItem("school erp")))
//       : [],
// };

const initialState = {
  // token: null,
  token: token ? token : null,
  userId: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "admin/login",
  async (values, thunkAPI) => {
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
      localStorage.setItem("school erp admin", data.token);
    } else {
      console.log("error", data);
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
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.userId = action.payload.id;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.token = null;
        state.userId = null;
      });
  },
});

export const { reset } = loginSlice.actions;

export default loginSlice.reducer;
