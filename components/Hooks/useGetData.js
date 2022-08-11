import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import { API_URL, token, schoolId } from "../../config";
import { API_URL } from "../../config";

function useGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);

  // const url = API_URL + route;

  // const user = useSelector((state) => state.login);
  const { token, id } = useSelector((state) => state.login);

  useEffect(() => {
    // const url = `${API_URL}${route}/${user.id}`;
    const url = `${API_URL}${route}/${id}`;

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
        console.log("all data", data.data);
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
  }, [setFetchedData]);

  return { fetchedData };
}

export default useGetData;
