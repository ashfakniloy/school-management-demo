import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { ExamsColumn } from "../../../components/Admin/Table/columns/exams";
import Layout from "../../../components/Admin/Layout";
import { API_URL } from "../../../config";
import useGetData from "../../../components/Hooks/useGetData";

function AllExamsPage() {
  const { fetchedData } = useGetData("/exam/all");

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Exams</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Exams Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            {fetchedData && (
              <Table columnsHeading={ExamsColumn} usersData={fetchedData} />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllExamsPage;
