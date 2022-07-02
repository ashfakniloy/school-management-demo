import React from "react";
import AddExpenseForm from "../../components/Admin/Form/AddExpenseForm";
import Layout from "../../components/Layout";

function AddExpense() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Accounting</h1>
        <div className="mt-8">
          <AddExpenseForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddExpense;
