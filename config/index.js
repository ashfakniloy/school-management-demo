export const API_URL = "http://192.168.1.106:8000/v1";

// export const API_URL = "http://206.189.132.115/v1";

export const token =
  typeof window !== "undefined" ? localStorage.getItem("school token") : null;

export const schoolId =
  typeof window !== "undefined" ? localStorage.getItem("school id") : null;

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
