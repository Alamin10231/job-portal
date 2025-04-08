import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Authcontext from "../Context/Authcontext";
import smalllogo from "../../public/small.png";
import { motion } from "motion/react";
const Navbar = () => {
  const { user, signout } = useContext(Authcontext);

  const handlelogout = () => {
    signout()
      .then(() => console.log("signout successfully"))
      .catch((error) => {
        console.log(error.message);
      });
  };
  const links = (
    <>
      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
      >
        <NavLink to="/">Home</NavLink>
      </motion.li>
      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
      >
        <NavLink to="/myapplication">My Application</NavLink>
      </motion.li>
      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
      >
        <NavLink to="/addjob">Post A Job</NavLink>
      </motion.li>

      <motion.li
        initial={{ transform: "translateX(-100px)" }}
        animate={{ transform: "translateX(0px)" }}
        transition={{ type: "spring" }}
      >
        <NavLink to="/mypostedjobs">My Posted Jobs</NavLink>
      </motion.li>
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-10 mt-2">
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
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          <img src={smalllogo} alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <Link to="/login">
              <button onClick={handlelogout} className="btn">
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">
              <button className="btn">Log in</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
