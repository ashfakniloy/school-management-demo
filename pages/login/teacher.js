import React from "react";
import LoginForm from "../../components/Login/LoginForm";

function TeacherLogin() {
  return (
    <div className="bg-gray-100">
      <LoginForm user="teacher" route="reacher" />
    </div>
  );
}

export default TeacherLogin;
