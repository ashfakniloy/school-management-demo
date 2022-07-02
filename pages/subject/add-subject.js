import React from "react";
import AddSubjectForm from "../../components/Admin/Form/AddSubjectForm";
import Layout from "../../components/Layout";

function AddClassPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Subject</h1>
        <div className="mt-8">
          <AddSubjectForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddClassPage;
