import { useState, useEffect } from "react";
import { API_URL } from "../../config";

function useGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);

  const url = API_URL + route;

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setFetchedData(data.hostel);

      // if (res.ok) {
      //   setFetchedData(data.hostel);
      // } else {
      //   console.log("error");
      // }
    };
    getData();
  }, [url]);

  return { fetchedData };
}

export default useGetData;
