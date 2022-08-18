import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/features/auth/authSlice";
import { resetInfo } from "../../redux/features/info/infoSlice";

function useLogOut() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    router.push("/");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("user_role");
    dispatch(resetLogin());
    dispatch(resetInfo());
  };

  return { logoutUser };
}

export default useLogOut;
