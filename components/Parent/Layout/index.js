import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
import Sidebar from "../../Layout/Sidebar";
import { parent } from "../../Layout/Sidebar/navlinks/parent";
import { getInfo } from "../../../redux/features/info/infoSlice";
import useUserGetData from "../../Hooks/useUserGetData";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const { user_role } = useSelector((state) => state.auth);
  const { logo, photo, user_name, institution_name, role } = useSelector(
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

  const { fetchedData } = useUserGetData("personal/data");

  useEffect(() => {
    fetchedData && dispatch(getInfo(fetchedData));
    if (user_role !== "parent") {
      router.push("/");
    }
  }, [dispatch, fetchedData, user_role, router]);

  // const user = user_role && user_role;

  // const { fetchedData } = useGetData(`/data/${user_role}/all`);

  //for authorization
  // useEffect(() => {
  //   //   dispatch(getInfo(fetchedData));
  //   if (user_role !== "parent") {
  //     router.push("/");
  //   }
  // }, [dispatch, fetchData, user_role, router]);

  // if (!user_name) {
  //   return <Loader />;
  // }

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={parent}
        name="parent"
      />

      <div className="flex-1 min-h-screen">
        <Header
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          logo={logo}
          photo={photo}
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
