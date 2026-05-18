import React from "react";
import { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";
import image from "../../assets/images/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaPenToSquare, FaDatabase } from "react-icons/fa6";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const changeHeaderBg = () => {
      setScrolled(window.scrollY >= 50);
    };

    window.addEventListener("scroll", changeHeaderBg);
    return () => window.removeEventListener("scroll", changeHeaderBg);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";
  }, [openMenu]);

  const navLinks = [
    { name: "HOME", path: "/", icon: IoHomeOutline },
    { name: "ABOUT", path: "/about", icon: HiOutlineUser },
    { name: "PROJECTS", path: "/projects", icon: FaDatabase },
  ];

  return (
    <>
      <nav
        id="hero"
        className={`fixed top-0 left-0 z-100 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto px-6 pt-3 lg:pt-7">
          <Link to="/" className="z-10">
            <img src={image} alt="portfolio logo" className="w-16 " />
          </Link>

          {/* desktop navLinks */}

          <div className="space-x-8 hidden md:flex">
            {navLinks.map((link) => (
              <div className="relative py-2" key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-medium hover:text-gray-300 ${isActive ? " font-semibold text-teal-700" : "text-gray-700 hover:text-teal-500"}`
                  }
                  end={link.path === "/"}
                >
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>

          {/* desktop contact button */}
          <Link
            to="/contact"
            className="invisible md:visible hover:scale-105 font-semibold group flex gap-3 items-center px-5 py-3 text-gray-800 bg-teal-400 transition-all duration-300"
          >
            Get a Quote
            <FaPenToSquare className="text-md group-hover:translate-x-1 transition" />
          </Link>

          {/* mobile hamburger */}

          <button
            className={`cursor-pointer flex flex-col gap-1 md:hidden hover:opacity-85 transition duration-300 z-10 `}
            onClick={() => setOpenMenu(true)}
          >
            <span className="w-5 h-1 bg-teal-700"></span>
            <span className="w-3 h-1 bg-gray-600"></span>
            <span className="w-6 h-1 bg-teal-700"></span>
          </button>
        </div>
      </nav>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-white/40 z-30 transition-opacity duration-300 ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"} `}
        onClick={() => setOpenMenu(false)}
      />

      {/* sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-90 bg-teal-800 z-100 transform transition-transform duration-400 ease-out border-l ${openMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col p-10">
          {/* close buton */}
          <button
            className="px-2  bg-teal-600 rounded shadow-xs shadow-white cursor-pointer self-end text-gray-200 font-semibold text-xl transition hover:text-gray-100 "
            onClick={() => setOpenMenu(false)}
          >
            x
          </button>

          <div className="flex flex-col text-lg gap-6 mt-20 ml-5 md:ml-10">
            {navLinks.map((link, index) => (
              <div key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex gap-3 items-center ${isActive ? "text-teal-300 font-semibold" : "text-gray-200 hover:text-teal-200"}`
                  }
                  onClick={() => setOpenMenu(false)}
                  end={link.path === "/"}
                >
                  <link.icon className="text-xl" />
                  {link.name}
                </NavLink>
              </div>
            ))}
          </div>

          {/* contact button */}

          <Link
            to="/contact"
            className="absolute bottom-20 ml-10 hover:scale-105 font-semibold group flex gap-3 items-center justify-center px-5 py-3 text-gray-800  bg-teal-400 transition-all duration-300"
          >
            Get a Quote
            <FaPenToSquare className="text-md group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
