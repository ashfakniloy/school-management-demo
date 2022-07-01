import { useState } from "react";
import Router from "next/router";
import Header from "./Header";
import ScrollTop from "./ScrollTop";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

// import Sidebar2 from "./Sidebar2";
// import Sidebar3 from "./Sidebar3";
// import Sidebar4 from "./Sidebar4";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  // const [showSubLinks, setShowSubLinks] = useState(false);
  // const [subnav, setSubnav] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        // showSubLinks={showSubLinks}
        // setShowSubLinks={setShowSubLinks}
      />

      {/* <Sidebar2 showMenu={showMenu} /> */}

      {/* <Sidebar3 showMenu={showMenu} /> */}
      {/* <Sidebar4 showMenu={showMenu} /> */}

      <div className="flex-1 min-h-screen">
        <Header showMenu={showMenu} setShowMenu={setShowMenu} />

        {loading && <Loader />}

        {children}

        <ScrollTop />
      </div>
    </div>
  );
}

export default Layout;
