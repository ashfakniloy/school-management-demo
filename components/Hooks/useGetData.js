import { useState, useEffect } from "react";
import { API_URL } from "../../config";

function useGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`${API_URL}${route}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      setFetchedData(data.hostel);
    };
    getData();
  }, [route]);

  return [fetchedData];
}

export default useGetData;
