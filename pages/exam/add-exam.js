import React from "react";
import AddExamForm from "../../components/Admin/Form/AddExamForm";
import Layout from "../../components/Layout";

function AddExamPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Exam</h1>
        <div className="mt-8">
          <AddExamForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddExamPage;
