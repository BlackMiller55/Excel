import { useCookies } from "react-cookie";


export const Token = () =>{
    const [cookies] = useCookies(["token"]);

  const token = cookies.token;

  return token
}