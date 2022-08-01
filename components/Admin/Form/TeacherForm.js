import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../../common/InputField";
import { API_URL } from "../../../config";

function TeacherForm() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    id_no: "",
    blood_group: "",
    religion: "",
    email: "",
    class: "",
    section: "",
    phone: "",
    address: "",
    bio: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.string().required("Birthdate is required"),
    id_no: Yup.string().required("ID number is required"),
    blood_group: Yup.string().required("Blood Group is required"),
    religion: Yup.string().required("Religion is required"),
    email: Yup.string().required("Email is required"),
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    bio: Yup.string().required("Bio is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("Form data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/teacher/signup`, {
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
              Add New Teacher
            </h1>
            <div className="form">
              <TextField label="First Name *" name="first_name" type="text" />
              <TextField label="Last Name *" name="last_name" type="text" />
              <SelectField
                label="Gender *"
                name="gender"
                type="text"
                placeholder="Select Gender"
                options={["Male", "Female"]}
              />
              <TextField
                label="Date of Birth *"
                name="date_of_birth"
                type="date"
              />
              <TextField label="ID No *" name="id_no" type="number" />
              <SelectField
                label="Blood Group *"
                name="blood_group"
                type="text"
                placeholder="Select Blood Group"
                options={["A+", "A-", "B+", "B-", "O+", "O-"]}
              />
              <SelectField
                label="Religion *"
                name="religion"
                type="text"
                placeholder="Select Religion"
                options={["Islam", "Hindu", "Christian", "Buddhist", "Others"]}
              />
              <TextField label="Email *" name="email" type="email" />
              <TextField label="Class *" name="class" type="text" />
              <TextField label="Section *" name="section" type="text" />
              <TextField label="Phone *" name="phone" type="number" />
              <TextField label="Address *" name="address" type="text" />
              <TextArea label="Short Bio *" name="bio" type="text" />
            </div>

            <button type="submit" className="submit_button">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TeacherForm;
