import React from "react";
import { motion } from "framer-motion";
import Subheading from "./Subheading";
import Button from "../ui/Button";
import { FaEnvelope, FaGithub, FaRocket } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { HiOutlineSparkles } from "react-icons/hi";

const CTASection = () => {
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

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const floatingIconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.section
      className="w-full bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-10 opacity-20 hidden lg:block"
      >
        <FaRocket className="text-6xl text-white" />
      </motion.div>

      <motion.div
        variants={floatingIconVariants}
        initial="initial"
        animate="animate"
        className="absolute bottom-20 right-10 opacity-20 hidden lg:block"
        style={{ animationDelay: "1s" }}
      >
        <HiOutlineSparkles className="text-6xl text-white" />
      </motion.div>

      <div className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={contentVariants}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Decorative badge */}
          <motion.div
            variants={contentVariants}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <HiOutlineSparkles className="text-cyan-300 text-sm" />
            <span className="text-xs text-cyan-200 font-medium uppercase tracking-wide">
              Let's Collaborate
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            variants={titleVariants}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight"
          >
            Let's Build Something
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Great Together
            </span>
          </motion.h2>

          {/* Subheading */}
          <motion.div variants={contentVariants}>
            <Subheading
              isLight
              description="I'd love to hear about your next project or creative idea. Let's turn it into reality!"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={buttonVariants}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center mt-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                buttonText="Get in Touch"
                icon={HiOutlineEnvelope}
                path="/contact"
                variant="cyan"
              />
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                buttonText="GitHub"
                icon={FaGithub}
                path="https://github.com/gideb"
                variant="primary"
              />
            </motion.div>
          </motion.div>

          {/* Optional: Trust indicators */}
          <motion.div
            variants={contentVariants}
            className="flex flex-wrap gap-6 justify-center pt-8 mt-4 border-t border-white/10"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs text-cyan-200">7+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="text-xs text-cyan-200">
                75+ Projects Shipped
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-400" />
              <span className="text-xs text-cyan-200">Code + Creative</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTASection;
