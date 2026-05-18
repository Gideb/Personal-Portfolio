import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
  ];

  return (
    <section className="border-t border-slate-200 py-10 bg-white ">
      <div className="max-w-7xl mx-auto text-center py-10 px-4 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="flex flex-col gap-7 text-left">
            <h2 className="text-3xl text-gray-900">Gideb.dev</h2>
            <p className="text-left text-gray-500 text-sm">
              Software Engineer building clean, user-focused web experiences.
            </p>
          </div>

          {/* quick links */}
          <div className="flex flex-col gap-6 lg:ml-30 ">
            <h3 className="text-md text-gray-700 text-left">NAVIGATION</h3>

            <div>
              {navLinks.map((navLink) => (
                <div
                  className="relative py-1 text-left font-semibold "
                  key={navLink.name}
                >
                  <Link
                    to={navLink.path}
                    className="text-gray-700 hover:text-rose-800 transition-colors text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-rose-800 transition-all duration-300" />
                    {navLink.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* social links */}

          <div className="flex flex-col gap-6 lg:ml-30 my-4">
            <h3 className="text-md text-gray-700 text-left">CONNECT</h3>
            <div className="flex items-center text-left gap-3 ">
              <Link
                to="/github/gideb"
                className="p-3 bg-pink-100 hover:bg-pink-300 transition-all duration-500 rounded-full"
              >
                <FaGithub className="text-xl text-slate-900 " />
              </Link>
              <Link
                to="/linkedin/gideb"
                className="p-3 bg-pink-100 hover:bg-pink-300 transition-all duration-500 rounded-full"
              >
                <FaLinkedin className="text-xl text-slate-900 " />
              </Link>
              <Link
                to="/hello@gidev.dev"
                className="p-3 bg-pink-100 hover:bg-pink-300 transition-all duration-500 rounded-full "
              >
                <HiOutlineEnvelope className="text-xl text-slate-900 " />
              </Link>
            </div>
          </div>
        </div>

        <div className="h-4 w-full z-20 text-gray-700 my-2"></div>
        <div>
          <h4 className="text-left">
            &copy;copyright GIDEB.DEV {new Date().getFullYear()}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Footer;
