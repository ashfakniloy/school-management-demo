import { useEffect, useState } from "react";
import Table from "../../components/Dashboard/Admin/Table";
import { HostelsColumn } from "../../components/Dashboard/Admin/Table/columns/hostels";
import Layout from "../../components/Layout";

const API_URL = "http://192.168.0.20:8000/v1/hostel/all";

function AllHostelRoomsPage() {
  const [hostelsData, setHostelsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setHostelsData(data.hostel);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="mx-5 my-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Hostel</h1>
        <div className="mt-20 bg-white py-10 shadow-md">
          <h1 className="px-10 text-xl font-semibold text-slate-800">
            Hostel Room Lists
          </h1>
          <div className="mt-10 px-3 flex flex-col items-center">
            <Table columnsHeading={HostelsColumn} usersData={hostelsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AllHostelRoomsPage;
