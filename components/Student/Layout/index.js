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
import useGetData from "../../Hooks/useGetData";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { token, id, user_role } = useSelector((state) => state.auth);

  const { logo, user_name, institution_name, role } = useSelector(
    (state) => state.info
  );

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  // const user = user_role && user_role;

  // const { fetchedData } = useGetData(`/data/${user_role}/all`);

  //for authorization
  // useEffect(() => {
  //     dispatch(getInfo(fetchedData));
  //   if (user_role !== "student") {
  //     router.push("/");
  //   }
  // }, [dispatch, fetchData, user_role, router]);

  const userRole = user_role && user_role;

  useEffect(() => {
    if (userRole !== "student") {
      router.push("/");
    }
  }, [userRole, router]);

  // if (!user_name) {
  //   return <Loader />;
  // }

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
