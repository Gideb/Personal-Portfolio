import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Heading = ({ title, leftAlign }) => {
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
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`max-w-2xl ${!leftAlign ? "mx-auto text-center" : "text-left"}`}
    >
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-800">
        {title}
      </h2>
    </motion.div>
  );
};

export default Heading;
