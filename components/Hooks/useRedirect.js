import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { resetInfo } from "../../redux/features/info/infoSlice";

function useRedirect() {
  const [render, setRender] = useState(false);
  const { user_role } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user_role === null) {
      setRender(true);
      dispatch(resetInfo());
    }
    user_role === "super admin" && router.push("/admin");
    user_role === "admin" && router.push("/admin");
    user_role === "teacher" && router.push("/teacher");
    user_role === "student" && router.push("/student");
    user_role === "parent" && router.push("/parent");
  }, [user_role, router, dispatch]);

  return { render };
}

export default useRedirect;
