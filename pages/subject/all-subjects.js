import { useEffect, useState } from "react";
import Table from "../../components/Admin/Table";
import { SubjectsColumn } from "../../components/Admin/Table/columns/subjects";
import Layout from "../../components/Layout";
import { API_URL } from "../../config";

function AllSubjectsPage() {
  const [subjectsData, setSubjectsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/subject/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setSubjectsData(data.subject);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Subjects</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Subjects Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            <Table columnsHeading={SubjectsColumn} usersData={subjectsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllSubjectsPage;
