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
    id: 1,
    name: "dashboard",
    link: "/",
    icon: <AiOutlineDashboard className="fill-green-400" />,
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
    name: "parents",
    link: "/parents",
    icon: <RiParentFill className="fill-green-400" />,
    subLinks: [
      {
        name: "all parents",
        link: "/parents/all-parents",
      },
      {
        name: "add parent",
        link: "/parents/add-parent",
      },
    ],
  },
  {
    id: 5,
    name: "library",
    link: "/library",
    icon: <ImLibrary className="fill-green-400" />,
  },
  {
    id: 6,
    name: "accounting",
    link: "/accounting",
    icon: <GiMoneyStack className="fill-green-400" />,
    subLinks: [
      {
        name: "all expenses",
        link: "/accounting/all-expenses",
      },
      {
        name: "add expense",
        link: "/accounting/add-expense",
      },
      {
        name: "all fees",
        link: "/accounting/all-fees",
      },
      {
        name: "add fee",
        link: "/accounting/add-fee",
      },
    ],
  },
  {
    id: 7,
    name: "class",
    link: "/class",
    icon: <SiGoogleclassroom className="fill-green-400" />,
    subLinks: [
      {
        name: "all classes",
        link: "/class/all-classes",
      },
      {
        name: "add new class",
        link: "/class/add-new-class",
      },
    ],
  },
  {
    id: 8,
    name: "subject",
    link: "/subject",
    icon: <FaBookOpen className="fill-green-400" />,
  },
  {
    id: 9,
    name: "class Routine",
    link: "/class-routine",
    icon: <BsCalendar3 className="fill-green-400" />,
  },
  {
    id: 10,
    name: "attendance",
    link: "/attendance",
    icon: <SiGooglesheets className="fill-green-400" />,
  },
  {
    id: 11,
    name: "leave",
    link: "/leave",
    icon: <SiGooglesheets className="fill-green-400" />,
    subLinks: [
      {
        name: "all leaves",
        link: "/leaves/all-leaves",
      },
      {
        name: "add leave",
        link: "/leaves/add-leave",
      },
    ],
  },
  {
    id: 12,
    name: "exam",
    link: "/exam",
    icon: <GoChecklist className="fill-green-400" />,
  },
  {
    id: 13,
    name: "transpoart",
    link: "/transpoart",
    icon: <GiBus className="fill-green-400" />,
  },
  {
    id: 14,
    name: "hostel",
    link: "/hostel",
    icon: <AiOutlineHome className="fill-green-400" />,
  },
  {
    id: 15,
    name: "notice",
    link: "/notice",
    icon: <FaClipboardList className="fill-green-400" />,
  },
  {
    id: 16,
    name: "message",
    link: "/message",
    icon: <MdMessage className="fill-green-400" />,
  },
  {
    id: 17,
    name: "account",
    link: "/account",
    icon: <AiFillSetting className="fill-green-400" />,
  },
];
