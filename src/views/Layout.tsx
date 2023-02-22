import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header/Header";
import { NavBar } from "../Components/NavBar/NavBar";
import useAuth from "../Hooks/useAuth";

export const Layout = () => {
  const auth = useAuth();

  return (
    <>
      {auth.auth?.user && (
  
          <Header /> 
        
      )}
      <div className="bg-secondary h-full">
        <Outlet />
      </div>
    </>
  );
};
