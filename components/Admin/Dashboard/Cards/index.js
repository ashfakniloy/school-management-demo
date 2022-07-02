import { ImUsers } from "react-icons/im";
import { MdOutlineGroups } from "react-icons/md";
import { RiParentFill } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import Card from "./Card";

function Cards({ students, teachers, parents, earnings }) {
  const totalCounts = [
    {
      title: "students",
      count: students,
      icon: <ImUsers className="fill-slate-400" />,
    },
    {
      title: "teachers",
      count: teachers,
      icon: <MdOutlineGroups className="fill-slate-400" />,
    },
    {
      title: "parents",
      count: parents,
      icon: <RiParentFill className="fill-slate-400" />,
    },
    {
      title: "earnings",
      count: earnings,
      icon: <GiMoneyStack className="fill-slate-400" />,
    },
  ];

  return (
    <>
      {totalCounts.map((totalCount, i) => (
        <Card
          key={i}
          title={totalCount.title}
          count={totalCount.count}
          icon={totalCount.icon}
        />
      ))}
    </>
  );
}

export default Cards;
