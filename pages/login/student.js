import useRedirect from "../../components/Hooks/useRedirect";
import UserLogin from "../../components/Login/UserLogin";

function StudentLoginPage() {
  const { render } = useRedirect();

  if (render) {
    return (
      <div className="bg-gray-100">
        <UserLogin
          user="student"
          loginRoute="/student"
          dashboardRoute="/student"
        />
      </div>
    );
  }
}

export default StudentLoginPage;
