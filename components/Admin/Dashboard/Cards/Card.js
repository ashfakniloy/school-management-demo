function Card({ title, count, icon }) {
  return (
    <div className="">
      <div className="bg-white flex justify-between items-center px-8 py-6 gap-40 shadow-md hover:scale-105 hover:shadow-lg transition duration-300">
        <div className="text-5xl p-4 rounded-full bg-yellow-100">{icon}</div>
        <div className="space-y-2 text-center">
          <h1 className="text-slate-600 capitalize">{title}</h1>
          <h1 className="text-slate-800 font-semibold text-lg">{count}</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
