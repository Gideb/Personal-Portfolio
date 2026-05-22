import React from "react";
import { motion } from "framer-motion";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import Card from "../../ui/Card";
import { LuBrain, LuCodeXml, LuPenTool, LuRocket } from "react-icons/lu";
import { BiMobileAlt } from "react-icons/bi";
import { FaMobileButton } from "react-icons/fa6";

const SkillJourney = () => {
  const skillSet = [
    {
      title: "Frontend",
      icon: LuPenTool,
      color: "cyan",
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        
        "Responsive design",
        "TypeScript",
      ],
    },
    {
      title: "Backend",
      icon: LuBrain,
      color: "blue",
      tools: [
        "Next.js",
        "Testing (Vitest)",
        "AI / LLM applications",
        "Node.js",
        "Express JS",
      ],
    },
    {
      title: "Mobile App Development",
      icon: BiMobileAlt,
      color: "purple",
      tools: ["Flutter", "React Native", "Kotlin", "Firebase", "GraphQL"],
    },
  ];

  const journey = [
    {
      id: 1,
      year: "2026",
      icon: FaMobileButton,
      color: "from-cyan-500 to-blue-600",
      bgGradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      title: "Mobile Application Development",
      description:
        "Complex architectural patterns, native platform constraints, and performance management",
    },
    {
      id: 2,
      year: "2025",
      icon: LuRocket,
      color: "from-blue-500 to-indigo-600",
      bgGradient: "bg-gradient-to-br from-blue-500 to-indigo-600",
      title: "Shipping Complete Products",
      description:
        "Deep dive into software engineering, and shipping complete and scalable products that reflect the brand and identity of clients.",
    },
    {
      id: 3,
      year: "2024",
      icon: LuBrain,
      color: "from-indigo-500 to-purple-600",
      bgGradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      title: "Building Real Projects",
      description:
        "Getting into backend development and shipping statement pieces while contributing to open source works on several platforms.",
    },
    {
      id: 4,
      year: "2023",
      icon: LuPenTool,
      color: "from-purple-500 to-pink-600",
      bgGradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      title: "Deep dive into Frontend Development",
      description:
        "Figma, Canva, React Hooks, state, routing, and modern tooling & TypeScript.",
    },
    {
      id: 5,
      year: "2022",
      icon: LuCodeXml,
      color: "from-pink-500 to-rose-600",
      bgGradient: "bg-gradient-to-br from-pink-500 to-rose-600",
      title: "Fundamentals of Web Development",
      description:
        "HTML, CSS, JavaScript — the foundation everything builds on.",
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
        staggerChildren: 0.15,
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
        staggerChildren: 0.2,
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

  return (
    <div>
      {/* Skills Section */}
      <motion.section
        className="bg-linear-to-br from-slate-100 via-gray-50 to-gray-100 py-20"
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
            <Topic topic="Skillset" variant="nobg" />
            <Heading leftAlign title="Skills" />
            <Subheading
              leftAlign
              description="Some tools and skills I use daily"
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
                  color={`${skill.color}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="py-20 bg-white"
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
            className="mb-20 space-y-2"
          >
            <Topic topic="Journey" variant="nobg" />
            <Heading leftAlign title="Programming Journey" />
            <Subheading
              leftAlign
              description="From Hello World to building the future."
            />
          </motion.div>

          <motion.div
            className="flex flex-col gap-8 justify-center items-center space-y-6"
            variants={journeyContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  className="lg:ml-20 flex gap-5 text-left self-start w-full max-w-3xl"
                  variants={journeyItemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="relative">
                    <div
                      className={`w-14 h-14 flex items-center relative z-50 justify-center rounded-full ${step.bgGradient} shadow-lg group`}
                    >
                      {index !== journey.length - 1 && (
                        <div className="w-0.5 h-24 bg-linear-to-b from-cyan-500 to-purple-600 absolute top-14 left-7 z-0" />
                      )}
                      <Icon className="text-white text-2xl z-50 group-hover:scale-110 transition-all duration-300 ease-out" />
                    </div>
                  </div>

                  <motion.div
                    className="flex flex-col text-left gap-2 flex-1"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="inline-block w-auto">
                      <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent font-bold text-lg">
                        {step.year}
                      </span>
                    </div>

                    <span className="font-semibold text-xl text-gray-800">
                      {step.title}
                    </span>
                    <span className="text-gray-600 leading-relaxed">
                      {step.description}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SkillJourney;
