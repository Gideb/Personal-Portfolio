import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";
import projects from "../../../data/projects";
import ProjectCard from "../ProjectCard";

const FeaturedProjects = () => {
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

  const linkVariants = {
    initial: { x: 0 },
    hover: {
      x: 5,
      transition: { duration: 0.2 },
    },
  };

  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const viewAllVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.6 },
    },
  };

  return (
    <motion.section
      className="bg-linear-to-br from-white via-gray-50 to-white w-full py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          variants={headerVariants}
          className="text-left mb-12 space-y-3"
        >
          <Topic topic="selected work" variant="nobg" />

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <Heading leftAlign title="Featured Projects" />

            <motion.div
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-all duration-300"
              >
                <span className="text-sm font-medium">View all projects</span>
                <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>

          <Subheading
            leftAlign
            description="A glimpse of what I've created. Each project represents my commitment to clean code and creative excellence."
          />
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div
          variants={projectsContainerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          
          {projects.slice(0, 4).map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button (Mobile Friendly) */}
        <motion.div
          variants={viewAllVariants}
          className="text-center md:hidden"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            <span>View All Projects</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </motion.div>

        {/* Optional: Stats or Quote Section */}
        <motion.div
          variants={viewAllVariants}
          className="mt-16 pt-8 border-t border-gray-200 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 bg-linear-to-r from-cyan-50 to-blue-50 px-6 py-4 rounded-2xl"
          >
            <HiOutlineSparkles className="text-cyan-600 text-xl" />
            <p className="text-gray-700">
              <span className="font-semibold">10+ projects</span> shipped in the
              last year
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturedProjects;
