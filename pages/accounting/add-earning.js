import React from "react";
import AddEarningForm from "../../components/Dashboard/Admin/Form/AddEarningForm";
import Layout from "../../components/Layout";

function AddEarningPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <AddEarningForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddEarningPage;
