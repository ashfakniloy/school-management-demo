import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import SubMenu from "./SubMenu";

function Sidebar({ showMenu, setShowMenu, navLinks, name }) {
  const router = useRouter();

  const [active, setActive] = useState("");

  const toggle = (index) => {
    if (active === index) {
      return setActive(null);
    }

    setActive(index);
  };

  const activeClass = (path) =>
    router.pathname === path
      ? "bg-slate-500 hover:bg-slate-500 border-l-4 border-slate-400 pl-6"
      : "hover:bg-slate-600";

  return (
    <div
      className={`h-screen bg-gray-700 z-20 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll overflow-x-hidden text-white ${
        showMenu ? "w-[270px]" : "w-20"
      }`}
    >
      <div className="relative">
        <div className="py-5 px-10">
          <h2
            className={`text-2xl text-white duration-300 capitalize ${
              showMenu ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* {name} */}
            Logo
          </h2>
        </div>

        <div className="mt-6">
          {navLinks &&
            navLinks.map((navLink, i) => (
              <div className="" key={i} onClick={() => setShowMenu(true)}>
                {!navLink.subLinks ? (
                  <Link href={navLink.link} passHref>
                    <div className="border-t border-slate-600">
                      <div
                        className={`px-7 py-3 text-sm cursor-pointer ${activeClass(
                          navLink.link
                        )}`}
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
                        </div>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div className="border-t border-slate-600">
                    <div
                      className={`px-7 py-3 text-sm cursor-pointer ${activeClass(
                        navLink.link
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

                        <div className="">
                          {active === navLink.id ? (
                            <FaAngleDown />
                          ) : (
                            <FaAngleRight />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {active === navLink.id &&
                  showMenu &&
                  navLink.subLinks.map((subLink, i) => (
                    <SubMenu key={i} index={subLink.id} subLink={subLink} />
                  ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
