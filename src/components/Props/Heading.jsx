import React from "react";
import { motion } from "framer-motion";

const Heading = ({ title, leftAlign }) => {
  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent max-w-2xl ${
        !leftAlign ? "mx-auto text-center" : "text-left"
      }`}
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>{title}</h2>
    </motion.div>
  );
};

export default Heading;
