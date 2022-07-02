import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "http://192.168.0.20:8000/v1/exam/add";

function AddSMSForm() {
  const initialvalues = {
    exam_name: "",
    subject_type: "",
    select_class: "",
    select_section: "",
    select_time: "",
    select_date: "",
  };

  const validate = Yup.object({
    exam_name: Yup.string().required("Exam Name is required"),
    subject_type: Yup.string().required("Subject Type is required"),
    select_class: Yup.string().required("Class is required"),
    select_section: Yup.string().required("Section is required"),
    select_time: Yup.string().required("Time is required"),
    select_date: Yup.string().required("Date is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("add exam data", values);
  };

  // const handleSubmit = async (values, formik) => {
  //   const res = await fetch(`${API_URL}`, {
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
            <h1 className="text-xl font-semibold text-slate-800">Send SMS</h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Name *" name="exam_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Subject Type *"
                  name="subject_type"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Class *" name="select_class" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Select Section *"
                  name="select_section"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Time *" name="select_time" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Date *" name="select_date" type="date" />
              </div>

              {/* <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Status *"
                  name="status"
                  type="text"
                  placeholder="Select Status"
                  options={["Paid", "Due", "Others"]}
                />
              </div> */}
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

export default AddSMSForm;
