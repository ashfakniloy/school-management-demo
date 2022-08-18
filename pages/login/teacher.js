import useRedirect from "../../components/Hooks/useRedirect";
import UserLogin from "../../components/Login/UserLogin";

function TeacherLoginPage() {
  const { render } = useRedirect();

  if (render) {
    return (
      <div className="bg-gray-100">
        <UserLogin
          user="teacher"
          loginRoute="/teacher"
          dashboardRoute="/teacher"
        />
      </div>
    );
  }
}

export default TeacherLoginPage;
