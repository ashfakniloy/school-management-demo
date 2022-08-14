import { API_URL } from "../../../config";

const login = async () => {
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
  }

  return data;

  // else {
  //   console.log("error", data);
  //   toast.error(data.message);
  // }
};

const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
};

const authService = {
  login,
  logout,
};

export default authService;
