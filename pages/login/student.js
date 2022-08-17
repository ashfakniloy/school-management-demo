import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import UserLogin from "../../components/Login/UserLogin";

function StudentLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="student" route="student" /> */}
      <UserLogin
        user="student"
        loginRoute="/student"
        dashboardRoute="/student"
      />
    </div>
  );
}

export default StudentLoginPage;
