import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { navLinks } from "./NavLinks";
import "react-pro-sidebar/dist/css/styles.css";

function Sidebar4({ showMenu }) {
  return (
    <div
      className={`h-screen bg-gray-700 z-20 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll overflow-x-hidden text-white capitalize ${
        showMenu ? "w-[270px]" : "w-[65px]"
      }`}
    >
      <ProSidebar>
        {navLinks.map((navLink, i) => (
          <Menu key={i} iconShape="square">
            {!navLink.subLinks ? (
              <MenuItem icon={navLink.icon}>{navLink.name}</MenuItem>
            ) : (
              <SubMenu title={navLink.name} icon={navLink.icon}>
                {navLink.subLinks.map((subLink, i) => (
                  <MenuItem key={i}>{subLink.name}</MenuItem>
                ))}
              </SubMenu>
            )}
          </Menu>
        ))}
      </ProSidebar>
    </div>
  );
}

export default Sidebar4;
