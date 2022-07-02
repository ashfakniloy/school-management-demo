import React from "react";
import AddNoticeForm from "../../components/Admin/Form/AddNoticeForm";
import Layout from "../../components/Layout";

function AddNewClasses() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Notice</h1>
        <div className="mt-8">
          <AddNoticeForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewClasses;
