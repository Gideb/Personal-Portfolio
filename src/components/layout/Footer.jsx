import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Footer = () => {
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PROJECTS", path: "/projects" },
  ];

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  const socialIconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
        duration: 0.4,
      },
    },
    tap: { scale: 0.95 },
  };

  const lineVariants = {
    initial: { width: 0 },
    hover: { width: 16, transition: { duration: 0.3 } },
  };

  return (
    <motion.section
      className="border-t border-gray-200 py-10 bg-linear-to-br from-white via-gray-50 to-gray-100"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto text-center py-10 px-4 lg:px-7">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 text-left"
          >
            <motion.h2
              className="text-3xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05, x: 5 }}
              transition={{ duration: 0.2 }}
            >
              Gideb.dev
            </motion.h2>
            <p className="text-left text-gray-600 text-sm leading-relaxed">
              Software Engineer building clean, user-focused web experiences.
            </p>
            <p className="text-left text-gray-600 text-sm leading-relaxed">
              Visual creator blending all forms of creativity to tell stories
              that stick.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:ml-8 lg:ml-16"
          >
            <motion.h3
              className="text-xs font-semibold text-gray-500 text-left tracking-wider"
              whileHover={{ x: 5 }}
            >
              NAVIGATION
            </motion.h3>

            <div className="space-y-2">
              {navLinks.map((navLink, index) => (
                <motion.div
                  key={navLink.name}
                  variants={linkVariants}
                  initial="initial"
                  whileHover="hover"
                  custom={index}
                  className="relative py-0.5 text-left"
                >
                  <Link
                    to={navLink.path}
                    className="text-gray-700 hover:text-cyan-600 transition-colors duration-300 text-sm group flex items-center gap-2 font-medium"
                  >
                    <motion.span
                      variants={lineVariants}
                      initial="initial"
                      whileHover="hover"
                      className="h-px bg-linear-to-r from-cyan-600 to-blue-600 rounded-full"
                    />
                    {navLink.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-4 md:ml-8 lg:ml-16"
          >
            <motion.h3
              className="text-xs font-semibold text-gray-500 text-left tracking-wider"
              whileHover={{ x: 5 }}
            >
              CONNECT
            </motion.h3>

            <div className="flex items-center text-left gap-4">
              <motion.div
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="https://github.com/gideb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-100 to-gray-200 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 rounded-full block shadow-md hover:shadow-cyan-500/25"
                >
                  <FaGithub className="text-xl text-gray-700 hover:text-cyan-600 transition-colors duration-300" />
                </Link>
              </motion.div>

              <motion.div
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="https://linkedin.com/in/gideb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-linear-to-br from-gray-100 to-gray-200 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 rounded-full block shadow-md hover:shadow-cyan-500/25"
                >
                  <FaLinkedin className="text-xl text-gray-700 hover:text-cyan-600 transition-colors duration-300" />
                </Link>
              </motion.div>

              <motion.div
                variants={socialIconVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Link
                  to="mailto:hello@gideb.dev"
                  className="p-3 bg-linear-to-br from-gray-100 to-gray-200 hover:from-cyan-100 hover:to-blue-100 transition-all duration-300 rounded-full block shadow-md hover:shadow-cyan-500/25"
                >
                  <HiOutlineEnvelope className="text-xl text-gray-700 hover:text-cyan-600 transition-colors duration-300" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <h4 className="text-left text-sm text-gray-500">
            &copy; {new Date().getFullYear()} GIDEB.DEV — All rights reserved
          </h4>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Footer;
