import { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
import Sidebar from "../../Layout/Sidebar";
import { teacher } from "../../Layout/Sidebar/navlinks/teacher";
import useGetData from "../../Hooks/useGetData";
import { getInfo } from "../../../redux/features/info/infoSlice";
// import { navLinks } from "./NavLinks";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { token, id, user_role } = useSelector((state) => state.auth);

  const { logo, user_name, institution_name, role } = useSelector(
    (state) => state.info
  );

  // const { role } = useSelector((state) => state.login);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  // const { fetchedData } = useGetData("/data/all");

  // useEffect(() => {
  //   dispatch(getInfo(fetchedData));
  // }, [dispatch, getInfo, fetchedData]);

  const user = user_role && user_role;

  const { fetchedData } = useGetData(`/data/${user}/all`);

  // useEffect(() => {
  //   dispatch(getAllData(fetchedData));
  //   // dispatch(allData());
  //   console.log("fetched");
  // }, []);

  // const { user_name, institution_name, role, logo } = fetchedData;

  useEffect(() => {
    dispatch(getInfo(fetchedData));
  }, [dispatch, fetchedData]);

  useEffect(() => {
    if (!token && !id) {
      // router.push("/login/admin");
      router.replace("/");
    } else {
      // setLoggedIn(true);
      console.log("logged in");
    }
  }, [token, id, router]);

  // if (!user_name) {
  //   return <Loader />;
  // }

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={teacher}
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
