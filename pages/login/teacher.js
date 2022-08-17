import React from "react";
// import LoginForm from "../../components/Login/LoginForm";
import UserLogin from "../../components/Login/UserLogin";

function TeacherLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="teacher" route="reacher" /> */}
      <UserLogin
        user="teacher"
        loginRoute="/teacher"
        dashboardRoute="/teacher"
      />
    </div>
  );
}

export default TeacherLoginPage;
