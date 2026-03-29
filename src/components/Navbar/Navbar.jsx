import { ShoppingCart } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm py-3 ">
      <div className="w-11/12 mx-auto flex items-center">
        {" "}
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className=" text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-black font-medium text-lg">Products </a>
            </li>
            <li>
              <a className="text-black font-medium text-lg">Features </a>
            </li>
            <li>
              <a className="text-black font-medium text-lg">Pricing</a>
            </li>
            <li>
              <a className="text-black font-medium text-lg">Testimonials</a>
            </li>
            <li>
              <a className="text-black font-medium text-lg">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <div>
            <ShoppingCart />
          </div>
          <span className="font-medium text-lg">Login</span>
          <button className="rounded-full font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-2">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
