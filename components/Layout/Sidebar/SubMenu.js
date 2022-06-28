import Link from "next/link";

function SubMenu({ subLink, activeClass }) {
  return (
    <div
      className={`flex flex-col pl-20 capitalize duration-300 whitespace-nowrap cursor-pointer hover:bg-slate-600 ${activeClass(
        subLink.link
      )}}`}
    >
      <Link href={subLink.link} passHref>
        <p className="my-3 text-xs">{subLink.name}</p>
      </Link>
    </div>
  );
}

export default SubMenu;
