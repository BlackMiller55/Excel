import { Drawer, Menu } from "antd";
import { useNavigate } from "react-router-dom";

interface DProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NavDrawer = (props: DProps) => {
  const { isOpen, onClose } = props;
  const navigate = useNavigate();

  const items = [
    {
      label: "Home",
      key: "manage-equipment",
      onClick: () => (navigate("/"), onClose()),
    },
    {
      label: "Admin Pacients",
      key: "pacients",
      onClick: () => (navigate("/pacients"), onClose()),
    },
  ];

  return (
    <>
      <Drawer
        title={null}
        placement="left"
        closable={false}
        onClose={onClose}
        open={isOpen}
        className="w-full flex"
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          className="flex-auto w-full text-2xl font-thin mt-4 px-4 bg-opacity-0"
        />
      </Drawer>
    </>
  );
};
