import { useCookies } from "react-cookie";
import axios from "../api/axios";
import useAuth from "./useAuth";

export const useRefreshToken = () => {
  const auth = useAuth();

  const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  const refresh = async () => {
    const response = await axios.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    auth?.setAuth((prev) => {
      return {
        ...prev,
        user: response.data.data.user.first_name,
        permissions: response.data.data.permissions,
        roles: response.data.data.roles,
        accessToken: token,
      };
    });
    return token;
  };

  return refresh;
};
