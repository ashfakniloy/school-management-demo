import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";
import { API_URL } from "../../../config";

function EarningForm() {
  const initialvalues = {
    name: "",
    amount: "",
    type: "",
    date: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name Type is required"),
    amount: Yup.string().required("Amount is required"),
    type: Yup.string().required("Type is required"),
    date: Yup.string().required("Date is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add earning data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/earning/add`, {
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
              Add New Earning
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1">
                <TextField label="Name *" name="name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Amount *" name="amount" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Type *" name="type" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Date *" name="date" type="date" />
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

export default EarningForm;
