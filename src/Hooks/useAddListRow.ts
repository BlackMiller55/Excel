import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useAddListRow = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const addRow = async (data: any, URL: string) => {
    await axios.post(`${URL}`, data, config);
  };

  return addRow;
};
