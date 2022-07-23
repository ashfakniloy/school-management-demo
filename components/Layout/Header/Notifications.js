import { useState, useRef, useEffect } from "react";
import { FaRegBell } from "react-icons/fa";
import { notificationsData } from "./notificationsData";

function Notifications() {
  const [showDropdown, setShowDropdown] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  const clickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowDropdown(false);
  };

  return (
    <div ref={node} className="relative cursor-pointer">
      <div className="" onClick={() => setShowDropdown(!showDropdown)}>
        <FaRegBell className=" text-xl text-teal-700" />
        <div className="absolute -top-5 -right-4 bg-red-500 border-2 border-white text-sm text-white rounded-full p-[2px]  w-7 text-center  shadow-lg">
          {notificationsData.length}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[400px] font-light top-[44px] right-0 bg-white shadow-md cursor-pointer">
          <p className="px-1 py-4  bg-red-500 text-white transition duration-300 text-center">
            Notifications
          </p>

          <div className="divide-y">
            {notificationsData.map((notification) => (
              <div
                key={notification.id}
                className="px-7 py-5 space-y-2 hover:bg-slate-100 transition duration-300"
              >
                <h4 className="text-sm font-semibold ">{notification.name}</h4>
                <p className="text-xs font-light">{notification.time} ago</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Notifications;
