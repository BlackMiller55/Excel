import { PermissionRoutes } from "../../Routes/PermissionRoutes";
import { ListButtons } from "../ListButtons/ListButtons";

export const NavBar = () => {


  const button = PermissionRoutes();

  return (
    <>
      <div className="bg-primary w-full p-4 sm:hidden md:hidden lg:flex px-10 ">
      <ListButtons ListProps={button.buttonPermissions}/>
      </div>
    </>
  );
};
