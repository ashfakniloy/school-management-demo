import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { navLinks } from "./NavLinks";
import SubMenu from "./SubMenu";

function Sidebar({ showMenu, showSubLinks, setShowSubLinks }) {
  const router = useRouter();

  // const [showDropdown, setShowDropdown] = useState(false);

  // const [clicked, setClicked] = useState(false);

  const [subnav, setSubnav] = useState(false);

  console.log(subnav);

  const showSubnav = () => setSubnav(!subnav);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }

    setClicked(i);
  };

  // const subnav = () => setShowDropdown(!showDropdown);

  const activeClass = (path) =>
    router.pathname === path
      ? "bg-slate-500 hover:bg-slate-500 border-l-4 border-0 border-slate-400 pl-6"
      : "hover:bg-slate-600 border-t last:border-b border-slate-600";

  // const activeSubMenuClass = (path) =>
  //   router.pathname === path
  //     ? "bg-slate-700 hover:bg-slate-600 border-l-4 border-0 border-slate-400 pl-6"
  //     : "hover:bg-slate-500 border-t last:border-b border-slate-500";

  return (
    <div
      className={`h-screen bg-gray-700 z-20 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll overflow-x-hidden text-white ${
        showMenu ? "w-[270px]" : "w-20"
      }`}
    >
      <div className="relative">
        <div className="p-5">
          <h2
            className={`text-2xl text-white duration-300 ${
              showMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            Sidebar
          </h2>
        </div>

        <div className="mt-6">
          {navLinks.map((navLink, i) => (
            <div className="" key={i}>
              <Link href={!navLink.subLinks ? navLink.link : ""} passHref>
                <div
                  className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                    navLink.link
                  )}`}
                  onClick={navLink.subLinks && showSubnav}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xl">
                      <span>{navLink.icon}</span>
                    </div>
                    <p
                      className={`capitalize duration-300 whitespace-nowrap ${
                        showMenu ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {navLink.name}
                    </p>
                  </div>
                </div>
              </Link>

              {subnav &&
                navLink.subLinks &&
                navLink.subLinks.map((subLink, i) => (
                  <div className="my-2" key={i}>
                    {subLink.name}
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* <div className="mt-6">
          {navLinks.map((navLink, i) => (
            <div key={i}>
              {!navLink.subLinks ? (
                <Link href={navLink.link} passHref>
                  <div
                    className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                      navLink.link
                    )}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xl">
                        <span>{navLink.icon}</span>
                      </div>
                      <p
                        className={`capitalize duration-300 whitespace-nowrap ${
                          showMenu ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {navLink.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ) : (
                <div>
                  <div
                    key={i}
                    className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                      navLink.link
                    )}`}
                    // onClick={() => setClicked(!clicked)}
                    onClick={() => toggle(i)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-xl">
                        <span>{navLink.icon}</span>
                      </div>
                      <p
                        className={`capitalize duration-300 whitespace-nowrap ${
                          showMenu ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {navLink.name}
                      </p>
                    </div>
                  </div>

                  {clicked &&
                    navLink.subLinks.map((subLink, i) => (
                      <SubMenu
                        key={i}
                        index={i}
                        subLink={subLink}
                        clicked={clicked}
                        setClicked={setClicked}
                      />
                    ))}
                </div>
              )}

            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
