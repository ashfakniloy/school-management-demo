import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { ExamsColumn } from "../../../components/Admin/Table/columns/exams";
import Layout from "../../../components/Layout";
import { API_URL } from "../../../config";

function AllExamsPage() {
  const [examsData, setExamsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/exam/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setExamsData(data.all_exams);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Exams</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Exams Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            <Table columnsHeading={ExamsColumn} usersData={examsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllExamsPage;
