import { API_URL } from "../../config";
import { toast } from "react-toastify";

function usePostData(route) {
  // const postData = (values, formik) => {
  //   console.log("add hostel data", values);
  //   formik.resetForm();
  // };

  const postData = async (values, formik) => {
    const res = await fetch(`${API_URL}${route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();

    if (res.ok) {
      toast.success("Form Submitted Successfully!");
      console.log(data);
      formik.resetForm();
    } else {
      console.log("error", data);
      toast.error(data.message);
    }
  };

  return [postData];
}

export default usePostData;
