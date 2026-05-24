import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlinePhotograph } from "react-icons/hi";
import { FaCode, FaCamera, FaPalette, FaRocket } from "react-icons/fa";
import Subheading from "../../Props/Subheading";
import Topic from "../../Props/Topic";
import { LuUser, LuBrain, LuHeart, LuCodeXml } from "react-icons/lu";
import profileImage from "../../../assets/images/profile.jpeg"; // Add your image

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 100 },
    },
  };

  const stats = [
    { value: "7+", label: "Years Experience", icon: FaRocket, color: "cyan" },
    {
      value: "40+",
      label: "Projects Completed",
      icon: LuCodeXml,
      color: "indigo",
    },
    { value: "50+", label: "Creative Pieces", icon: FaCamera, color: "purple" },
    { value: "30+", label: "Happy Clients", icon: LuHeart, color: "pink" },
  ];

  return (
    <section className="bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 py-20 w-full overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto z-10 mt-10 px-4 lg:px-7 py-10 items-center my-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="flex-1 space-y-5">
            <Topic topic="About Me" variant="bg" icon={LuUser} />

            <motion.h2
              variants={itemVariants}
              className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white"
            >
              Creative Developer &{" "}
              <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
                Visual Storyteller
              </span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-6">
              <Subheading
                isLight
                leftAlign
                description="I'm Gideb — a creative developer who bridges the gap between code and creativity. I build clean, performant web experiences AND craft visual stories through photography, design, and content that sticks."
              />
              <Subheading
                isLight
                leftAlign
                description="My journey started with curiosity about how websites work, which evolved into a passion for front-end development with TypeScript, JavaScript, and React. Along the way, I discovered a love for visual storytelling — capturing moments, designing brands, and creating content that resonates."
              />
              <Subheading
                isLight
                leftAlign
                description="Outside of coding, I'm exploring AI/LLM tooling and cybersecurity fundamentals. I believe the best creators stay curious — constantly learning, experimenting, and growing across both technical and creative fields."
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            variants={imageVariants}
            className="flex-1 flex justify-center items-center"
          >
            <div className="relative">
              {/* Animated linear ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -inset-4 rounded-full bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-30 blur-xl"
              />

              {/* Photo Container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl p-1 bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-800">
                  <img
                    src={profileImage}
                    alt="Gideb - Creative Developer & Visual Storyteller"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -top-4 -right-4 bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1.5 rounded-full shadow-lg"
              >
                <span className="text-white text-xs font-semibold">Code</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-linear-to-r from-purple-500 to-pink-500 px-3 py-1.5 rounded-full shadow-lg"
              >
                <span className="text-white text-xs font-semibold">
                  Creative
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-gray-800"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-${stat.color}-900 mb-3`}
              >
                <stat.icon className={`text-2xl text-white`} />
              </div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Pillars Section */}
        <motion.div
          variants={itemVariants}
          className="grid md:grid-cols-2 gap-6 pt-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-linear-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-cyan-500/20">
                <FaCode className="text-cyan-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">Development</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              TypeScript, React, Node.js — building fast, accessible, and
              scalable web applications.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-6 rounded-2xl bg-linear-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/20">
                <FaCamera className="text-purple-400 text-xl" />
              </div>
              <h3 className="text-white font-semibold text-lg">
                Visual Storytelling
              </h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Photography, design, content creation — crafting visuals that
              connect and inspire.
            </p>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div variants={itemVariants} className="pt-8 text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-block p-6 rounded-2xl bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-white/10"
          >
            <HiOutlineSparkles className="text-cyan-400 text-2xl mx-auto mb-3" />
            <p className="text-gray-300 italic max-w-2xl">
              "I don't just write code — I tell stories. Whether through pixels
              or photographs, my goal is to create experiences that people
              remember."
            </p>
            <p className="text-cyan-400 text-sm mt-3 font-medium">— Gideb</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
