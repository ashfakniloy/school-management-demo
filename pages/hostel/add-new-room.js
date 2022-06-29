import React from "react";
import AddRoomForm from "../../components/Dashboard/Admin/Form/AddRoomForm";
import Layout from "../../components/Layout";

function AddNewRoom() {
  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Hostel</h1>
        <div className="mt-8">
          <AddRoomForm />
        </div>
      </div>
    </Layout>
  );
}

export default AddNewRoom;
