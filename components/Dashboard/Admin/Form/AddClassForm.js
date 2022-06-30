import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "http://192.168.0.20:8000/v1/class/add";

function AddClassForm() {
  const initialvalues = {
    teacher_name: "",
    id_no: "",
    gender: "",
    class: "",
    subject: "",
    section: "",
    time: "",
    date: "",
    phone: "",
    email: "",
  };

  const validate = Yup.object({
    teacher_name: Yup.string().required("Teacher name is required"),
    id_no: Yup.string().required("ID number is required"),
    gender: Yup.string().required("Gender is required"),
    class: Yup.string().required("Class is required"),
    subject: Yup.string().required("Subject is required"),
    section: Yup.string().required("Section is required"),
    time: Yup.string().required("Time is required"),
    date: Yup.string().required("Date is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add class data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}`, {
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
              Add New Class Schedule
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField
                  label="Teacher Name *"
                  name="teacher_name"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="ID No *" name="id_no" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <SelectField
                  label="Gender *"
                  name="gender"
                  type="text"
                  placeholder="Select Gender"
                  options={["Male", "Female"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Class *" name="class" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Subject *" name="subject" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Section *" name="section" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Time *" name="time" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Date *" name="date" type="date" />
              </div>
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Phone *" name="phone" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Email *" name="email" type="email" />
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

export default AddClassForm;
