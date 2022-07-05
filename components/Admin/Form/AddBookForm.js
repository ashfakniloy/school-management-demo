import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";
import { API_URL } from "../../../config";

function AddBookForm() {
  const initialvalues = {
    book_name: "",
    subject: "",
    writer_name: "",
    class: "",
    book_id: "",
    publish_date: "",
    upload_date: "",
  };

  const validate = Yup.object({
    book_name: Yup.string().required("Subject Name is required"),
    subject: Yup.string().required("Subject Type is required"),
    writer_name: Yup.string().required("Class is required"),
    class: Yup.string().required("Code is required"),
    book_id: Yup.string().required("Code is required"),
    publish_date: Yup.string().required("Code is required"),
    upload_date: Yup.string().required("Code is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add book data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/library/add`, {
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
              Add New Book
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Book Name *" name="book_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Subject *" name="subject" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Writer Name *"
                  name="writer_name"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Class *" name="class" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Book ID *" name="book_id" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Publish Date *"
                  name="publish_date"
                  type="date"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Upload Date *"
                  name="upload_date"
                  type="date"
                />
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

export default AddBookForm;
