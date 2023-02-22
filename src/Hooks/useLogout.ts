import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import axios from "../api/axios";

export const useLogout = () => {
  const [cookies, removeCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const auth = useAuth();

  const token = cookies.token;

  const logout = () => {
    const response = axios.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    auth?.setAuth(() => {
      return {
        user: "",
        permissions: "",
        accessToken: "",
        roles: "",
      };
    });

    removeCookie("token", null);

    navigate("/login", { replace: true });
  };

  return logout;
};
