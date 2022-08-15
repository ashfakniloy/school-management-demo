import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { institutionName } from "../../../config";
import Messages from "./Messages";
import Notifications from "./Notifications";
import User from "./User";

function Header({
  showMenu,
  setShowMenu,
  logo,
  userName,
  institutionName,
  role,
}) {
  // const { institutionName, username } = useSelector((state) => state.login);

  return (
    <div className=" bg-white w-full  flex justify-between items-center shadow-md px-5 py-2 sticky top-0 z-10">
      <div className="ml-3 flex items-center gap-10">
        <div
          className="text-gray-700 text-lg"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars />
        </div>

        <div className="">
          {/* <h2 className="text-xl font-semibold">{institutionName}</h2> */}
          <h2 className="text-xl font-semibold text-cyan-600">
            {institutionName}
          </h2>
        </div>
      </div>

      <div className="flex justify-between items-center font-semibold gap-7 relative">
        <div className="flex gap-7">
          <Messages />
          <Notifications />
        </div>
        <User logo={logo} userName={userName} role={role} />
      </div>
    </div>
  );
}

export default Header;
