import AdminLogin from "../../components/Login/AdminLogin";

function AdminLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="admin" route="admin" /> */}
      <AdminLogin user="admin" route="admin" />
    </div>
  );
}

export default AdminLoginPage;
