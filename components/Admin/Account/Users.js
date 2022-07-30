import Image from "next/image";

function Users({ users, userDetails, setUserDetails }) {
  return (
    <div className=" bg-white py-10 shadow-md  w-[500px]">
      <h1 className="px-10 text-xl font-semibold text-slate-800">All Users</h1>
      <div className="m-10 space-y-1">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              onClick={() => setUserDetails(user)}
              className={` rounded cursor-pointer ${
                user.id === userDetails.id
                  ? "bg-red-200"
                  : "bg-gray-100 hover:bg-red-100 transition duration-300"
              }`}
            >
              <div className="">
                <div className="px-7 py-5 flex items-center gap-6 ">
                  <div className="">
                    <Image
                      src={user.image}
                      alt="user"
                      className="rounded-full"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold">{user.name}</h4>
                    {/* <p className="text-sm">{user.role}</p> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Users;
