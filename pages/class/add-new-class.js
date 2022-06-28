import React from "react";
import AddClassForm from "../../components/Dashboard/Admin/Form/AddClassForm";
import Layout from "../../components/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Class</h1>
        <div className="mt-8">
          <AddClassForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
