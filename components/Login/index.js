import Image from "next/image";
import Link from "next/link";
import { userCategories } from "./userCategories";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-200">
      <div className="grid grid-cols-4 bg-white p-5">
        {userCategories.map((user) => (
          <div
            key={user.id}
            className="py-5 text-center border-r border-slate-200 last:border-r-0"
          >
            <Image src={user.icon} alt={user.name} width={100} height={100} />
            <h4 className="my-4 mx-5 py-4 text-xl font-oswald tracking-widest font-bold border-y text-slate-700 border-slate-200">
              {user.name}
            </h4>
            <Link href={user.link} passHref>
              <div className="px-3 py-3 mx-20 border-2 border-green-500 rounded text-sm text-green-500 hover:bg-gray-100 transition duration-300 cursor-pointer">
                Login as {user.button}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
