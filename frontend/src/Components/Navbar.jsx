import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = () => (
    <div className="text-[18px] flex">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/reservation">Reservation</Link>
      </li>
      <li>
        <Link to="/service">Service</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
  return (
    <div className="navbar bg-black text-white shadow-sm min-h-20  lg:px-10">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu  gap-3  cursor-pointer menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navItems()}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-3xl uppercase">Chillox Restro</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems()}</ul>
      </div>
    </div>
  );
};

export default Navbar;
