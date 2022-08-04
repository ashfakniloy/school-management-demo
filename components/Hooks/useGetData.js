import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { API_URL, token, schoolId } from "../../config";
import { API_URL } from "../../config";

function useGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);
  const { token, schoolId } = useSelector((state) => state.login);

  // const url = API_URL + route;
  const url = `${API_URL}${route}/${schoolId}`;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (res.ok) {
        setFetchedData(data.data);
        console.log("success", data.data);
      } else {
        console.log("error", data.data);
      }

      // setFetchedData(data.hostel);

      // if (res.ok) {
      //   setFetchedData(data.hostel);
      // } else {
      //   console.log("error");
      // }
    };
    getData();
  }, [url, setFetchedData, token]);

  return { fetchedData };
}

export default useGetData;
