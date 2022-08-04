import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Cards from "../../components/Admin/Dashboard/Cards";
import LineChart from "../../components/Admin/Dashboard/Charts/LineChart";
import BarChart from "../../components/Admin/Dashboard/Charts/BarChart";
import DoughnutChart from "../../components/Admin/Dashboard/Charts/DoughnutChart";
import NoticeBoard from "../../components/Admin/NoticeBoard";
import { API_URL, token, schoolId } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../redux/features/admin/usersSlice";
import { useRouter } from "next/router";
import useGetData from "../../components/Hooks/useGetData";

// const API_URL = "http://192.168.0.20:8000/v1/data/all";

function AdminPage() {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  const reduxUsers = useSelector((state) => state.users.users);
  // const { userId } = useSelector((state) => state.login);

  console.log(schoolId);
  // const id = localStorage.getItem("userId");

  const router = useRouter();

  const { fetchedData } = useGetData("/data/all");

  // useEffect(() => {
  //   // const token = localStorage.getItem("school token");

  //   // if (!userId) {
  //   //   router.push("/login/admin");
  //   // }

  //   const getData = async () => {
  //     const res = await fetch(`${API_URL}/data/all/${schoolId}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = await res.json();

  //     if (res.ok) {
  //       setUserData(data.data);
  //       console.log("success", data.data);
  //     } else {
  //       console.log("error", data.data);
  //     }

  //     // console.log(data);
  //   };
  //   getData();
  // }, [setUserData]);
  // }, [setUserData, router]);

  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  // const {
  //   total_students,
  //   total_teachers,
  //   total_parents,
  //   total_earnings,
  //   total_male,
  //   total_female,
  //   notice,
  // } = userData;

  const {
    total_students,
    total_teachers,
    total_parents,
    total_earnings,
    total_male,
    total_female,
    notice,
  } = fetchedData;

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
            <NoticeBoard notices={notice} />
          </div>
          <div className="col-span-2 bg-white p-8">
            <h4 className="text-2xl">Redux test</h4>
            <div className="mt-5">
              {/* <button
                className="bg-red-500 text-sm text-white px-4 py-2 rounded active:bg-red-700"
                onClick={() => dispatch(getUsers())}
              >
                Get Data
              </button> */}
              <div className="mt-4">
                {reduxUsers &&
                  reduxUsers.map((user, i) => <p key={i}>{user.name}</p>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdminPage;
