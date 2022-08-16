import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  institution_name: "",
  user_name: "",
  role: "",
  total_students: "",
  total_earnings: "",
  total_expenses: "",
  total_female: "",
  total_male: "",
  total_parents: "",
  total_teachers: "",
  notice: "",
  logo: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    resetInfo: (state) => {
      state.institution_name = null;
      state.role = null;
      state.total_students = null;
      state.logo = null;
      state.notice = null;
      state.total_earnings = null;
      state.total_expenses = null;
      state.total_female = null;
      state.total_male = null;
      state.total_parents = null;
      state.total_teachers = null;
      state.user_name = null;
    },

    getInfo: (state, action) => {
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
  },
});

export const { resetInfo, getInfo } = infoSlice.actions;

export default infoSlice.reducer;
