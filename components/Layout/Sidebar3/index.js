import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { navLinks } from "./NavLinks";
import SubMenu from "./SubMenu";

function Sidebar3({ showMenu }) {
  const router = useRouter();

  const [showSublinks, setShowSublinks] = useState(false);

  console.log(showSublinks);

  const activeClass = (path) =>
    router.pathname === path
      ? "bg-slate-500 hover:bg-slate-500 border-l-4 border-0 border-slate-400 pl-6"
      : "hover:bg-slate-600 border-t last:border-b border-slate-600";

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
          {navLinks.map((nav, i) => (
            <div key={i} onClick={() => setShowSublinks(!showSublinks)}>
              <Link href={nav.subLinks ? "" : nav.link} passHref>
                <div
                  className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                    nav.link
                  )}`}
                >
                  {nav.name}
                </div>
              </Link>

              {/* {nav.subLinks &&
                nav.subLinks.map((item) => (
                  <SubMenu
                    key={i}
                    index={i}
                    item={item}
                    clicekd={clicked}
                    setClicked={setClicked}
                  />
                ))} */}
            </div>
          ))}

          <div className={!showSublinks ? "block" : "hidden"}>
            <p className="">link</p>
            <p className="">link</p>
            <p className="">link</p>
            <p className="">link</p>
          </div>
        </div>

        {/* <ul className="mt-6">
          {navLinks.map((nav, i) => (
            <div key={i} onClick={nav.subLinks && subnav}>
              <Link href={nav.subLinks ? "" : nav.link} passHref>
                <li
                  className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                    nav.link
                  )}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xl">
                      <span>{nav.icon}</span>
                    </div>
                    <p
                      className={`capitalize duration-300 whitespace-nowrap ${
                        showMenu ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {nav.name}
                    </p>
                    <div className="">
                      {nav.subLinks && showDropdown
                        ? ">"
                        : nav.subLinks
                        ? "<"
                        : null}
                    </div>
                    
                  </div>
                </li>
              </Link>

              {showDropdown &&
                nav.subLinks &&
                nav.subLinks.map((subLink, i) => (
                  <div
                    key={i}
                    className={`flex flex-col  pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer}`}
                 
                  >
                    <Link href={subLink.link} passHref>
                      <p className="my-3 text-xs">{subLink.name}</p>
                    </Link>
                  </div>
                ))}
            </div>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Sidebar3;
