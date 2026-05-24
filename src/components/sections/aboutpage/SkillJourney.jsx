import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import Card from "../../ui/Card";
import {
  LuBrain,
  LuCodeXml,
  LuPenTool,
  LuRocket,
  LuCamera,
  LuPalette,
} from "react-icons/lu";
import { BiMobileAlt } from "react-icons/bi";
import { FaMobileButton, FaPenFancy, FaRocket } from "react-icons/fa6";
import { HiOutlinePhotograph } from "react-icons/hi";
import { FaGlobe } from "react-icons/fa";

const SkillJourney = () => {
  const skillSet = [
    {
      title: "Web Development",
      icon: FaGlobe,
      color: "cyan",
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
      ],
    },
    {
      title: "Web Application",
      icon: FaGlobe,
      color: "cyan",
      tools: ["JavaScript", "React", "Node.js", "Express JS", "REST APIs"],
    },
    {
      title: "Mobile Development",
      icon: BiMobileAlt,
      color: "blue",
      tools: ["Flutter", "React Native", "Kotlin", "Firebase", "GraphQL"],
    },
    {
      title: "Brand Experience",
      icon: HiOutlinePhotograph,
      color: "pink",
      tools: [
        "Script Writing",
        "Social Media",
        "Storytelling",
        "Brand Strategy",
      ],
    },
    {
      title: "Content Creation",
      icon: LuCamera,
      color: "amber",
      tools: [
        "Content Strategy",
        "Video Editing",
        "Photography",
        "Storytelling",

        "Lightroom",
      ],
    },
    {
      title: "Graphics Design",
      icon: LuPalette,
      color: "purple",
      tools: [
        "Figma",
        "Canva",
        "Brand Identity",
        "Social Graphics",
        "Posters",
        "Photoshop",
      ],
    },
  ];

  const journey = [
    {
      id: 1,
      year: "2026",
      icon: FaRocket,
      color: "from-cyan-500 to-blue-600",
      bgGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      title: "Creative Developer",
      description:
        "Bridging the gap between code and creativity — building full-stack applications while growing my creative portfolio in photography and content creation.",
      type: "hybrid",
    },
    {
      id: 2,
      year: "2025",
      icon: LuCamera,
      color: "from-purple-500 to-pink-600",
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Creative Expansion",
      description:
        "Deep dive into visual storytelling — mastering photography, content creation, and building a creative brand alongside web development.",
      type: "creative",
    },
    {
      id: 3,
      year: "2024",
      icon: LuBrain,
      color: "from-indigo-500 to-purple-600",
      bgGradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      title: "Building Real Projects",
      description:
        "Full-stack development, backend architecture, and shipping complete products while contributing to open source.",
      type: "development",
    },
    {
      id: 4,
      year: "2023",
      icon: FaPenFancy,
      color: "from-pink-500 to-rose-600",
      bgGradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      title: "Creative Discovery",
      description:
        "Discovered passion for photography, design, and visual storytelling alongside frontend development.",
      type: "creative",
    },
    {
      id: 5,
      year: "2022",
      icon: LuPenTool,
      color: "from-rose-500 to-orange-600",
      bgGradient: "bg-gradient-to-br from-rose-500 to-orange-600",
      title: "Frontend Foundation",
      description:
        "Mastered React, TypeScript, and modern frontend tooling. Built responsive, performant web applications.",
      type: "development",
    },
    {
      id: 6,
      year: "2021",
      icon: LuCodeXml,
      color: "from-orange-500 to-amber-600",
      bgGradient: "bg-gradient-to-br from-orange-500 to-amber-600",
      title: "Web Fundamentals",
      description:
        "HTML, CSS, JavaScript — the foundation everything builds on.",
      type: "development",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const journeyContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const journeyItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "hybrid":
        return "bg-gradient-to-r from-cyan-500 to-purple-500 text-white";
      case "creative":
        return "bg-purple-100 text-purple-600";
      case "development":
        return "bg-cyan-100 text-cyan-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case "hybrid":
        return "💡 Creative Developer";
      case "creative":
        return "🎨 Creative";
      case "development":
        return "💻 Development";
      default:
        return type;
    }
  };

  return (
    <div>
      {/* Skills Section */}
      <motion.section
        className="bg-gradient-to-br from-slate-50 via-gray-50 to-white py-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto py-10 mt-10 px-4 lg:px-7">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10 space-y-2"
          >
            <Topic topic="Skills & Tools" variant="nobg" />
            <Heading leftAlign title="My Toolkit" />
            <Subheading
              leftAlign
              description="Tools and skills I use daily — both behind the screen and behind the lens"
            />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skillSet.map((skill, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.tools
                    .map((tool) => `• ${tool}`)
                    .join("\n")}
                  color={skill.color}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-white via-gray-50 to-white"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="max-w-7xl mx-auto py-10 mt-10 px-4 lg:px-7">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-12 space-y-2"
          >
            <Topic topic="My Journey" variant="nobg" />
            <Heading leftAlign title="From Code to Creativity" />
            <Subheading
              leftAlign
              description="How I evolved from a curious coder to a creative developer"
            />
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            className="relative"
            variants={journeyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-[120px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-20" />

            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="lg:ml-20 flex flex-col lg:flex-row gap-5 text-left self-start w-full max-w-4xl mx-auto mb-12 last:mb-0"
                  variants={journeyItemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {/* Year and Icon */}
                  <div className="relative lg:w-32 shrink-0">
                    <div className="flex lg:block items-center gap-4">
                      <div
                        className={`w-14 h-14 flex items-center justify-center rounded-full ${step.bgGradient} shadow-lg group shrink-0`}
                      >
                        <Icon className="text-white text-2xl z-50 group-hover:scale-110 transition-all duration-300 ease-out" />
                      </div>
                      <div className="lg:mt-3 lg:text-center">
                        <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold text-lg">
                          {step.year}
                        </span>
                      </div>
                    </div>
                    {index !== journey.length - 1 && (
                      <div className="hidden lg:block w-0.5 h-16 bg-gradient-to-b from-cyan-500 to-purple-600 absolute top-14 left-7 z-0 opacity-30" />
                    )}
                  </div>

                  {/* Content */}
                  <motion.div
                    className="flex-1 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getTypeColor(step.type)}`}
                      >
                        {getTypeLabel(step.type)}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-800 text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Creative Note */}
          <motion.div variants={headerVariants} className="mt-16 text-center">
            <p className="text-gray-500 text-sm italic">
              💡 Always learning, always creating — blending code with
              creativity
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SkillJourney;
