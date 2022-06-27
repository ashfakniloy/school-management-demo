import { AiOutlineDashboard } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { MdOutlineGroups } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { ImLibrary } from "react-icons/im";
import { GiMoneyStack } from "react-icons/gi";
import { SiGoogleclassroom } from "react-icons/si";
import { FaBookOpen } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { SiGooglesheets } from "react-icons/si";
import { GoChecklist } from "react-icons/go";
import { GiBus } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { FaClipboardList } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";

export const navLinks = [
  {
    name: "dashboard",
    link: "/",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    name: "students",
    link: "/students",
    icon: <ImUsers className="fill-green-400" />,
    subLinks: [
      {
        name: "all students",
        link: "/students/all-students",
      },
      {
        name: "admission form",
        link: "/students/admission-form",
      },
      {
        name: "student promotion",
        link: "/students/student-promotion",
      },
    ],
  },
  {
    name: "teachers",
    link: "/teachers",
    icon: <MdOutlineGroups className="fill-green-400" />,
    subLinks: [
      {
        name: "all teachers",
        link: "/teachers/all-teachers",
      },
      {
        name: "add teacher",
        link: "/teachers/add-teacher",
      },
      {
        name: "payment",
        link: "/teachers/payment",
      },
    ],
  },
  {
    name: "parents",
    link: "/parents",
    icon: <RiParentFill className="fill-green-400" />,
  },
  {
    name: "library",
    link: "/library",
    icon: <ImLibrary className="fill-green-400" />,
  },
  {
    name: "accounts",
    link: "/accounts",
    icon: <GiMoneyStack className="fill-green-400" />,
  },
  {
    name: "class",
    link: "/class",
    icon: <SiGoogleclassroom className="fill-green-400" />,
  },
  {
    name: "subject",
    link: "/subject",
    icon: <FaBookOpen className="fill-green-400" />,
  },
  {
    name: "class Routine",
    link: "/class-routine",
    icon: <BsCalendar3 className="fill-green-400" />,
  },
  {
    name: "attendance",
    link: "/attendance",
    icon: <SiGooglesheets className="fill-green-400" />,
  },
  {
    name: "exam",
    link: "/exam",
    icon: <GoChecklist className="fill-green-400" />,
  },
  {
    name: "transpoart",
    link: "/transpoart",
    icon: <GiBus className="fill-green-400" />,
  },
  {
    name: "hostel",
    link: "/hostel",
    icon: <AiOutlineHome className="fill-green-400" />,
  },
  {
    name: "notice",
    link: "/notice",
    icon: <FaClipboardList className="fill-green-400" />,
  },
  {
    name: "message",
    link: "/message",
    icon: <MdMessage className="fill-green-400" />,
  },
  {
    name: "account",
    link: "/account",
    icon: <AiFillSetting className="fill-green-400" />,
  },
];
