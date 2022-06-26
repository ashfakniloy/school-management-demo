import { useState, useEffect } from "react";
import Card from "../components/Dashboard/Admin/Card";
import Layout from "../components/Layout";
import LineChart from "../components/Dashboard/Admin/Charts/LineChart";
import BarChart from "../components/Dashboard/Admin/Charts/BarChart";
import DoughnutChart from "../components/Dashboard/Admin/Charts/DoughnutChart";
import NoticeBoard from "../components/Dashboard/Admin/NoticeBoard";

const API_URL = "http://192.168.0.20:8000/v1/data/all";

// const userDatas = [
//   {
//     title: "Students",
//     data: 150000,
//   },
//   {
//     title: "Teachers",
//     data: 200,
//   },
//   {
//     title: "Parents",
//     data: 150000,
//   },
//   {
//     title: "Earnings",
//     data: "$193000",
//   },
// ];

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
    console.log(userData);
    getData();
  }, [setUserData]);

  const { total_male, total_female } = userData;

  return (
    <Layout>
      <div className="bg-gray-100 px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          Admin Dashboard
        </h1>
        <div className="mt-8 grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card title="Students" number={userData.total_students} />
          <Card title="Teachers" number={userData.total_teachers} />
          <Card title="parents" number={userData.total_parents} />
          <Card title="Earnings" number={userData.total_expenses} />
          {/* {userData &&
            userData.map((data, i) => (
              <Card key={i} title={data.title} number={data.data} />
            ))} */}
          <div className="col-span-2">
            <LineChart />
          </div>
          <BarChart />
          <DoughnutChart male={total_male} female={total_female} />
          <div className="col-span-2">
            <NoticeBoard />
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
}

export default Home;
