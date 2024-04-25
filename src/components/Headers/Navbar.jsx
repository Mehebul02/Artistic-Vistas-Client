import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#ffffff] border-b- border-[#571f8e]"
            : "hover:text-[#ffffff]"
        }
      >
        <li className="text-xl font-medium font-serif">Home</li>{" "}
      </NavLink>
      <NavLink
        to="/allArt"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#ffffff] border-b-4 border-[#571f8e]"
            : "hover:text-[#ffffff]"
        }
      >
        <li className="text-xl font-medium font-serif">
          All Art & craft Items
        </li>{" "}
      </NavLink>
      <NavLink
        to="/addCraft"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#ffffff] border-b-4 border-[#571f8e]"
            : "hover:text-[#ffffff]"
        }
      >
        <li className="text-xl font-medium font-serif">Add Craft Item</li>{" "}
      </NavLink>
      <NavLink
        to="/myArt"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#ffffff] border-b-4 border-[#571f8e]"
            : "hover:text-[#ffffff]"
        }
      >
        <li className="text-xl font-medium font-serif">My Art&Craft List</li>{" "}
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-[#06ABB2] static">
      <div className="navbar-start ">
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
            className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-[#06ABB2] rounded-b-md w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="lg:text-2xl p-4 font-serif font-semibold">
          <span className="text-[#ffffff]">Artistic</span>
          <span className="text-[#571f8e] ">Vistas</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-10 px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <div>
            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-[#571f8e] rounded-xl group"
            >
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-[#2b074e] rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#4f1b82] rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl font-serif font-semibold">
                Login
              </span>
            </a>
          </div>
        </Link>
        {/* <div className="dropdown dropdown-end ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
          >
            <div className="space-y-3">
              <h1 className="text-2xl font-serif font-medium">Alif Islam</h1>
              <button className="bg-[#571f8e] px-4 py-2 rounded-md text-xl text-white  font-serif font-semibold">
                Log Out
              </button>
            </div>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
