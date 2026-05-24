import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// eslint-disable-next-line no-unused-vars
const Card = ({ key, title, icon: Icon, description, color, platform }) => {
  const colorClasses = {
    pink: {
      bg: "bg-gradient-to-br from-pink-100 to-pink-50",
      text: "text-pink-600",
      border: "border-pink-200",
      shadow: "hover:shadow-pink-500/10",
      gradient: "from-pink-500 to-rose-500",
    },
    indigo: {
      bg: "bg-gradient-to-br from-indigo-100 to-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
      shadow: "hover:shadow-indigo-500/10",
      gradient: "from-indigo-500 to-purple-500",
    },
    amber: {
      bg: "bg-gradient-to-br from-amber-100 to-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      shadow: "hover:shadow-amber-500/10",
      gradient: "from-amber-500 to-orange-500",
    },
    rose: {
      bg: "bg-gradient-to-br from-rose-100 to-rose-50",
      text: "text-rose-600",
      border: "border-rose-200",
      shadow: "hover:shadow-rose-500/10",
      gradient: "from-rose-500 to-pink-500",
    },
    cyan: {
      bg: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-200",
      shadow: "hover:shadow-cyan-500/10",
      gradient: "from-cyan-500 to-blue-500",
    },
    purple: {
      bg: "bg-gradient-to-br from-purple-100 to-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      shadow: "hover:shadow-purple-500/10",
      gradient: "from-purple-500 to-pink-500",
    },
    blue: {
      bg: "bg-gradient-to-br from-blue-100 to-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      shadow: "hover:shadow-blue-500/10",
      gradient: "from-blue-500 to-cyan-500",
    },
  };

  const selectedColor = colorClasses[color] || colorClasses.cyan;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 6,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const platformVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className={`group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border ${selectedColor.border} ${selectedColor.shadow}`}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          className={`w-14 h-14 rounded-xl ${selectedColor.bg} flex items-center justify-center mb-6 shadow-sm`}
        >
          {Icon && (
            <Icon
              className={`w-7 h-7 ${selectedColor.text} transition duration-300`}
            />
          )}
        </motion.div>

        {platform && (
          <motion.span
            variants={platformVariants}
            initial="initial"
            whileHover="hover"
            className={`text-xs font-semibold px-3 py-1.5 ${selectedColor.bg} ${selectedColor.text} rounded-full shadow-sm`}
          >
            {platform}
          </motion.span>
        )}
      </div>

      <motion.h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors duration-300">
        {title}
      </motion.h4>

      <motion.p className="text-gray-600 leading-relaxed">
        {description}
      </motion.p>
    </motion.div>
  );
};

export default Card;
