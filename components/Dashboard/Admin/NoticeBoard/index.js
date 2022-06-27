import React from "react";
import { format, formatDistance } from "date-fns";
import { enUS } from "date-fns/locale";

// const notices = [
//   {
//     id: 0,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 1,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 2,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 3,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 4,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
//   {
//     id: 5,
//     date: "16 June, 2019",
//     title: "Great School manag mene esom text of the printing.",
//     author: "Jennyfar Lopez",
//   },
// ];

function NoticeBoard({ notices }) {
  // console.log(notices.data);
  return (
    <div className="bg-white p-5 shadow-lg">
      <h1 className="my-5 text-2xl">Notice Board</h1>

      <div className="m-3 overflow-y-scroll notice   h-[400px]">
        <div className="my-4 ">
          {notices &&
            notices.map((notice) => (
              <div
                key={notice.id}
                className="my-8 mr-5 border-b border-slate-200"
              >
                <span className="bg-slate-400  text-white text-sm py-2 px-5 rounded-full">
                  {format(new Date(notice.post_date), "dd MMM, yyyy", {
                    locale: enUS,
                  })}
                </span>
                <p className="mt-4 mb-2 font-semibold">{notice.title}</p>
                <p className="mb-4 text-sm text-slate-600">
                  {notice.posted_by}{" "}
                  <span className="text-slate-400 text-xs mr-1">/</span>
                  <span className="text-slate-400">
                    {formatDistance(new Date(notice.created_at), new Date(), {
                      addSuffix: true,
                    })}
                  </span>
                </p>
              </div>
            ))}
        </div>
      </div>
      {/* <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        ducimus neque repellendus deserunt aut natus magni nulla. Nesciunt
        maxime quasi consequuntur neque perferendis! Corrupti, eaque. Natus quam
        quis, expedita eius ab at. In consequuntur dolore, est rem, illo
        asperiores aut labore ullam id, nihil sed culpa temporibus consectetur
        tenetur! Ex?
      </p> */}
    </div>
  );
}

export default NoticeBoard;
