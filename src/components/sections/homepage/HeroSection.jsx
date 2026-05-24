import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Topic from "../../Props/Topic";
import { FaProjectDiagram, FaCamera, FaPalette } from "react-icons/fa";
import Button from "../../ui/Button";
import { FaPenToSquare, FaCode, FaVideo } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import Subheading from "../../Props/Subheading";
import profileImage from "../../../assets/images/profile.jpeg";

const HeroSection = () => {
  const { ref: statsRef } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const stats = [
    {
      value: 40,
      label: "Code Projects",
      icon: FaCode,
      suffix: "+",
      color: "from-cyan-500 to-blue-500",
    },
    {
      value: 50,
      label: "Creative Pieces",
      icon: FaPalette,
      suffix: "+",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: 30,
      label: "Happy Clients",
      icon: FaCamera,
      suffix: "+",
      color: "from-amber-500 to-orange-500",
    },
    {
      value: 7,
      label: "Years Creating",
      icon: FaVideo,
      suffix: "+",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  return (
    <section
      id="hero"
      className="scroll-mt-16 relative mt-10 sm:mt-5 w-full overflow-hidden bg-linear-to-br from-white via-gray-50 to-white py-16 sm:py-20 lg:py-28"
      aria-label="Hero section"
    >
      {/* Decorative background elements */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
        }}
        className="absolute top-20 right-10 w-72 h-72 bg-linear-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [0, -15, 0],
          transition: {
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          },
        }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-linear-to-r from-purple-200/10 to-pink-200/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="z-10 mt-10 px-4 lg:px-7 max-w-7xl mx-auto py-10 items-center my-5">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 space-y-6"
          >
            {/* Topic Badge */}
            <motion.div variants={itemVariants}>
              <Topic
                icon={HiOutlineSparkles}
                topic="Software Engineer & Visual Storyteller"
                variant="bg"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="max-w-4xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
            >
              Hi, I Am{" "}
              <motion.span
                variants={nameVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-clip-text text-transparent bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 inline-block cursor-default"
              >
                Gilbert
              </motion.span>
              . I Build & Create.
            </motion.h2>

            {/* Subheading */}
            <motion.div variants={itemVariants}>
              <Subheading
                leftAlign
                description="Software engineer crafting clean, performant web experiences AND visual storyteller blending photography, design, and content that sticks. I bridge the gap between code and creativity."
              />
            </motion.div>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4 flex-wrap"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  buttonText="Explore Projects"
                  icon={FaProjectDiagram}
                  path="/projects"
                  variant="cyan"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  buttonText="Contact Me"
                  icon={FaPenToSquare}
                  path="/contact"
                  variant="primary"
                />
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              ref={statsRef}
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="text-left p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-lg bg-linear-to-br ${stat.color} flex items-center justify-center mb-3`}
                  >
                    <stat.icon className="text-white text-sm" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800">
                    {stat.value}
                    {stat.suffix || ""}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Creative Callout */}
            <motion.div
              variants={itemVariants}
              className="mt-6 pt-4 border-t border-gray-100"
            >
              <p className="text-sm text-gray-500 flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-gray-700">
                  ✨ What I do:
                </span>
                <span>Web Development</span>
                <span className="text-gray-300">•</span>
                <span>UI/UX Design</span>
                <span className="text-gray-300">•</span>
                <span>Content Creation</span>
                <span className="text-gray-300">•</span>
                <span>Photography</span>
                <span className="text-gray-300">•</span>
                <span>Graphics Design</span>
                <span className="text-gray-300">•</span>
                <span>Visual Storytelling</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-20 blur-xl"
              />

              {/* Image container with border gradient */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-112.5 lg:h-112.5 rounded-full p-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                  {/*  <img
                    src={profileImage}
                    alt="Gilbert - Software Engineer & Creative Visual Storyteller"
                    className="w-full h-full object-cover object-center"
                  /> */}
                  <img
                    src={profileImage}
                    alt="Gilbert - Software Engineer & Creative Visual Storytelle"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/450";
                    }}
                  />
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg"
              >
                <FaCode className="text-white text-2xl" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg"
              >
                <FaCamera className="text-white text-2xl" />
              </motion.div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
                className="absolute top-1/2 -right-8 w-10 h-10 rounded-full bg-linear-to-r from-amber-500 to-orange-500 flex items-center justify-center shadow-lg"
              >
                <FaPalette className="text-white text-sm" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
