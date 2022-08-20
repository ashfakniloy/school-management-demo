import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { API_URL } from "../../config";

function useUserGetData(route) {
  const [fetchedData, setFetchedData] = useState([]);

  const { token, id, user_role, identity_id } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const url = `${API_URL}/${user_role}/${route}/${id}/${identity_id}`;

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
  }, [setFetchedData, user_role, route, id, token, identity_id]);

  return { fetchedData };
}

export default useUserGetData;
