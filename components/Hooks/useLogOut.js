import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/features/auth/authSlice";
import { resetInfo } from "../../redux/features/info/infoSlice";

function useLogOut() {
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("user_role");
    dispatch(resetInfo());
    dispatch(resetLogin());
    router.push("/");
  };

  return { logoutUser };
}

export default useLogOut;
