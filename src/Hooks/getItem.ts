import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useGetItem = () => {
  const [cookies] = useCookies(["token"]);
  const [item, setItem] = useState<{}[]>();

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const getItembyID = async (URL: string, id: React.Key) => {
    await axios.get(`${URL}${id}`, config).then((res) => {
      setItem(res.data.data);
    });
  };

  return { item, getItembyID };
};
