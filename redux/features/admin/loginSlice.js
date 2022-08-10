import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImFileZip } from "react-icons/im";
import { toast } from "react-toastify";
import {
  API_URL,
  user,
  token,
  id,
  // institutionName,
  // username,
} from "../../../config";

const initialState = {
  token: token ? token : null,
  id: id ? id : null,
  // institutionName: institutionName ? institutionName : null,
  // username: username ? username : null,
  // user: user ? user : null,
  role: "",
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk(
  "admin/login",
  async (values, thunkAPI) => {
    // try {
    //   const res = await fetch(`${API_URL}/admin/login`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     console.log("success", data);
    // localStorage.setItem("school token", data.token);
    // localStorage.setItem("school id", data.id);
    // localStorage.setItem("institution name", data.institution_name);
    // localStorage.setItem("username", data.user_name);
    //   }

    //   return data;
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.data.message);
    //   return thunkAPI.rejectWithValue(error.data);
    // }

    const res = await fetch(`${API_URL}/admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);

      // localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("id", JSON.stringify(data.id));
    } else {
      console.log("error", data);
      toast.error(data.message);
      return thunkAPI.rejectWithValue(data);
    }

    // if (res.ok) {
    //   console.log("success", data);
    //   localStorage.setItem("school token", data.token);
    //   localStorage.setItem("school id", data.id);
    //   localStorage.setItem("institution name", data.institution_name);
    //   localStorage.setItem("username", data.user_name);
    // } else {
    //   console.log("error", data);
    //   toast.error(data.message);
    //   return thunkAPI.rejectWithValue(data);
    // }
    return data;
  }
);

export const logout = createAsyncThunk("admin/logout", async () => {
  localStorage.removeItem("token");
  localStorage.setItem("id", JSON.stringify(data.id));
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    reset: (state) => {
      state.token = null;
      state.id = null;
      // state.institutionName = null;
      // state.username = null;
    },
    // loggedIn: (state, action) => {
    //   state.isLoggedIn = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isLoggedIn = true;
        // state.user = action.payload;
        state.token = action.payload.token;
        state.id = action.payload.id;
        // state.institutionName = action.payload.institution_name;
        // state.username = action.payload.username;
      })
      .addCase(login.rejected, (state, action) => {
        // state.user = null;
        state.isLoading = false;
        state.isError = true;
        state.isLoggedIn = false;
        state.message = action.payload;
        // state.token = null;
        // state.schoolId = null;
        // state.institutionName = null;
        // state.username = null;
      })
      .addCase(logout.fulfilled),
      (state) => {
        state.token = null;
        state.id = null;
        state.isLoggedIn = false;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = false;
      };
  },
});

export const { reset } = loginSlice.actions;

export default loginSlice.reducer;
