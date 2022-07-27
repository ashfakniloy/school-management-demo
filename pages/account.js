import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout";
import UserForm from "../components/Admin/Form/UserForm";
import Table from "../components/Admin/Table";

const users = [
  {
    id: 1,
    name: "Steven Johnson",
    role: "Super Admin",
    image: "/images/user2.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Admin",
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Random User",
    role: "User",
    image: "/images/user2.jpg",
  },
  {
    id: 4,
    name: "Random User 2",
    role: "User",
    image: "/images/user2.jpg",
  },
];

function AddEmail() {
  // const [showDetails, setShowDetails] = useState("");
  const [userDetails, setUserDetails] = useState([]);

  console.log(userDetails);

  return (
    <Layout>
      <div className="px-8 py-10 ">
        <h1 className="text-xl font-semibold text-slate-800">
          Account Setting
        </h1>
        <div className="mt-8">
          <UserForm />
        </div>
        <div className="mt-8 flex gap-5">
          <div className=" bg-white py-10 shadow-md  w-[500px]">
            <h1 className="px-10 text-xl font-semibold text-slate-800">
              All Users
            </h1>
            <div className="m-10 space-y-1">
              {users &&
                users.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => setUserDetails(user)}
                    className=" odd:bg-teal-100 even:bg-cyan-100 hover:bg-slate-200 transition duration-300 rounded cursor-pointer"
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

          <div className="bg-white py-10 shadow-md  w-[800px]">
            <h1 className="px-10 text-xl font-semibold text-slate-800">
              User Details
            </h1>
            <div className="m-10 flex">
              <Image
                src={userDetails.image}
                alt="user"
                width={250}
                height={250}
                className="rounded-full"
              />
            </div>
            <div className="">{userDetails.name}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddEmail;
