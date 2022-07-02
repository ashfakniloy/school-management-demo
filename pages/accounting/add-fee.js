import React from "react";
import AddFeeForm from "../../components/Admin/Form/AddFeeForm";
import Layout from "../../components/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <AddFeeForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
