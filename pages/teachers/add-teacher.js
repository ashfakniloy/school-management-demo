import React from "react";
import Layout from "../../components/Layout";
import Teacher from "../../components/Dashboard/Admin/Form/Teacher";

function AddTeacherPage() {
  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Teachers</h1>
        <div className="mt-8">
          <Teacher />
        </div>
      </div>
    </Layout>
  );
}

export default AddTeacherPage;
