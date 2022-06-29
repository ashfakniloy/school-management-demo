import React from "react";
import AddBookForm from "../../components/Dashboard/Admin/Form/AddBookForm";
import Layout from "../../components/Layout";

function AddBookPage() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Library</h1>
        <div className="mt-8">
          <AddBookForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddBookPage;
