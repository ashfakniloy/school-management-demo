import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../InputField";

const API_URL = "http://192.168.0.20:8000/v1/exam/add";

function StudentsClassEmailForm() {
  const initialvalues = {
    email_to: "students class",
    class: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    // email_address: Yup.string().required("Email is required"),
    class: Yup.string().required("Class is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log("add email data", values);
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
    <div className="mt-12">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />

            <div className="grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Class *"
                  name="class"
                  type="text"
                  placeholder="Select Class"
                  options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Subject *" name="subject" type="text" />
              </div>

              <div className="col-start-1 col-end-5 md:col-end-3">
                <TextArea label="Message *" name="message" type="text" />
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

export default StudentsClassEmailForm;
