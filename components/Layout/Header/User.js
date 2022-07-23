import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
import { GoTriangleDown } from "react-icons/go";
import useDropdowm from "../../Hooks/useDropdown";

function User() {
  const [showDropdown, setShowDropdown, node] = useDropdowm();

  return (
    <div ref={node} className="relative cursor-pointer">
      <div
        className="flex justify-between items-center px-3 py-2 gap-3 cursor-pointer rounded hover:bg-slate-200 transition duration-300"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <div className="flex text-end gap-2">
          <div className="">
            <h4 className="text-sm">Username</h4>
            <p className="text-xs font-extralight">Admin</p>
          </div>

          <span className="pt-1 text-sm">
            <GoTriangleDown
              className={showDropdown ? "text-blue-700" : "text-emerald-500"}
            />
          </span>
        </div>
        <div className="">
          <FaUserCircle className="fill-emerald-500 text-3xl" />
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[250px] font-light top-[60px] right-1 bg-white shadow-md cursor-pointer">
          <p className="px-1 py-4 bg-emerald-500 text-white transition duration-300 text-center">
            Username
          </p>

          <div className="text-sm divide-y">
            <p className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300">
              <FaRegUserCircle />
              My Profile
            </p>
            <p className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300">
              <AiOutlineSetting />
              Account Settings
            </p>
            <p className="px-5 py-3 flex items-center gap-2 hover:bg-slate-100 transition duration-300">
              <AiOutlineLogout />
              Log Out
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
