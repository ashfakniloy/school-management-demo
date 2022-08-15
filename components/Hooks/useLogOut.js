import React from "react";
import { useDispatch } from "react-redux";
import { resetLogin } from "../../redux/features/auth/authSlice";
import { resetInfo } from "../../redux/features/info/infoSlice";

function useLogOut() {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch(resetLogin());
    dispatch(resetInfo());
  };

  return { logoutUser };
}

export default useLogOut;
