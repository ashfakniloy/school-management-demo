import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { navLinks } from "./NavLinks";
import SubMenu from "./SubMenu";

function Sidebar({ showMenu, setShowMenu }) {
  const router = useRouter();

  const [active, setActive] = useState("");

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }

    setActive(index);
  };

  const activeClass = (id) =>
    // router.pathname === path
    id === active
      ? "bg-slate-500 hover:bg-slate-500 border-l-4 border-slate-400 pl-6"
      : "hover:bg-slate-600 ";

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
            <div className="" key={i} onClick={() => setShowMenu(true)}>
              <Link
                href={!navLink.subLinks ? navLink.link : "javscript:;"}
                passHref
              >
                {/* <div
                  className={`px-7 py-3 text-[13px] cursor-pointer border-t border-slate-600 ${activeClass(
                    navLink.link
                  )}`}
                  onClick={() => toggle(navLink.id)}
                > */}
                <div
                  className={`px-7 py-3 text-[13px] cursor-pointer border-t border-slate-600 ${activeClass(
                    navLink.id
                  )}`}
                  onClick={() => toggle(navLink.id)}
                >
                  <div className="flex items-center justify-between relative">
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
                    {navLink.subLinks && (
                      <div className="">
                        {active === navLink.id ? (
                          <FaAngleDown />
                        ) : (
                          <FaAngleRight />
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </Link>

              {active === navLink.id &&
                showMenu &&
                navLink.subLinks &&
                navLink.subLinks.map((subLink, i) => (
                  <SubMenu
                    key={i}
                    index={subLink.id}
                    subLink={subLink}
                    // activeClass={activeClass}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
