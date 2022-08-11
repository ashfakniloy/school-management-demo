import { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
// import Sidebar from "./Sidebar";
import Header from "../../Layout/Header";
import ScrollTop from "../../Layout/ScrollTop";
import Loader from "../../Layout/Loader";
import { navLinks } from "./NavLinks";
import Sidebar from "../../Layout/Sidebar";
import useGetData from "../../Hooks/useGetData";
import { allData, getAllData } from "../../../redux/features/admin/loginSlice";

function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState("");
  // const [loggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const dispatch = useDispatch();

  const { logo, user_name, institution_name, role, token, id } = useSelector(
    (state) => state.login
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
  // dispatch(getAllData(fetchedData));

  // useEffect( () => {
  //   dispatch(allData());
  // }, [dispatch]);

  // useEffect(() => {
  //   // dispatch(allData());
  //   const res = await fetch(`http://192.168.1.107:8000/v1/data/all/${schoolId}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${schoolToken}`,
  //   },
  // });

  // const data = await res.json();

  // if (res.ok) {
  //   console.log("data is", data.data);
  //   // return data.data;
  // } else {
  //   return console.log("error", data.message);
  // }
  // }, [dispatch]);

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
        dispatch(getAllData(data.data));
        // return data.data;
      } else {
        return console.log("error", data.message);
      }
    };

    fetchData();

    // dispatch(getAllData(data));
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAllData(fetchedData));
  //   // dispatch(allData());
  //   console.log("fetched");
  // }, []);

  // const { user_name, institution_name, role, logo } = fetchedData;

  // useEffect(() => {
  //   if (!user) {
  //     router.push("/login/admin");
  //   } else {
  //     setLoggedIn(true);
  //   }
  // }, [user, router]);

  // if (!loggedIn) {
  //   return <Loader />;
  // }

  return (
    <div className="flex">
      <Sidebar
        showMenu={showMenu}
        setShowMenu={setShowMenu}
        navLinks={navLinks}
        name="admin"
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
