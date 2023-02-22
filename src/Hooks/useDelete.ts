import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useListDelete = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const deleteListRow = async (url: string, id: any) => {
    await axios.delete(`${url}${id}`, config);
  };

  return { deleteListRow };
};
