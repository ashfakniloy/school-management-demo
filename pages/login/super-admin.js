// import LoginForm from "../../components/Login/LoginForm";

import SuperAdminLogin from "../../components/Login/SuperAdminLogin";

function SuperAdminLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="super admin" route="admin" /> */}
      {/* <AdminLogin user="super admin" route="/admin" /> */}
      <SuperAdminLogin
        user="super admin"
        loginRoute="/super_admin"
        dashboardRoute="/admin"
      />
    </div>
  );
}

export default SuperAdminLoginPage;
