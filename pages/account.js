import { useState } from "react";
import Layout from "../components/Layout";
import UserForm from "../components/Admin/Form/UserForm";
import Users from "../components/Admin/Account/Users";
import UserDetails from "../components/Admin/Account/UserDetails";

const users = [
  {
    id: 1,
    name: "Steven Johnson",
    role: "Super Admin",
    gender: "Male",
    image: "/images/user2.jpg",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Admin",
    gender: "Male",
    image: "/images/user2.jpg",
  },
  {
    id: 3,
    name: "Random User",
    role: "User",
    gender: "Female",
    image: "/images/user2.jpg",
  },
  {
    id: 4,
    name: "Random User 2",
    role: "User",
    gender: "Female",
    image: "/images/user2.jpg",
  },
];

function AddEmail() {
  // const [showDetails, setShowDetails] = useState("");
  const [userDetails, setUserDetails] = useState(users[0]);

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
          <Users
            users={users}
            userDetails={userDetails}
            setUserDetails={setUserDetails}
          />
          <UserDetails userDetails={userDetails} />
        </div>
      </div>
    </Layout>
  );
}

export default AddEmail;
