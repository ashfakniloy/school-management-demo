import Card from "./Card";

// const totalCounts = [
//   {
//     title: "students",
//     count: userData.total_students,
//   },
//   {
//     title: "teachers",
//     count: userData.total_students,
//   },
//   {
//     title: "parents",
//     count: userData.total_students,
//   },
//   {
//     title: "earnings",
//     count: userData.total_students,
//   },
// ];

function Cards({ totalCounts }) {
  return (
    <>
      {totalCounts.map((totalCount, i) => (
        <Card key={i} title={totalCount.title} count={totalCount.count} />
      ))}
    </>
  );
}

export default Cards;
