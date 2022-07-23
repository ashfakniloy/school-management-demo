import { FaBars } from "react-icons/fa";

import Messages from "./Messages";
import Notifications from "./Notifications";
import User from "./User";

function Header({ showMenu, setShowMenu }) {
  return (
    <div className="bg-white w-full flex justify-between items-center shadow-md px-5 py-2 sticky top-0 z-10">
      <div className="ml-3 flex items-center gap-8">
        <div className="text-gray-700" onClick={() => setShowMenu(!showMenu)}>
          <FaBars />
        </div>
      </div>

      <div className="flex justify-between items-center font-semibold gap-7 relative">
        <div className="flex gap-7">
          <Messages />
          <Notifications />
        </div>
        <User />
      </div>
    </div>
  );
}

export default Header;
