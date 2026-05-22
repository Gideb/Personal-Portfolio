import React from "react";
import { motion } from "framer-motion";

const Subheading = ({ description, isLight, leftAlign }) => {
  // Animation variants
  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`max-w-2xl ${
        !leftAlign ? "mx-auto text-center" : "text-left"
      } text-base md:text-lg lg:text-xl leading-relaxed ${
        isLight
          ? "text-gray-200/90"
          : "bg-linear-to-r from-gray-600 to-gray-700 bg-clip-text text-transparent"
      }`}
      variants={subheadingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {description}
    </motion.div>
  );
};

export default Subheading;
