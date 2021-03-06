import { useEffect, useState } from "react";
import Table from "../../components/Admin/Table";
import { TeachersColumn } from "../../components/Admin/Table/columns/teachers";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

function AllTeachersPage() {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/teacher/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setTeachersData(data.data);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Teachers</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Teachers Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            <Table columnsHeading={TeachersColumn} usersData={teachersData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllTeachersPage;
