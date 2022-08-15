import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
// import { navLinks } from "./NavLinks";
import Sidebar from "../../Layout/Sidebar";
import { student } from "../../Layout/Sidebar/navlinks/student";
import { getInfo } from "../../../redux/features/info/infoSlice";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  // const router = useRouter();

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  const dispatch = useDispatch();

  const { token, id } = useSelector((state) => state.auth);

  const { logo, user_name, institution_name, role } = useSelector(
    (state) => state.info
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://192.168.1.107:8000/v1/data/all/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (res.ok) {
        console.log("data is", data.data);
        dispatch(getInfo(data.data));
        // return data.data;
      } else {
        return console.log("error", data.message);
      }
    };

    fetchData();

    // dispatch(getAllData(data));
  }, [dispatch, id, token]);

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={student}
        name="student"
      />

      <div className="flex-1 min-h-screen">
        <Header
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          logo={logo}
          userName={user_name}
          institutionName={institution_name}
          role={role}
        />

        {loading && <Loader />}

        {children}

        <ScrollTop />
      </div>
    </div>
  );
}

export default Layout;
