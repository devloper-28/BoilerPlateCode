import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Navbar = () => {
  const { isAuthenticated } = useAuth();
  const navLinks = [
    {
      path: "/",
      content: "home",
    },
    // {
    //   path: "/login",
    //   content: "login",
    // },
    // {
    //   path: "/dashboard",
    //   content: "dashboard",
    // },

    {
      path: "/about",
      content: "about",
    },
  ];

  return (
    <header className="py-4 h-[70px] bg-white text-gray-400 ">
      <nav className=" flex justify-between gap-8 px-8">
        <div>LOGO</div>
        <ul className="flex gap-6 capitalize font-bold">
          {/* {isAuthenticated ? (
            <Link to={"/dashboard"}>Dashboard</Link>
          ) : (
            <Link to={"/login"}>Login</Link>
          )} */}
          {isAuthenticated ? (
            <NavLink
              to={"/dashboard"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-gray-500"
              }
            >
              Dashboard
            </NavLink>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "font-bold" : "text-gray-500"
              }
            >
              Login
            </NavLink>
          )}

          {navLinks.map((item) => (
            <li className=" " key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? " font-bold" : "text-gray-500"
                }
              >
                {item.content}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
