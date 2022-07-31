import { useEffect, useState } from "react";
import Table from "../../../components/Admin/Table";
import { FeesColumn } from "../../../components/Admin/Table/columns/fees";
import Layout from "../../../components/Layout";
import { API_URL } from "../../../config";

function AllExpensesPage() {
  const [feesData, setFeesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/fee/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setFeesData(data.all_fees);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Acccounting</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            All Fees Data
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            <Table columnsHeading={FeesColumn} usersData={feesData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllExpensesPage;
