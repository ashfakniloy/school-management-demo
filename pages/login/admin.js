import AdminLogin from "../../components/Login/AdminLogin";
import UserLogin from "../../components/Login/UserLogin";

function AdminLoginPage() {
  return (
    <div className="bg-gray-100">
      {/* <LoginForm user="admin" route="admin" /> */}
      {/* <AdminLogin user="admin" route="admin" /> */}
      <UserLogin user="admin" route="admin" />
    </div>
  );
}

export default AdminLoginPage;
