import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Button = ({ path, buttonText, icon: Icon, variant = "primary" }) => {
  const base =
    "md:inline-flex flex items-center gap-2 justify-center px-8 py-3 rounded-lg font-semibold transition-all duration-300 text-sm shadow-lg";

  const styles = {
    secondary:
      "text-white bg-gradient-to-r from-rose-600 via-pink-500 to-rose-600 hover:shadow-pink-500/25",
    amber:
      "text-white bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 hover:shadow-amber-500/25",
    cyan: "text-white bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 hover:shadow-cyan-500/25",
    primary:
      "text-gray-700 bg-white border-2 border-gray-200 hover:border-cyan-500 hover:text-cyan-600 hover:shadow-cyan-500/10",
  };

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      y: -3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
    >
      <Link to={path} className={`${base} ${styles[variant]} group`}>
        <span> {buttonText}</span>

        {Icon && (
          <motion.div
            variants={iconVariants}
            initial="initial"
            whileHover="hover"
          >
            <Icon className="text-sm" />
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
};

export default Button;
