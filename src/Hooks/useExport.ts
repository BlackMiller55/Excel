import { useCookies } from "react-cookie";
import axios from "../api/axios";

export const useExport = () => {
  const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  const exportFile = async (url: string, fileName: string) => {
    const response = await axios.get(`${url}export`, {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${token}`,
        accept: "application/csv",
        "Content-Type": `application/csv`,
      },
    });

    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(response.data);
    link.download = `${fileName}.csv`;
    link.click();
  };

  return exportFile;
};
