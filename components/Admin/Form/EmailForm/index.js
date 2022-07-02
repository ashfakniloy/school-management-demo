import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField } from "../InputField";
import { useState } from "react";
import AddEmailForm from "./IndividualEmailForm";

function EmailForm() {
  const [value, setValue] = useState("individual");

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <div className="mt-14 bg-white p-10 shadow-md">
      <h1 className="text-xl font-semibold text-slate-800">Send Email</h1>

      <label htmlFor="email" className="mr-2">
        Send Email To:
      </label>

      <select
        className="mt-8 p-2 outline-none border border-slate-500"
        name="email"
        id="email"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="individual">Individual</option>
        <option value="all users">All Users</option>
      </select>

      {value === "individual" && <AddEmailForm />}
    </div>
  );
}

export default EmailForm;
