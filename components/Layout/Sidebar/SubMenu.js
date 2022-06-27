import Link from "next/link";
import { useState } from "react";

function SubMenu({
  i,
  subLink,
  // showSubLinks,
  // setShowSubLinks,
  // showMenu,
  // activeClass,
}) {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const showSubnav = () => setShowSubMenu(!showSubMenu);

  return (
    <div
      key={i}
      className={`flex flex-col  pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer}`}
      onClick={subLink && showSubnav}
      // onClick={() => toggle(i)}
    >
      <Link href={subLink.link} passHref>
        <p className="my-3 text-xs">{subLink.name}</p>

        {/* {subLink && subnav
            ? item.iconOpened
            : subLink
            ? item.iconClosed
            : null} */}
      </Link>
    </div>
  );
}

export default SubMenu;
