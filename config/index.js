export const API_URL = "http://192.168.1.107:8000/v1";

// export const API_URL = "http://206.189.132.115/v1";

// export const user =
//   typeof window !== "undefined" ? localStorage.getItem("user") : null;

// export const user =
//   typeof window !== "undefined"
//     ? JSON.parse(localStorage.getItem("user"))
//     : null;

export const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : null;

export const id =
  typeof window !== "undefined" ? JSON.parse(localStorage.getItem("id")) : null;

// export const token =
//   typeof window !== "undefined" ? localStorage.getItem("school token") : null;

// export const schoolId =
//   typeof window !== "undefined" ? localStorage.getItem("school id") : null;

// export const institutionName =
//   typeof window !== "undefined" && localStorage.getItem("institution name");

// export const username =
//   typeof window !== "undefined" ? localStorage.getItem("username") : null;

// export const token = () => {
//   if (typeof window !== "undefined") {
//     localStorage.getItem("school token")
//       ? localStorage.getItem("school token")
//       : null;
//   }
// };

// export const schoolId = () => {
//   if (typeof window !== "undefined") {
//     localStorage.getItem("school id")
//       ? localStorage.getItem("school id")
//       : null;
//   }
// };
