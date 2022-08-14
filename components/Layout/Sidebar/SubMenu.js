import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function SubMenu({ subLink }) {
  // const [active, setActive] = useState("");

  const router = useRouter();

  const activeClass = (path) =>
    router.pathname === path
      ? // id === active
        "bg-slate-600 hover:bg-slate-500 border-l-4 border-slate-400 pl-6"
      : "hover:bg-slate-600 ";

  return (
    <div
      className={`flex flex-col pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer hover:bg-slate-600 ${activeClass(
        subLink.link
      )}}`}
    >
      <Link href={subLink.link} passHref>
        <p className="my-3 text-[13px]">{subLink.name}</p>
      </Link>
    </div>
  );
}

export default SubMenu;
