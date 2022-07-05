import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";
import { API_URL } from "../../../config";

function NoticeForm() {
  const initialvalues = {
    title: "",
    details: "",
    posted_by: "",
    post_date: "",
  };

  const validate = Yup.object({
    title: Yup.string().required("Title is required"),
    details: Yup.string().required("Details is required"),
    posted_by: Yup.string().required("Posted By is required"),
    post_date: Yup.string().required("Date is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add notice data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/notice/add`, {
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
      // formik.resetForm();
    } else {
      console.log("error", data);
      toast.error(data.message);
    }
  };

  return (
    <div className="mt-14 bg-white p-10 shadow-md">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            <h1 className="text-xl font-semibold text-slate-800">
              Add New Notice
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Title *" name="title" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Details *" name="details" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Posted By *" name="posted_by" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Date *" name="post_date" type="date" />
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                className="px-9 py-3 border-2 border-black text-black text-[11px] tracking-widest font-bold bg-transparent hover:bg-black  hover:text-white transition duration-300 uppercase"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NoticeForm;
