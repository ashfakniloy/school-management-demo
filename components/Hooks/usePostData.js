import { API_URL } from "../../config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function usePostData(route) {
  const { token, id } = useSelector((state) => state.login);

  // const url = API_URL + route + schoolId;
  const url = `${API_URL}${route}/${id}`;

  // const postData = (values, formik) => {
  //   console.log("add hostel data", values);
  //   // formik.resetForm();
  // };

  const postData = async (values, formik) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      toast.success("Form Submitted Successfully!");
      console.log("message", data.data);
      // formik.resetForm();
    } else {
      console.log("error", data.message);
      toast.error(data.message);
    }
  };

  // const postData = async (values, formik) => {
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

  return { postData };
}

export default usePostData;
