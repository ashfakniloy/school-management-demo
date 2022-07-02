import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "http://192.168.0.20:8000/v1/salary/add";

function AddSalaryForm() {
  const initialvalues = {
    staff_id: "",
    name: "",
    gender: "",
    month: "",
    amount: "",
    email: "",
  };

  const validate = Yup.object({
    staff_id: Yup.string().required("Staff ID Name is required"),
    name: Yup.string().required("Name Type is required"),
    gender: Yup.string().required("Gender is required"),
    month: Yup.string().required("Month is required"),
    amount: Yup.string().required("Amount is required"),
    email: Yup.string().required("Email is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add salary data", values);
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
              Add New Salary
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Staff ID *" name="staff_id" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Name *" name="name" type="text" />
              </div>
              {/* <div className="col-span-4 md:col-span-1">
                <TextField label="Class *" name="gender" type="text" />
              </div> */}
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Gender *"
                  name="gender"
                  type="text"
                  placeholder="Select Gender"
                  options={["Male", "Female"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Month *"
                  name="month"
                  type="text"
                  placeholder="Select Month"
                  options={[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Amount *" name="amount" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Email *" name="email" type="email" />
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

export default AddSalaryForm;
