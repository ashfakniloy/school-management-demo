// import { toast } from "react-toastify";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { API_URL } from "../../../config";

// const adminLogin = async (values) => {
//   const res = await fetch(`${API_URL}/admin/login`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     console.log("success", data);

//     // localStorage.setItem("user", JSON.stringify(data));
//     localStorage.setItem("token", JSON.stringify(data.token));
//     localStorage.setItem("id", JSON.stringify(data.id));
//   } else {
//     console.log("error", data);
//     toast.error(data.message);
//   }

//   return data;
// };

// const teacherLogin = async () => {
//   const res = await fetch(`${API_URL}/teacher/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     console.log("success", data);

//     // localStorage.setItem("user", JSON.stringify(data));
//     localStorage.setItem("token", JSON.stringify(data.token));
//     localStorage.setItem("id", JSON.stringify(data.id));
//   } else {
//     console.log("error", data);
//     toast.error(data.message);
//   }

//   return data;
// };

// const studentLogin = async () => {
//   const res = await fetch(`${API_URL}/student/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     console.log("success", data);

//     // localStorage.setItem("user", JSON.stringify(data));
//     localStorage.setItem("token", JSON.stringify(data.token));
//     localStorage.setItem("id", JSON.stringify(data.id));
//   } else {
//     console.log("error", data);
//     toast.error(data.message);
//   }

//   return data;
// };

// const parentLogin = async () => {
//   const res = await fetch(`${API_URL}/parent/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   });

//   const data = await res.json();

//   if (res.ok) {
//     console.log("success", data);

//     // localStorage.setItem("user", JSON.stringify(data));
//     localStorage.setItem("token", JSON.stringify(data.token));
//     localStorage.setItem("id", JSON.stringify(data.id));
//   } else {
//     console.log("error", data);
//     toast.error(data.message);
//   }

//   return data;
// };

// const logout = () => {
// localStorage.removeItem("token");
// localStorage.removeItem("id");
// };

// const authService = {
//   adminLogin,
//   teacherLogin,
//   studentLogin,
//   parentLogin,
//   logout,
// };

// export default authService;
