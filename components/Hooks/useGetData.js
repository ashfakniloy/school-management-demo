import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../config";

function useGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);

  const { token, id } = useSelector((state) => state.auth);

  useEffect(() => {
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
    };
    getData();
  }, [setFetchedData, route, id, token]);

  return { fetchedData };
}

export default useGetData;
