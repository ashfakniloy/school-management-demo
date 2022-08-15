import React from "react";
import LoginForm from "../../components/Login/LoginForm";
import UserLogin from "../../components/Login/UserLogin";

function StudentLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="student" route="student" /> */}
      <UserLogin user="student" route="student" />
    </div>
  );
}

export default StudentLoginPage;
