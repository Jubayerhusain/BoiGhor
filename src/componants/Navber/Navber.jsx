import { IoBookSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
function Navber() {
  const link = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-md px-3 py-2" : "text-gray-700"
          }
        >
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedBooks"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-md px-3 py-2" : "text-gray-700"          }
        >
          {" "}
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            isActive ? "text-[#23BE0A] border-2 border-[#23BE0A] rounded-md px-3 py-2" : "text-gray-700"          }
        >
          {" "}
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-4xl items-center">
          <IoBookSharp className="mt-1 text-[#23BE0A] text-5xl" /> <h1 className="font-bold font-6xl">Boi Ghor</h1>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" font-semibold text-gray-700 menu-horizontal px-1 space-x-8">
          {link}
        </ul>
      </div>
      <div className="navbar-end space-x-4">
        <a className="btn btn-primary bg-[#23BE0A] text-white font-semibold border-none hover:bg-[#59C6D2]">
          Sing In
        </a>
        <a className="btn btn-primary bg-[#59C6D2] text-white font-semibold border-none hover:bg-[#23BE0A]">
          Sing Up
        </a>
      </div>
    </div>
  );
}

export default Navber;
