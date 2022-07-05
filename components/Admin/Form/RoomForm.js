import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";
import { API_URL } from "../../../config";

function RoomForm() {
  const initialvalues = {
    hostel_name: "",
    room_number: "",
    room_type: "",
    num_of_bed: "",
    cost_per_bed: "",
  };

  const validate = Yup.object({
    hostel_name: Yup.string().required("Hostel Name is required"),
    room_number: Yup.string().required("Room Number is required"),
    room_type: Yup.string().required("Room Type is required"),
    num_of_bed: Yup.string().required("Number Of Bed is required"),
    cost_per_bed: Yup.string().required("Cost Per Bed is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add hostel data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/hostel/add`, {
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
              Add New Room
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField
                  label="Hostel Name *"
                  name="hostel_name"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Room Number *"
                  name="room_number"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Room Type *"
                  name="room_type"
                  type="text"
                  placeholder="Select Room Type"
                  options={["Big", "Medium", "Small"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Number Of Bed *"
                  name="num_of_bed"
                  type="number"
                  placeholder="Select Number Of Bed"
                  options={[2, 3, 4, 5]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Cost Per Bed *"
                  name="cost_per_bed"
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

export default RoomForm;
