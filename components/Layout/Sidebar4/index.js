// import Link from "next/link";
// import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
// import { navLinks } from "./NavLinks";
// // import "react-pro-sidebar/dist/css/styles.css";

// function Sidebar4({ showMenu }) {
//   return (
//     <div
//       className={`h-screen bg-gray-700 z-20 duration-300 top-0 bottom-0 sticky sidebar overflow-y-scroll overflow-x-hidden text-white capitalize ${
//         showMenu ? "w-[270px]" : "w-[65px]"
//       }`}
//     >
//       <ProSidebar>
//         <h1
//           className={`text-2xl text-white duration-300 ml-10 my-7 ${
//             showMenu ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           Sidebar
//         </h1>
//         {navLinks.map((navLink, i) => (
//           <Menu key={i} iconShape="square" className="relative">
//             {!navLink.subLinks ? (
//               <Link href={navLink.link} passHref>
//                 <MenuItem icon={navLink.icon}>{navLink.name}</MenuItem>
//               </Link>
//             ) : (
//               <SubMenu title={navLink.name} icon={navLink.icon}>
//                 {showMenu &&
//                   navLink.subLinks.map((subLink, i) => (
//                     <Link key={i} href={subLink.link} passHref>
//                       <MenuItem>{subLink.name}</MenuItem>
//                     </Link>
//                   ))}
//               </SubMenu>
//             )}
//           </Menu>
//         ))}
//       </ProSidebar>
//     </div>
//   );
// }

// export default Sidebar4;
