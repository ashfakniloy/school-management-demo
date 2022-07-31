import React from "react";
import LoginForm from "../../components/Login/LoginForm";

function AdminLogin() {
  return (
    <div className="bg-gray-100">
      <LoginForm user="admin" />
    </div>
  );
}

export default AdminLogin;
