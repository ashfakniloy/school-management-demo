// import { useRouter } from "next/router";
import * as Yup from "yup";
import { Formik, Form } from "formik";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { TextField } from "../../components/common/InputField";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/admin/loginSlice";
// import Layout from "../../components/Layout";

function LoginForm({ user }) {
  const initialvalues = {
    email: "",
    password: "",
  };

  const validate = Yup.object({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log(values);
  //   router.push(`/${user}`);
  // };

  const router = useRouter();
  const dispatch = useDispatch();
  // const id = useSelector((state) => state.login.userId);

  const handleSubmit = async (values, formik) => {
    dispatch(login(values));
    // router.push("/admin");
    // console.log(id);
    // const API_URL = `http://192.168.1.106:8000/v1/${user}/login`;
    // const res = await fetch(API_URL, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(values),
    // });
    // const data = await res.json();
    // if (res.ok) {
    //   console.log("success", data);
    //   localStorage.setItem(`school erp ${user}`, data.token);
    //   // router.push(`/${user}`);
    // } else {
    //   console.log("error", data);
    // }
    // if (data.text === "success") {
    //   // toast.success("Success!");
    //   // router.push("/dashboard");
    //   localStorage.setItem("token-webschool", data.token);
    // } else if (data.text === "not found") {
    //   toast.error("Email not found");
    // } else if (data.text === "failure") {
    //   toast.error("Wrong Password");
    // } else {
    //   toast.error("Something went wrong!");
    //   console.log(res);
    // }
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
                {/* <ToastContainer /> */}
                <div className="text-sm gap-y-5 md:gap-y-7">
                  <div className="min-w-[400px]">
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
                    className="mt-2 px-5 py-2 border-2 border-green-500 rounded text-green-500 text-sm hover:bg-gray-300 transition duration-300"
                  >
                    Login
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
