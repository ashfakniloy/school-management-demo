import { useState } from "react";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  // const [showSubLinks, setShowSubLinks] = useState(false);

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        // showSubLinks={showSubLinks}
        // setShowSubLinks={setShowSubLinks}
      />

      <div className="flex-1 min-h-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />

        {children}

        <ScrollTop />
      </div>
    </div>
  );
}

export default Layout;
