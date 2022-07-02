import { useState, useEffect } from "react";
import Cards from "../components/Dashboard/Admin/Cards";
import Layout from "../components/Layout";
import LineChart from "../components/Dashboard/Admin/Charts/LineChart";
import BarChart from "../components/Dashboard/Admin/Charts/BarChart";
import DoughnutChart from "../components/Dashboard/Admin/Charts/DoughnutChart";
import NoticeBoard from "../components/Dashboard/Admin/NoticeBoard";

const API_URL = "http://192.168.0.20:8000/v1/data/all";

function Home() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserData(data);
    };
    getData();
  }, [setUserData]);

  const {
    total_students,
    total_teachers,
    total_parents,
    total_earnings,
    total_male,
    total_female,
  } = userData;

  // const totalCounts = [
  //   {
  //     title: "students",
  //     count: userData.total_students,
  //   },
  //   {
  //     title: "teachers",
  //     count: userData.total_teachers,
  //   },
  //   {
  //     title: "parents",
  //     count: userData.total_parents,
  //   },
  //   {
  //     title: "earnings",
  //     count: userData.total_earnings,
  //   },
  // ];

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <Cards
            students={total_students}
            teachers={total_teachers}
            parents={total_parents}
            earnings={total_earnings}
          />
          <div className="col-span-2">
            <LineChart />
          </div>
          <BarChart />
          <DoughnutChart male={total_male} female={total_female} />
          <div className="col-span-2">
            <NoticeBoard notices={userData.notice} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
