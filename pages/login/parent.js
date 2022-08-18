import useRedirect from "../../components/Hooks/useRedirect";
import UserLogin from "../../components/Login/UserLogin";

function ParentLoginPage() {
  const { render } = useRedirect();

  if (render) {
    return (
      <div className="bg-gray-100">
        <UserLogin
          user="parent"
          loginRoute="/parent"
          dashboardRoute="/parent"
        />
      </div>
    );
  }
}

export default ParentLoginPage;
