import useRedirect from "../../components/Hooks/useRedirect";
import SuperAdminLogin from "../../components/Login/SuperAdminLogin";

function SuperAdminLoginPage() {
  const { render } = useRedirect();

  if (render) {
    return (
      <div className="bg-gray-100">
        <SuperAdminLogin
          user="super admin"
          loginRoute="/super_admin"
          dashboardRoute="/admin"
        />
      </div>
    );
  }
}

export default SuperAdminLoginPage;
