import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  API_URL,
  // user,
  token as schoolToken,
  id as schoolId,
  // institutionName,
  // username,
} from "../../../config";
import authService from "./authService";

const initialState = {
  token: schoolToken ? schoolToken : null,
  id: schoolId ? schoolId : null,
  // institutionName: institutionName ? institutionName : null,
  // username: username ? username : null,
  // user: user ? user : null,
  isLoggedIn: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  role: "",
  institution_name: "",
  total_students: "",
  logo: "",
  notice: "",
  total_earnings: "",
  total_expenses: "",
  total_female: "",
  total_male: "",
  total_parents: "",
  total_teachers: "",
  user_name: "",
};

// export const allData = createAsyncThunk("admin/allData", async (thunkAPI) => {
//   const res = await fetch(`http://192.168.1.107:8000/v1/data/all/${schoolId}`, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${schoolToken}`,
//     },
//   });

//   const data = await res.json();

//   if (res.ok) {
//     console.log("data is", data.data);
//     // return data.data;
//   } else {
//     return console.log("error", data.message);
//   }

//   // if (res.ok) {
//   //   console.log("all data", data.data);
//   // } else {
//   //   console.log("error", data.data);
//   //   return thunkAPI.rejectWithValue(data.data);
//   // }

//   return data.data;
// });

export const login = createAsyncThunk("admin/login", async (values, user) => {
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
    // return thunkAPI.rejectWithValue(data);
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
});

// export const logout = createAsyncThunk("admin/logout", async () => {
//   localStorage.removeItem("token");
//   localStorage.setItem("id", JSON.stringify(data.id));
// });

export const logout = createAsyncThunk("auth/logout", async () => {
  // await authService.logout()
  authService.logout();
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
    getAllData: (state, action) => {
      const {
        institution_name,
        user_name,
        total_students,
        total_male,
        total_female,
        total_teachers,
        total_parents,
        total_earnings,
        total_expenses,
        role,
        logo,
        notice,
      } = action.payload;

      state.institution_name = institution_name;
      state.user_name = user_name;
      state.total_students = total_students;
      state.total_male = total_male;
      state.total_female = total_female;
      state.total_teachers = total_teachers;
      state.total_parents = total_parents;
      state.total_earnings = total_earnings;
      state.total_expenses = total_expenses;
      state.role = role;
      state.logo = logo;
      state.notice = notice;
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
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.id = null;
        state.isLoggedIn = false;
        state.isError = false;
        state.isSuccess = false;
        state.isLoading = false;
      });
    // .addCase(allData.fulfilled, (state, action) => {
    //   const {
    //     institution_name,
    //     user_name,
    //     total_students,
    //     total_male,
    //     total_female,
    //     total_teachers,
    //     total_parents,
    //     total_earnings,
    //     total_expenses,
    //     role,
    //     logo,
    //     notice,
    //   } = action.payload;

    //   state.institution_name = institution_name;
    //   state.user_name = user_name;
    //   state.total_students = total_students;
    //   state.total_male = total_male;
    //   state.total_female = total_female;
    //   state.total_teachers = total_teachers;
    //   state.total_parents = total_parents;
    //   state.total_earnings = total_earnings;
    //   state.total_expenses = total_expenses;
    //   state.role = role;
    //   state.logo = logo;
    //   state.notice = notice;
    // });
  },
});

export const { reset, getAllData } = loginSlice.actions;

export default loginSlice.reducer;
