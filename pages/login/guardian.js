import React from "react";
// import LoginForm from "../../components/Login/LoginForm";
import UserLogin from "../../components/Login/UserLogin";

function GuardianLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="guardian" route="guardian" /> */}
      <UserLogin
        user="guardian"
        loginRoute="/guardian"
        dashboardRoute="/guardian"
      />
    </div>
  );
}

export default GuardianLoginPage;
