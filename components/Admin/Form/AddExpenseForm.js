import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "./InputField";

const API_URL = "http://192.168.0.20:8000/v1/expense/add";

function AddExpenseForm() {
  const initialvalues = {
    name: "",
    id_no: "",
    expense_type: "",
    amount: "",
    phone: "",
    email: "",
    status: "",
    date: "",
  };

  const validate = Yup.object({
    name: Yup.string().required("Name is required"),
    id_no: Yup.string().required("ID No is required"),
    expense_type: Yup.string().required("Expense type is required"),
    amount: Yup.string().required("Amount is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().required("Email is required"),
    status: Yup.string().required("Status is required"),
    date: Yup.string().required("Date is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("add expense data", values);
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
              Add New Expense
            </h1>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-4 text-sm gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1 ">
                <TextField label="Name *" name="name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="ID No *" name="id_no" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Expense Type *"
                  name="expense_type"
                  type="text"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Amount *" name="amount" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Phone *" name="phone" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Email *" name="email" type="email" />
              </div>

              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Status *"
                  name="status"
                  type="text"
                  placeholder="Select Status"
                  options={["Paid", "Due", "Others"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Date *" name="date" type="date" />
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

export default AddExpenseForm;
