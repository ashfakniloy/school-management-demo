import { API_URL } from "../../config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/features/auth/authSlice";
import { useRouter } from "next/router";

function useLogin(loginRoute, dashboardRoute) {
  const router = useRouter();
  const dispatch = useDispatch();
  const url = `${API_URL}${loginRoute}/login`;

  const loginUser = async (values) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      // localStorage.setItem("token", JSON.stringify(data.token));
      // localStorage.setItem("id", JSON.stringify(data.id));
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.id);
      localStorage.setItem("user_role", data.from);
      dispatch(doLogin(data));
      router.push(dashboardRoute);
    } else {
      console.log("error", data);
      toast.error(data.message);
    }
  };

  return { loginUser };
}

export default useLogin;
