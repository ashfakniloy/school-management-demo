import React from "react";
import AddTransportForm from "../../components/Dashboard/Admin/Form/AddTransportForm";
import Layout from "../../components/Layout";

function AddTransportPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Transport</h1>
        <div className="mt-8">
          <AddTransportForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddTransportPage;
