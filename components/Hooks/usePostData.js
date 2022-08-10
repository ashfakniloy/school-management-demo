import { API_URL, token, id } from "../../config";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

function usePostData(route) {
  // const { token, userId } = useSelector((state) => state.login);

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
      console.log(data);
      // formik.resetForm();
    } else {
      console.log("error", data);
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
