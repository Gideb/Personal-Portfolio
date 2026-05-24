import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode, FaUserAstronaut } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";
import Subheading from "../../Props/Subheading";
import Heading from "../../Props/Heading";
import Button from "../../ui/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

const AboutPreview = () => {
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
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.5 },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
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

  return (
    <motion.section
      className="bg-linear-to-br from-gray-50 via-white to-gray-50 w-full py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-7">
        <motion.div
          variants={cardVariants}
          whileHover="hover"
          className="relative border border-gray-200 rounded-2xl p-8 md:p-10 space-y-6 bg-linear-to-br from-white via-white/90 to-gray-50/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group"
        >
          {/* Decorative background element */}
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
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-linear-to-r from-cyan-200/20 to-blue-200/20 blur-2xl pointer-events-none"
          />

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-linear-to-r from-purple-200/20 to-pink-200/20 blur-2xl pointer-events-none"
          />

          {/* Icon */}
          <motion.div variants={iconVariants} className="inline-flex">
            <div className="p-4 bg-linear-to-br from-cyan-100 to-blue-100 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300">
              <FaCode className="text-3xl text-cyan-600" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            className="space-y-4 max-w-2xl"
          >
            <Heading leftAlign title="A Bit About Me" />
            <Subheading
              leftAlign
              description="I'm a creative developer crafting clean, performant web experiences AND visual storyteller blending photography, design, and content that sticks. I'm currently sharpening my React skills while exploring AI and cybersecurity on the side. I bridge the gap between code and creativity."
            />
          </motion.div>

          {/* Button */}
          <motion.div variants={buttonVariants} className="inline-flex">
            <Button
              buttonText="Read Full Story"
              icon={BsArrowUpRightSquare}
              path="/about"
              variant="cyan"
            />
          </motion.div>

          {/* Optional: Quick stats or badges */}
          <motion.div
            variants={contentVariants}
            className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 mt-4"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-500" />
              <span className="text-xs text-gray-500">2+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <span className="text-xs text-gray-500">15+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-500">Code + Creative</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutPreview;
