import { useState, useRef, useEffect } from "react";
import { FaRegEnvelope, FaRegUserCircle } from "react-icons/fa";
import { messagesData } from "./messagesData";

function Messages() {
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
        <FaRegEnvelope
          className={`text-xl ${
            showDropdown ? "text-blue-700" : "text-teal-700"
          }`}
        />
        <div className="absolute -top-5 -right-4 bg-teal-500 border-2 border-white text-sm text-white rounded-full p-[2px]  w-7 text-center  shadow-lg">
          {messagesData.length}
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[400px] font-light  top-[44px] right-0 bg-white shadow-md cursor-pointer">
          <p className="px-1 py-4  bg-teal-500 text-white transition duration-300 text-center">
            Messages
          </p>

          <div className="divide-y overflow-y-scroll h-[324px]">
            {messagesData.map((message) => (
              <div
                key={message.id}
                className="flex gap-3 p-5 hover:bg-slate-100 transition duration-300"
              >
                <div className="">
                  <FaRegUserCircle className="fill-teal-700 text-3xl" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-semibold ">{message.name}</h4>
                    <p className="text-xs font-light">{message.time}</p>
                  </div>
                  <div className="text-[13px]">
                    <p className="">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Messages;
