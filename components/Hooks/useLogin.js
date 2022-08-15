import { API_URL } from "../../config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function useLogin(route) {
  // const { token, id } = useSelector((state) => state.login);

  // const url = API_URL + route + schoolId;
  const url = `${API_URL}${route}/login`;

  // const postData = (values, formik) => {
  //   console.log("add hostel data", values);
  //   // formik.resetForm();
  // };

  const loginUser = async (values) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);

      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("id", JSON.stringify(data.id));
    } else {
      console.log("error", data);
      toast.error(data.message);
      // return thunkAPI.rejectWithValue(data);
    }
  };

  // const login = async (values, formik) => {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(values),
  //   });
  //   const data = await res.json();

  //   if (res.ok) {
  //     toast.success("Form Submitted Successfully!");
  //     console.log(data);
  //     // formik.resetForm();
  //   } else {
  //     console.log("error", data);
  //     toast.error(data.message);
  //   }
  // };

  return { loginUser };
}

export default useLogin;
