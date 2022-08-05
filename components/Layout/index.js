import { useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import { adminLinks } from "../Admin/Sidebar/adminLinks";
// import { teacherLinks } from "../Teacher/Sidebar/teacherLinks";
import ScrollTop from "./ScrollTop";
import Loader from "./Loader";

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

  // const navLinks = () => {
  //   if (role === "admin") {
  //     return adminLinks;
  //   }
  //   if (role === "teacher") {
  //     return teacherLinks;
  //   }
  // };

  return (
    <div className="flex">
      {role && (
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          // navLinks={navLinks()}
        />
      )}

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
