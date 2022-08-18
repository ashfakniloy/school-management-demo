import useRedirect from "../../components/Hooks/useRedirect";
import UserLogin from "../../components/Login/UserLogin";

function AdminLoginPage() {
  const { render } = useRedirect();

  if (render) {
    return (
      <div className="bg-gray-100">
        <UserLogin user="admin" loginRoute="/admin" dashboardRoute="/admin" />
      </div>
    );
  }
}

export default AdminLoginPage;
