// import LoginForm from "../../components/Login/LoginForm";

import AdminLogin from "../../components/Login/AdminLogin";

function SuperAdminLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="super admin" route="admin" /> */}
      <AdminLogin user="super admin" route="admin" />
    </div>
  );
}

export default SuperAdminLoginPage;
