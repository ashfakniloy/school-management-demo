import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaArrowLeft, FaArrowRight, FaUserCircle } from "react-icons/fa";

const menus = [
  {
    name: "dashboard",
    link: "/",
  },
  {
    name: "students",
    link: "/students",
  },
  {
    name: "teachers",
    link: "/teachers",
  },
  {
    name: "parents",
    link: "/parents",
  },
  {
    name: "library",
    link: "/library",
  },
  {
    name: "accounts",
    link: "/accounts",
  },
  {
    name: "class",
    link: "/class",
  },
  {
    name: "subject",
    link: "/subject",
  },
  {
    name: "class Routine",
    link: "/class-routine",
  },
  {
    name: "attendance",
    link: "/attendance",
  },
  {
    name: "exam",
    link: "/exam",
  },
  {
    name: "transpoart",
    link: "/transpoart",
  },
  {
    name: "hotel",
    link: "/hotel",
  },
  {
    name: "notice",
    link: "/notice",
  },
  {
    name: "message",
    link: "/message",
  },
  {
    name: "account",
    link: "/account",
  },
];

function Sidebar({ showMenu }) {
  // const [showMenu, setShowMenu] = useState(true);
  const router = useRouter();

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

        <ul className="mt-6">
          {menus.map((menu, i) => (
            <Link key={i} href={menu.link} passHref>
              <li
                className={`px-7 py-3 text-[13px] cursor-pointer ${activeClass(
                  menu.link
                )}`}
              >
                <div className="flex items-center gap-4 ">
                  <div className="text-2xl">
                    <FaUserCircle className="fill-yellow-500" />
                  </div>
                  <p
                    className={`capitalize duration-300 whitespace-nowrap ${
                      showMenu ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {menu.name}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
        {/* <div
          className="absolute top-5 -right-3 bg-yellow-300 text-gray-800 p-2 text-sm border border-slate-600 rounded-full"
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu ? <FaArrowLeft /> : <FaArrowRight />}
        </div> */}
      </div>
    </div>
  );
}

export default Sidebar;
