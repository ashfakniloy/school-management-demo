import { useEffect } from "react";
import LoginForm from "../../components/Login/LoginForm";
import { useDispatch, useSelector } from "react-redux";

function SuperAdminLogin() {
  // const dispatch = useDispatch();
  // const userId = useSelector((state) => state.login.userId);

  // console.log("userid", userId);

  return (
    <div className="bg-gray-100">
      <LoginForm user="super admin" route="admin" />
    </div>
  );
}

export default SuperAdminLogin;
