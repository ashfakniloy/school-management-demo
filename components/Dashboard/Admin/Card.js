import React from "react";
import { FaUser } from "react-icons/fa";

function Card({ title, number }) {
  return (
    <div className="">
      <div className="bg-white flex justify-between items-center px-8 py-6 gap-40 shadow-md">
        <div className="text-5xl p-4 rounded-full bg-yellow-100">
          <FaUser className="fill-slate-400" />
        </div>
        <div className="space-y-2 text-center">
          <h1 className="text-slate-600">{title}</h1>
          <h1 className="text-slate-800 font-semibold text-lg">{number}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
