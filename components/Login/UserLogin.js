import { useEffect } from "react";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../common/InputField";
import { useSelector } from "react-redux";
import useLogin from "../Hooks/useLogin";

function UserLogin({ user, loginRoute, dashboardRoute }) {
  const initialvalues = {
    identity_id: "",
    email: "",
    password: "",
  };

  const validate = Yup.object({
    identity_id: Yup.string().required("Institution Code is required"),
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const router = useRouter();

  const { token, id } = useSelector((state) => state.auth);

  const { loginUser } = useLogin(loginRoute);

  useEffect(() => {
    if (token && id) {
      router.push(dashboardRoute);
    }
  }, [token, id, router, dashboardRoute]);

  const handleSubmit = (values) => {
    loginUser(values);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <ToastContainer />
      <div className="bg-gray-200 px-10 py-14 shadow-lg">
        <h1 className="text-2xl font-semibold text-center">
          Log in as <span className="capitalize">{user}</span>
        </h1>

        <div className="mt-8">
          <Formik
            initialValues={initialvalues}
            validationSchema={validate}
            onSubmit={handleSubmit}
          >
            {(formik) => (
              <Form>
                <div className="text-sm gap-y-5 md:gap-y-7">
                  <div className="min-w-[400px] space-y-4">
                    <TextField
                      label="Institution Id *"
                      name="identity_id"
                      type="text"
                    />
                    <TextField label="Email *" name="email" type="email" />
                    <TextField
                      label="Password *"
                      name="password"
                      type="password"
                      autoComplete="on"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-6 px-5 py-2 border-2 border-green-500 rounded text-green-500 text-sm hover:bg-gray-300 transition duration-300"
                  >
                    Login
                  </button>
                  {user === "super admin" && (
                    <p className="mt-4 text-xs text-teal-600">
                      <a href="http://localhost:3001/school-management-system">
                        Don&apos;t have an account? Register here
                      </a>
                    </p>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
