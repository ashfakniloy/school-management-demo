import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";
import { API_URL } from "../../../config";

function AddTransportForm() {
  const initialvalues = {
    route_name: "",
    vehicle_number: "",
    driver_name: "",
    license_number: "",
    phone_number: "",
  };

  const validate = Yup.object({
    route_name: Yup.string().required("Route Name is required"),
    vehicle_number: Yup.string().required("Vehicle Number is required"),
    driver_name: Yup.string().required("Drier Name is required"),
    license_number: Yup.string().required("License Number is required"),
    phone_number: Yup.string().required("Phone Number is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add transport data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/transport/add`, {
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
              Add New Transport
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Route Name *" name="route_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Vehicle Number *"
                  name="vehicle_number"
                  type="number"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Driver Name *"
                  name="driver_name"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="License Number *"
                  name="license_number"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Phone Number *"
                  name="phone_number"
                  type="number"
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

export default AddTransportForm;
