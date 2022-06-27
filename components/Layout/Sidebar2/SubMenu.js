import Link from "next/link";
import { useState } from "react";

function SubMenu({ item, showMenu }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <div
      className={`flex flex-col  pl-14 capitalize duration-300 whitespace-nowrap cursor-pointer}`}
      onClick={item.subLinks && showSubnav}
    >
      <Link href={item.subLinks ? "#" : item.link} passHref>
        <div className="flex gap-10 items-center">
          <div className="flex gap-2 items-center">
            <div className="text-xl">
              <span>{item.icon}</span>
            </div>
            <p className="my-3 text-sm">{item.name}</p>
          </div>
          <div>
            {item.subLinks && subnav ? ">" : item.subLinks ? "<" : null}
          </div>
        </div>

        {/* {subLink && subnav
            ? item.iconOpened
            : subLink
            ? item.iconClosed
            : null} */}
      </Link>

      {subnav &&
        showMenu &&
        item.subLinks.map((item, index) => {
          return (
            <div className="ml-4 my-3">
              <Link href={item.link} key={index}>
                <p className="text-sm">{item.name}</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default SubMenu;
