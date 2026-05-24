import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaPen } from "react-icons/fa";
import Card from "../../ui/Card";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import { BsJavascript } from "react-icons/bs";
import { FaCss3Alt, FaNodeJs, FaPhp, FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss, SiFigma } from "react-icons/si";
import { GiCrystalBars } from "react-icons/gi";

const SkillsPreview = () => {
  const skills = [
    {
      title: "Tailwind CSS",
      description: "Modern layouts & animations",
      icon: SiTailwindcss,
      color: "cyan",
      proficiency: 90,
    },
    {
      title: "JavaScript",
      description: "ES6+, async, the DOM",
      icon: BsJavascript,
      color: "amber",
      proficiency: 87,
    },
    {
      title: "React",
      description: "Hooks, Router, Context",
      icon: FaReact,
      color: "cyan",
      proficiency: 89,
    },
    {
      title: "TypeScript",
      description: "Type-safe development",
      icon: TbBrandTypescript,
      color: "blue",
      proficiency: 82,
    },
    {
      title: "Node.js",
      description: "REST APIs, Authentication",
      icon: FaNodeJs,
      color: "green",
      proficiency: 80,
    },
    {
      title: "UI/UX Design",
      description: "Figma, Wireframing, Prototyping",
      icon: SiFigma,
      color: "purple",
      proficiency: 85,
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="py-20 bg-linear-to-br from-gray-50 via-white to-gray-50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div variants={headerVariants} className="text-left mb-12">
          <Topic topic="toolkit" variant="nobg" />
          <Heading leftAlign title="Daily Skills Toolkit" />
          <Subheading
            leftAlign
            description="Tools and technologies I work with daily to bring ideas to life"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={cardContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                color={skill.color}
              />

              {/* Optional: Proficiency Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mt-3"
              >
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Proficiency</span>
                  <span>{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full rounded-full bg-linear-to-r ${
                      skill.color === "cyan"
                        ? "from-cyan-500 to-blue-500"
                        : skill.color === "amber"
                          ? "from-amber-500 to-orange-500"
                          : skill.color === "blue"
                            ? "from-blue-500 to-indigo-500"
                            : skill.color === "green"
                              ? "from-green-500 to-emerald-500"
                              : "from-purple-500 to-pink-500"
                    }`}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          variants={headerVariants}
          className="mt-20 pt-8 border-t border-gray-200"
        >
          <div className="text-center mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-linear-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full mb-4"
            >
              <GiCrystalBars className="text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                Also Familiar With
              </span>
            </motion.div>
            <Heading leftAlign={false} title="More Tools & Technologies" />
            <Subheading
              leftAlign={false}
              description="Additional tools I've worked with across various projects"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python",
              "Docker",
              "Git",
              "GraphQL",
              "MongoDB",
              "PostgreSQL",
              "Firebase",
              "Vue.js",
              "SASS",
              "Webpack",
              "Jest",
              "Figma",
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300 shadow-sm"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Creative Skills Section (for your hybrid identity) */}
        <motion.div
          variants={headerVariants}
          className="mt-16 pt-8 border-t border-gray-200"
        >
          <div className="text-center mb-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 bg-linear-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full mb-4"
            >
              <FaPen className="text-purple-600" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">
                Creative Toolkit
              </span>
            </motion.div>
            <Heading leftAlign={false} title="Design & Content Creation" />
            <Subheading
              leftAlign={false}
              description="Tools I use for visual storytelling and creative work"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Adobe Photoshop",
              "Adobe Lightroom",
              "Figma",
              "Canva",
              "DaVinci Resolve",
              "Premiere Pro",
              "After Effects",
              "Audition",
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-linear-to-r from-purple-50 to-pink-50 border border-purple-100 rounded-full text-sm text-purple-700 hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsPreview;
