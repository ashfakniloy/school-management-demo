import Link from "next/link";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function SubMenu({ index, subLink, clicked, setClicked }) {
  // const [showSubMenu, setShowSubMenu] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  // const showSubnav = () => setShowSubMenu(!showSubMenu);

  return (
    <div
      key={index}
      onClick={() => toggle(index)}
      className={`flex flex-col  pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer}`}
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
