import Image from "next/image";

function UserDetails({ userDetails }) {
  return (
    <div className="flex-1 bg-white py-10 shadow-md">
      <h1 className="px-10 text-xl font-semibold text-slate-800">
        User Details
      </h1>
      <div className="m-10  flex gap-10">
        <div className="">
          <Image
            src={userDetails.image}
            alt="user"
            width={250}
            height={250}
            className="rounded-full"
          />
        </div>
        <div className="space-y-8">
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Name:</p>
            <p className="">{userDetails.name}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">User Type:</p>
            <p className="">{userDetails.role}</p>
          </div>
          <div className="flex gap-20">
            <p className="min-w-[100px] text-slate-500">Gender:</p>
            <p className="">{userDetails.gender}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
