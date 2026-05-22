import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import Subheading from "../../Props/Subheading";
import Topic from "../../Props/Topic";
import { LuUser } from "react-icons/lu";

const AboutMe = () => {
  // Animation variants
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

  return (
    <section className="bg-linear-to-br from-gray-900 via-slate-800 to-gray-900 py-20 w-full overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto z-10 mt-10 px-4 lg:px-7 py-10 items-center my-5 space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="space-y-5">
          <Topic topic="About" variant="bg" icon={LuUser} />

          <motion.h2
            variants={itemVariants}
            className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black leading-none text-white"
          >
            Curious developer with a love for the{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
              web
            </span>
            .
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <Subheading
              isLight
              leftAlign
              description="I am Gideb - a middle-level software developer focused on TypeScript, JavaScript and React. My journey into tech started with a simple curiosity about how websites work, and quickly turned into a craft I genuinely enjoy."
            />
            <Subheading
              isLight
              leftAlign
              description="I love building interfaces that feel quick, clear, and considered. Outside of front-end work, I'm exploring two areas that fascinate me: AI/LLM tooling and the foundations of cybersecurity. I believe great developers stay curious."
            />
            <Subheading
              isLight
              leftAlign
              description="My goal: land a middle-level software developer role where I can ship real product, learn from senior engineers, and keep growing."
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
