import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Topic = ({ topic, icon: Icon, variant = "noBg" }) => {
  const styles = {
    bg: "bg-gradient-to-r from-cyan-50 via-blue-50 to-purple-50 px-4 gap-3 border border-cyan-200/50 shadow-sm",
    nobg: "bg-transparent",
  };

  const textColors = {
    bg: "text-cyan-600",
    nobg: "text-blue-600",
  };

  const base =
    "inline-flex justify-center items-center gap-2 h-7 uppercase tracking-wide rounded-full mb-4";

  const topicVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${base} ${styles[variant]}`}
      variants={topicVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      {Icon && (
        <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.3 }}>
          <Icon className={`text-sm ${textColors[variant]}`} />
        </motion.div>
      )}
      <span
        className={`text-sm font-semibold tracking-wide ${textColors[variant]}`}
      >
        {topic}
      </span>
    </motion.div>
  );
};

export default Topic;
