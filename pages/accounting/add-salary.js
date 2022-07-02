import React from "react";
import AddSalaryForm from "../../components/Admin/Form/AddSalaryForm";
import Layout from "../../components/Layout";

function AddSalaryPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <AddSalaryForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddSalaryPage;
