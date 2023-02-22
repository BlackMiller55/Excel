import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useListUpdate = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const updateListRow = async (values: any, url: string, id: any) => {
    await axios.put(`${url}${id}`, values, config);
  };

  return updateListRow;
};
