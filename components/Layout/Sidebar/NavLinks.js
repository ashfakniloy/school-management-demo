import {
  AiOutlineDashboard,
  AiOutlineHome,
  AiFillSetting,
} from "react-icons/ai";
import { ImUsers, ImLibrary } from "react-icons/im";
import { MdOutlineGroups, MdMessage } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { GiMoneyStack, GiBus } from "react-icons/gi";
import { SiGoogleclassroom, SiGooglesheets } from "react-icons/si";
import { FaBookOpen, FaClipboardList } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

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
        id: 0.1,
        name: "all students",
        link: "/students/all-students",
      },
      {
        id: 0.2,
        name: "admission form",
        link: "/students/admission-form",
      },
      {
        id: 0.3,
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
    subLinks: [
      {
        name: "all books",
        link: "/library/all-books",
      },
      {
        name: "add book",
        link: "/library/add-book",
      },
    ],
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
      {
        name: "all salaries",
        link: "/accounting/all-salaries",
      },
      {
        name: "add salary",
        link: "/accounting/add-salary",
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
    subLinks: [
      {
        name: "all subject",
        link: "/subject/all-subjects",
      },
      {
        name: "add subject",
        link: "/subject/add-subject",
      },
    ],
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
        link: "/leave/all-leaves",
      },
      {
        name: "add leave",
        link: "/leave/add-leave",
      },
    ],
  },
  {
    id: 12,
    name: "exam",
    link: "/exam",
    icon: <GoChecklist className="fill-green-400" />,
    subLinks: [
      {
        name: "all exam",
        link: "/exam/all-exam",
      },
      {
        name: "add exam",
        link: "/exam/add-exam",
      },
    ],
  },
  {
    id: 13,
    name: "transport",
    link: "/transport",
    icon: <GiBus className="fill-green-400" />,
    subLinks: [
      {
        name: "all transport",
        link: "/transport/all-transport",
      },
      {
        name: "add transport",
        link: "/transport/add-transport",
      },
    ],
  },
  {
    id: 14,
    name: "hostel",
    link: "/hostel",
    icon: <AiOutlineHome className="fill-green-400" />,
    subLinks: [
      {
        name: "All hostel rooms",
        link: "/hostel/all-hostel-rooms",
      },
      {
        name: "add new room",
        link: "/hostel/add-new-room",
      },
    ],
  },
  {
    id: 15,
    name: "notice",
    link: "/notice",
    icon: <FaClipboardList className="fill-green-400" />,
    subLinks: [
      {
        name: "Notice Board",
        link: "/notice/notice-board",
      },
      {
        name: "Add Notice",
        link: "/notice/add-notice",
      },
    ],
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
