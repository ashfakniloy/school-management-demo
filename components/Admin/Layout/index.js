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
import { getInfo } from "../../../redux/features/info/infoSlice";
import { API_URL } from "../../../config";

// Layout.getInitialProps = async () => {
//   const { token, id } = useSelector((state) => state.auth);
//   const url = `${API_URL}/data/admin/all/${id}`;

//   const res = await fetch(url, {
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   const data = await res.json();

//   return { data };
// };

function Layout({ children, data }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const { user_role } = useSelector((state) => state.auth);
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

  const navLinks = () => {
    if (user_role === "super admin") {
      return superAdmin;
    } else if (user_role === "admin") {
      return admin;
    } else {
      return superAdmin;
    }
  };

  const userRoute = user_role && user_role.split(" ").join("_");
  const userRole = user_role && user_role.split("super ").join("");

  const { fetchedData } = useGetData(`/data/${userRoute}/all`);

  useEffect(() => {
    dispatch(getInfo(fetchedData));
    if (userRole !== "admin") {
      router.push("/");
    }
  }, [dispatch, fetchedData, userRole, router]);

  // useEffect(() => {
  //   if (userRole === "admin") {
  //     setRender(true);
  //   }
  // }, [userRole]);

  // if (!userRole) {
  //   return <Loader />;
  // }

  return (
    <>
      <div className="flex">
        <Sidebar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          navLinks={navLinks()}
          // navLinks={superAdmin}
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
    </>
  );
}

export default Layout;
