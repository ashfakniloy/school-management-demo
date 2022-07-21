import { useState } from "react";
import Image from "next/image";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, TextArea, SelectField, FileField } from "./InputField";
import { API_URL } from "../../../config";

function StudentForm() {
  const initialvalues = {
    first_name: "",
    last_name: "",
    gender: "",
    date_of_birth: "",
    roll: "",
    blood_group: "",
    religion: "",
    email: "",
    class: "",
    section: "",
    admission_id: "",
    phone: "",
    address: "",
    bio: "",
    testimonial: "",
    certificate: "",
    marksheet: "",
    signature: "",
    photo: "",
  };

  const validate = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    gender: Yup.string().required("Gender is required"),
    date_of_birth: Yup.string().required("Birthdate is required"),
    roll: Yup.string().required("Roll is required"),
    blood_group: Yup.string().required("Blood Group is required"),
    religion: Yup.string().required("Religion is required"),
    email: Yup.string().required("Email is required"),
    class: Yup.string().required("Class is required"),
    section: Yup.string().required("Section is required"),
    admission_id: Yup.string().required("Admission ID is required"),
    phone: Yup.string().required("Phone is required"),
    address: Yup.string().required("Address is required"),
    bio: Yup.string().required("Bio is required"),
    testimonial: Yup.string().required("Testimonial is required"),
    certificate: Yup.string().required("Certificate is required"),
    marksheet: Yup.string().required("Marksheet is required"),
    signature: Yup.string().required("Signature is required"),
    photo: Yup.string().required("Photo is required"),
  });

  // const handleSubmit = (values, formik) => {
  //   console.log("student data", values);
  // };

  const handleSubmit = async (values, formik) => {
    const res = await fetch(`${API_URL}/student/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
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

  const [testimonialPreview, setTestimonialPreview] = useState("");
  const [certificatePreview, setCertificatePreview] = useState("");
  const [marksheetPreview, setMarksheetPreview] = useState("");
  const [signaturePreview, setSignaturePreview] = useState("");
  const [photoPreview, setPhotoPreview] = useState("");

  const testimonialUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/niloy56/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setTestimonialPreview(data.secure_url);
      formik.setFieldValue("testimonial", data.secure_url);
    } else {
      console.log("failed", data);
    }
  };

  const certificateUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/niloy56/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setCertificatePreview(data.secure_url);
      formik.setFieldValue("certificate", data.secure_url);
    } else {
      console.log("failed", data);
    }
  };

  const marksheetUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/niloy56/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setMarksheetPreview(data.secure_url);
      formik.setFieldValue("marksheet", data.secure_url);
    } else {
      console.log("failed", data);
    }
  };

  const signatureUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/niloy56/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setSignaturePreview(data.secure_url);
      formik.setFieldValue("signature", data.secure_url);
    } else {
      console.log("failed", data);
    }
  };

  const photoUpload = async (e, formik) => {
    const files = e.target.files;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "u9pqvof1");

    // console.log([...formData.entries()]);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/niloy56/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (res.ok) {
      console.log("success", data.secure_url);
      setPhotoPreview(data.secure_url);
      formik.setFieldValue("photo", data.secure_url);
    } else {
      console.log("failed", data);
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
              Add New Students
            </h1>
            <div className="pt-10 grid md:grid-cols-4 text-sm md:gap-x-8 gap-y-5 md:gap-y-7">
              <div className="col-span-4 md:col-span-1">
                <TextField label="First Name *" name="first_name" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Last Name *" name="last_name" type="text" />
              </div>
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
                <TextField
                  label="Date of Birth *"
                  name="date_of_birth"
                  type="date"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Roll *" name="roll" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Blood Group *"
                  name="blood_group"
                  type="text"
                  placeholder="Select Blood Group"
                  options={["A+", "A-", "B+", "B-", "O+", "O-"]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <SelectField
                  label="Religion *"
                  name="religion"
                  type="text"
                  placeholder="Select Religion"
                  options={[
                    "Islam",
                    "Hindu",
                    "Christian",
                    "Buddhist",
                    "Others",
                  ]}
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Email *" name="email" type="email" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Class *" name="class" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Section *" name="section" type="text" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField
                  label="Admission ID *"
                  name="admission_id"
                  type="number"
                />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Phone *" name="phone" type="number" />
              </div>
              <div className="col-span-4 md:col-span-1">
                <TextField label="Address *" name="address" type="text" />
              </div>
              <div className="col-start-1 col-end-5 md:col-end-3">
                <TextArea label="Short Bio *" name="bio" type="text" />
              </div>
            </div>

            <div className="mt-6 md:flex text-sm">
              <FileField
                name="testimonial"
                label="Testimonial *"
                handleChange={(e) => testimonialUpload(e, formik)}
                imagePreview={testimonialPreview}
              />

              <FileField
                name="certificate"
                label="Certificate *"
                handleChange={(e) => certificateUpload(e, formik)}
                imagePreview={certificatePreview}
              />

              <FileField
                name="marksheet"
                label="Marksheet *"
                handleChange={(e) => marksheetUpload(e, formik)}
                imagePreview={marksheetPreview}
              />

              <FileField
                name="signature"
                label="Signature *"
                handleChange={(e) => signatureUpload(e, formik)}
                imagePreview={signaturePreview}
              />

              <FileField
                name="photo"
                label="Photo *"
                handleChange={(e) => photoUpload(e, formik)}
                imagePreview={photoPreview}
              />
            </div>

            <div className="mt-8 flex justify-start">
              <button
                type="submit"
                className="px-9 py-3 border-2 border-slate-700 text-slate-700 text-[11px] tracking-widest font-bold bg-transparent hover:bg-slate-700  hover:text-white transition duration-300 uppercase"
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

export default StudentForm;
