import { useState, useEffect } from "react";
import NoticeBoard from "../../../components/Admin/NoticeBoard";
import Layout from "../../../components/Layout";
import { API_URL } from "../../../config";

function NoticesPage() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}/notice/all`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setNotices(data.notice);
    };
    getData();
  }, [setNotices]);

  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Notice</h1>
        <div className="mt-8">
          <NoticeBoard notices={notices} />
        </div>
      </div>
    </Layout>
  );
}

export default NoticesPage;
