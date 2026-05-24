import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Subheading from "./Subheading";
import Button from "../ui/Button";
import { FaEnvelope, FaGithub, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhoneCall, LuSparkles } from "react-icons/lu";
import { IoDiamondSharp, IoDiamondOutline } from "react-icons/io5";

const CTASectionTwo = ({
  heading = "Let's Work Together",
  description = "Got a project in mind? Let's bring your ideas to life.",
  path = "/contact",
  buttonText = "Get in Touch",
  buttonicon = HiOutlineEnvelope,
}) => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      y: -5,
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 360,
      transition: { duration: 0.5 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.4 },
    },
  };

  const sparkleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.5, duration: 0.3 },
    },
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="relative max-w-5xl mx-auto text-center space-y-8 border border-gray-200 rounded-3xl shadow-xl bg-white p-10 md:p-16 overflow-hidden group"
        >
          {/* Decorative background elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-r from-cyan-200/20 to-blue-200/20 blur-3xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-purple-200/20 to-pink-200/20 blur-3xl pointer-events-none"
          />

          {/* Diamond Icon */}
          <motion.div
            variants={iconVariants}
            whileHover="hover"
            className="inline-flex"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 ">
              <IoDiamondSharp className="text-4xl md:text-5xl text-cyan-600 animate-diamond" />
            </div>
          </motion.div>

          {/* Floating sparkles */}
          <motion.div
            variants={sparkleVariants}
            animate="float"
            className="absolute top-12 right-12 opacity-60"
          >
            <LuSparkles className="text-cyan-400 text-xl" />
          </motion.div>

          <motion.div
            variants={sparkleVariants}
            animate="float"
            className="absolute bottom-12 left-12 opacity-60"
            style={{ animationDelay: "1s" }}
          >
            <LuSparkles className="text-purple-400 text-lg" />
          </motion.div>

          {/* Content */}
          <motion.div variants={titleVariants}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
              {heading}
            </h2>
          </motion.div>

          <motion.div variants={subheadingVariants}>
            <Subheading description={description} leftAlign={false} />
          </motion.div>

          {/* Button */}
          <motion.div variants={buttonVariants} className="pt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                buttonText={buttonText}
                icon={buttonicon}
                path={path}
                variant="cyan"
              />
            </motion.div>
          </motion.div>

          {/* Optional: Trust badge */}
          <motion.div
            variants={subheadingVariants}
            className="flex items-center justify-center gap-2 pt-4"
          >
            <div className="flex -space-x-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 border-2 border-white"
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Trusted by clients worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASectionTwo;
