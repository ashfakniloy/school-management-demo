import React from "react";
import Student from "../../components/Admin/Form/Student";
import Layout from "../../components/Layout";

function AdmissionFormPage() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Students</h1>
        <div className="mt-8">
          <Student />
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionFormPage;
