import React from "react";
import LoginForm from "../../components/Login/LoginForm";

function StudentLogin() {
  return (
    <div className="bg-gray-100">
      <LoginForm user="student" />
    </div>
  );
}

export default StudentLogin;
