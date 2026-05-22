import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import image from "../../assets/images/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { FaPenToSquare, FaDatabase } from "react-icons/fa6";
import { IoClose, IoMenu } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

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
    { name: "WORK", path: "/projects", icon: FaDatabase },
    { name: "CONTACT", path: "/contact", icon: LuPhoneCall },
  ];

  // Animation variants
  const navVariants = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const menuVariants = {
    hidden: { x: "100%" },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const linkUnderlineVariants = {
    initial: { width: 0 },
    hover: {
      width: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <motion.nav
        id="hero"
        variants={navVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto px-6 lg:px-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="z-10"
          >
            <Link to="/">
              <img
                src={image}
                alt="portfolio logo"
                className={`w-14 transition-all duration-300 ${
                  scrolled ? "w-12" : "w-16"
                }`}
              />
            </Link>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="space-x-1 hidden md:flex">
            {navLinks.map((link) => (
              <motion.div
                className="relative py-2"
                key={link.name}
                whileHover="hover"
                initial="initial"
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1 font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-cyan-600 bg-cyan-50"
                        : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
                    }`
                  }
                  end={link.path === "/"}
                >
                  {link.name}
                  <motion.div
                    variants={linkUnderlineVariants}
                    className={`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full ${({
                      isActive,
                    }) => (isActive ? "w-full" : "w-0")}`}
                  />
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Desktop Contact Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block"
          >
            <Link
              to="/contact"
              className="group flex gap-3 items-center px-6 py-3 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get a Quote
              <FaPenToSquare className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>

          {/* Mobile Hamburger Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer flex flex-col gap-1.5 md:hidden z-10"
            onClick={() => setOpenMenu(true)}
          >
            <motion.span
              animate={{ rotate: openMenu ? 45 : 0 }}
              className="w-6 h-0.5 bg-linear-to-r from-cyan-600 to-blue-600 rounded-full"
            />
            <motion.span
              animate={{ opacity: openMenu ? 0 : 1 }}
              className="w-6 h-0.5 bg-gray-600 rounded-full"
            />
            <motion.span
              animate={{ rotate: openMenu ? -45 : 0, y: openMenu ? -8 : 0 }}
              className="w-6 h-0.5 bg-linear-to-r from-cyan-600 to-blue-600 rounded-full"
            />
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={() => setOpenMenu(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-0 right-0 h-full w-80 md:w-96 bg-linear-to-br from-white to-gray-50 shadow-2xl z-50"
          >
            <div className="flex h-full flex-col p-8">
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="self-end p-2 cursor-pointer text-gray-600 hover:text-cyan-600 transition-colors duration-300"
                onClick={() => setOpenMenu(false)}
              >
                <IoClose className="text-2xl" />
              </motion.button>

              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    variants={menuItemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `flex gap-4 items-center px-4 py-3 rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-linear-to-r from-cyan-50 to-blue-50 text-cyan-600 font-semibold"
                            : "text-gray-700 hover:text-cyan-600 hover:bg-cyan-50/50"
                        }`
                      }
                      onClick={() => setOpenMenu(false)}
                      end={link.path === "/"}
                    >
                      <link.icon className="text-xl" />
                      <span className="font-medium">{link.name}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Contact Button */}
              <motion.div
                variants={menuItemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-auto mb-8"
              >
                <Link
                  to="/contact"
                  className="group flex gap-3 items-center justify-center px-6 py-4 bg-linear-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg w-full"
                  onClick={() => setOpenMenu(false)}
                >
                  Get a Quote
                  <FaPenToSquare className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
