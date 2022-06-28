import React from "react";
import { FaBars } from "react-icons/fa";

function Header({ showMenu, setShowMenu }) {
  return (
    <div className="bg-white w-full flex justify-between items-center shadow-md px-5 py-3 sticky top-0 z-10">
      <div className="ml-3 flex items-center gap-8">
        <div className="" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
        <h1 className="text-lg">Header</h1>
      </div>

      <div className="flex justify-between items-center font-semibold gap-8 ">
        <h1 className="text-lg">Username</h1>
        <button className="bg-gray-600 text-white px-4 py-2 text-sm font-semibold rounded-lg">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Header;
