import { useEffect, useState } from "react";
import StudentsTable from "../../components/Dashboard/Admin/Table/Students";
import Layout from "../../components/Layout";

const API_URL = "http://192.168.0.20:8000/v1/student/all";

function AdmissionFormPage() {
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log("students", data.data);
      setStudentsData(data.data);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="px-5 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Students</h1>
        <div className="mt-8">
          <div className="mt-14 bg-white py-10 shadow-md">
            <h1 className="px-10 text-xl font-semibold text-slate-800">
              All Students Data
            </h1>
            <div className="mt-10 px-3 flex flex-col items-center">
              <StudentsTable studentsData={studentsData} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AdmissionFormPage;
