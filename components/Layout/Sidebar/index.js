import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { navLinks } from "./NavLinks";
import SubMenu from "./SubMenu";

function Sidebar({ showMenu, showSubLinks, setShowSubLinks }) {
  const router = useRouter();

  // const [showDropdown, setShowDropdown] = useState(false);

  const [clicked, setClicked] = useState(false);

  const subnav = () => setShowDropdown(!showDropdown);

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
                    <div className="">
                      {">"}
                      {/* {nav.subLinks && showDropdown
                        ? ">"
                        : nav.subLinks
                        ? "<"
                        : null} */}
                    </div>

                    {/* {nav.subLinks && (
                      <span
                        className={`pl-24`}
                        onClick={() => setShowSubLinks(!showSubLinks)}
                      >
                        
                        {showSubLinks ? <FaAngleDown /> : <FaAngleRight />}
                      </span>
                    )} */}
                  </div>
                  {navLink.subLinks.map((subLink, i) => (
                    <SubMenu
                      key={i}
                      index={i}
                      subLink={subLink}
                      clicked={clicked}
                      setClicked={setClicked}
                    />
                    // <p key={i} className="flex flex-col">
                    //   {subLink.name}
                    // </p>
                  ))}
                </div>
              )}

              {/* {nav.subLinks &&
                nav.subLinks.map((subLink, i) => (
                  <SubMenu key={i} subLink={subLink} />
                ))} */}

              {/* {showSubLinks && showMenu && (
                <div className="bg-gray-600 delay-100">
                  {nav.subLinks &&
                    nav.subLinks.map((subLink, i) => (
                      <SubMenu i={i} subLink={subLink} />
                    ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
