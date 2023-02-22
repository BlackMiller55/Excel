import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useFetchAll = () => {
  const [data, setData] = useState<any>();

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  const getData = async (URL: string) => {
    const res = await axios.get(`${URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    setData(res.data.data);
  };
  return { data, getData };
};
