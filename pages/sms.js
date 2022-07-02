import React from "react";
import Layout from "../components/Layout";
import AddSMSForm from "../components/Dashboard/Admin/Form/AddSMSform";

function AddSMSPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">SMS</h1>
        <div className="mt-8">
          <AddSMSForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddSMSPage;
