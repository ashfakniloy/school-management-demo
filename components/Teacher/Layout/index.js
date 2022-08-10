import { useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
import Sidebar from "../../Layout/Sidebar";
import { navLinks } from "./NavLinks";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  // const router = useRouter();

  const { role } = useSelector((state) => state.login);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={navLinks}
        name="teacher"
      />

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
