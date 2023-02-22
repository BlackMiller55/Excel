import { useLogout } from "../../Hooks/useLogout";
import { HiMenu, HiOutlineLogout } from "react-icons/hi";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { GenericDrawer } from "../Drawer/GenericDrawer";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

export const Header = () => {
  const logout = useLogout();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <header className="bg-primary flex w-full p-4 justify-between items-center">
        <div className="sm:flex ">
          <IconButton
            aria-label="logout"
            variant="ghost"
            color="white"
            size="xs"
            fontSize="1.5rem"
            icon={<HiMenu />}
            onClick={onOpen}
          />
        </div>

        <div className="text-secondary hover:no-underline">
          <Link as={RouterLink} to="/" className=" hover:no-underline focus:no no text-2xl">
          <img src="/logoSol.png" className="max-h-12"/>
        </Link>
        </div>

        

        <IconButton
          aria-label="logout"
          variant="ghost"
          color="white"
          size="xs"
          fontSize="1.5rem"
          icon={<HiOutlineLogout />}
          onClick={() => logout()}
        />
      </header>
      <GenericDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
};
