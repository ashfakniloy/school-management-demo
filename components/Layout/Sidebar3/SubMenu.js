import Link from "next/link";
import { useState } from "react";

function SubMenu({ index, item, clicked, setClicked }) {
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const showSubnav = () => setShowSubMenu(!showSubMenu);

  return (
    <div
      onClick={() => toggle(index)}
      className={
        clicked === index
          ? "flex flex-col pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer"
          : "block"
      }
    >
      <Link href={item.link} passHref>
        <p className="my-3 text-xs">{item.name}</p>
      </Link>
    </div>

    // <div
    //   key={i}
    //   className={`flex flex-col  pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer}`}
    //   onClick={subLink && showSubnav}
    //   // onClick={() => toggle(i)}
    // >
    //   <Link href={subLink.link} passHref>
    //     <p className="my-3 text-xs">{subLink.name}</p>

    //     {/* {subLink && subnav
    //         ? item.iconOpened
    //         : subLink
    //         ? item.iconClosed
    //         : null} */}
    //   </Link>
    // </div>
  );
}

export default SubMenu;
