import { useState } from "react";
import Layout from "../../../components/Admin/Layout";

function StudentLeavePage() {
  const [accepted, setAccepted] = useState(true);
  const [pending, setPending] = useState(false);
  const [rejected, setRejected] = useState(false);

  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">Student Leave</h1>
        <div className="mt-14 bg-white p-10 shadow-md">
          <h1 className="text-xl font-semibold text-slate-800">Leave</h1>
          <div className="p-2 flex justify-center items-center">
            <div className="flex border cursor-pointer divide-x-2">
              <div
                className={`px-8 py-2 hover:bg-slate-200 ${
                  accepted && "bg-slate-200"
                }`}
                onClick={() => {
                  setAccepted(true);
                  setPending(false);
                  setRejected(false);
                }}
              >
                <p>Accecpted</p>
              </div>
              <div
                className={`px-8 py-2 hover:bg-slate-200 ${
                  pending && "bg-slate-200"
                }`}
                onClick={() => {
                  setAccepted(false);
                  setPending(true);
                  setRejected(false);
                }}
              >
                <p>Pending</p>
              </div>
              <div
                className={`px-8 py-2 hover:bg-slate-200 ${
                  rejected && "bg-slate-200"
                }`}
                onClick={() => {
                  setAccepted(false);
                  setPending(false);
                  setRejected(true);
                }}
              >
                <p>Rejected</p>
              </div>
            </div>
          </div>

          {accepted && (
            <div className="bg-slate-100 p-5">
              <h3 className="text-lg">Accepted Leave</h3>
              <div className="p-5">
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
              </div>
            </div>
          )}

          {pending && (
            <div className="bg-slate-100 p-5">
              <h3 className="text-lg">Pending Leave</h3>
              <div className="p-5">
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
              </div>
            </div>
          )}

          {rejected && (
            <div className="bg-slate-100 p-5">
              <h3 className="text-lg">Rejected Leave</h3>
              <div className="p-5">
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
                <p>leave 1</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default StudentLeavePage;
