import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "http://192.168.0.20:8000/v1/fee/add";

function AddFeeForm() {
  const initialvalues = {
    class: "",
    section: "",
    fee_name: "",
    fee_amount: "",
    fee_type: "",
    starts_from: "",
    finishes_at: "",
  };

  const validate = Yup.object({
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    fee_name: Yup.string().required("Fee Name is required"),
    fee_amount: Yup.string().required("Fee Amount is required"),
    fee_type: Yup.string().required("Fee Type is required"),
    starts_from: Yup.string().required("Starts From is required"),
    finishes_at: Yup.string().required("Finishes At is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add fee data", values);
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
              Add New fee
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Class *" name="class" type="text" />
              </div>

              <div className="col-span-4 md:col-span-1">
                <TextField label="Section *" name="section" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Fee Name *" name="fee_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Fee Amount *"
                  name="fee_amount"
                  type="number"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Fee Type *" name="fee_type" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Starts From *"
                  name="starts_from"
                  type="date"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Finishes At *"
                  name="finishes_at"
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

export default AddFeeForm;
