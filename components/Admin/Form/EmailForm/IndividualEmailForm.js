import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../InputField";
import { useState } from "react";

const API_URL = "http://192.168.0.20:8000/v1/exam/add";

function IndividualEmailForm() {
  const [value, setValue] = useState("");

  // const [emailTo, setEmailTo] = useState("");

  // const handleValues = (value) => {
  //   setEmailTo(value);
  //   console.log(value);
  // };

  const initialvalues = {
    email_address: "",
    subject: "",
    message: "",
  };

  const validate = Yup.object({
    email_address: Yup.string().required("Email is required"),
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
    <div className="mt-14 ">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            {/* <h1 className="text-xl font-semibold text-slate-800">Send Email</h1> */}

            <div className="pt-5 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              {/* <div className="col-span-1">
                <SelectField
                  label="Send Email To *"
                  name="email_to"
                  type="text"
                  placeholder="individual"
                  options={["individual", "all users"]}
                />
              </div> */}

              <div className="col-span-1">
                <TextField
                  label="Email Address *"
                  name="email_address"
                  type="email"
                />
              </div>

              <div className="col-span-4 md:col-span-1">
                <TextField label="Subject *" name="subject" type="text" />
              </div>

              <div className="col-span-4 md:col-span-4">
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

export default IndividualEmailForm;
