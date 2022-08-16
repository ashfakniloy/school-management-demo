import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import Sidebar from "../../Layout/Sidebar";
import { admin } from "../../Layout/Sidebar/navlinks/admin";
import { superAdmin } from "../../Layout/Sidebar/navlinks/superAdmin";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
// import { adminNavLinks, superAdminNavLinks } from "./NavLinks";
import useGetData from "../../Hooks/useGetData";
// import { allData, getAllData } from "../../../redux/features/auth/authSlice";
// import { API_URL } from "../../../config";
import { getInfo } from "../../../redux/features/info/infoSlice";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { token, id, user_role } = useSelector((state) => state.auth);
  // const { token, id } = useSelector((state) => state.auth);

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

  const user = user_role && user_role.split(" ").join("_");

  // console.log(user);

  const { fetchedData } = useGetData(`/data/${user}/all`);

  useEffect(() => {
    dispatch(getInfo(fetchedData));
  }, [dispatch, fetchedData]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`${API_URL}/data/super_admin/all/${id}`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const data = await res.json();

  //     if (res.ok) {
  //       console.log("info", data.data);
  //       dispatch(getInfo(data.data));
  //       // return data.data;
  //     } else {
  //       return console.log("error", data.message);
  //     }
  //   };

  //   fetchData();

  //   // dispatch(getAllData(data));
  // }, [dispatch, id, token]);

  // useEffect(() => {
  //   dispatch(getAllData(fetchedData));
  //   // dispatch(allData());
  //   console.log("fetched");
  // }, []);

  // const { user_name, institution_name, role, logo } = fetchedData;

  const navLinks = () => {
    if (role === "super admin") {
      return superAdmin;
    } else if (role === "admin") {
      return admin;
    } else {
      return superAdmin;
    }
  };

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
        navLinks={navLinks()}
        name={role}
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
