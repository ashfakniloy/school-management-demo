import React from "react";
import LoginForm from "../../components/Login/LoginForm";

function GuardianLogin() {
  return (
    <div className="bg-gray-100">
      <LoginForm user="guardian" />
    </div>
  );
}

export default GuardianLogin;
