import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
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

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.08, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
  };

  const buttonVariants = {
    initial: { y: 20, opacity: 0 },
    hover: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 15 },
    },
  };

  const iconVariants = {
    initial: { rotate: 0, x: 0 },
    hover: {
      rotate: 45,
      x: 5,
      transition: { duration: 0.3 },
    },
  };

  const techVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      className="group relative overflow-hidden border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500 bg-white"
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/projects/${project.slug}`} className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            variants={imageVariants}
            initial="initial"
            whileHover="hover"
          />

          {/* Dark Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
            variants={overlayVariants}
            initial="initial"
            whileHover="hover"
          />

          {/* View Button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg font-medium"
            >
              <FaEye className="text-sm" />
              <span>View Project</span>
            </motion.div>
          </motion.div>

          {/* Category Badge */}
          {project.category && (
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileHover={{ x: 0, opacity: 1 }}
              className="absolute top-4 left-4"
            >
              <span className="text-xs font-semibold px-3 py-1.5 bg-white/90 backdrop-blur-sm text-cyan-600 rounded-full shadow-sm">
                {project.category}
              </span>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3 bg-white p-6 flex-1">
          <div className="flex items-start justify-between gap-3">
            {/* Title */}
            <motion.h2
              className="text-gray-800 text-lg font-bold group-hover:text-cyan-600 transition-colors duration-300 line-clamp-1"
              whileHover={{ x: 3 }}
            >
              {project.title}
            </motion.h2>

            {/* Icon */}
            <motion.div
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              <BsArrowUpRightSquare className="text-lg text-gray-400 group-hover:text-cyan-600 transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {project.tech.slice(0, 4).map((techstack, techIndex) => (
              <motion.span
                key={techIndex}
                variants={techVariants}
                initial="initial"
                whileHover="hover"
                className="text-xs text-cyan-600 bg-gradient-to-r from-cyan-50 to-blue-50 px-2.5 py-1 rounded-lg font-medium"
              >
                {techstack}
              </motion.span>
            ))}
            {project.tech.length > 4 && (
              <span className="text-xs text-gray-400 bg-gray-100 px-2.5 py-1 rounded-lg">
                +{project.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Project Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="flex items-center gap-4 pt-3 mt-2 border-t border-gray-100"
          >
            {project.year && (
              <div className="flex items-center gap-1">
                <span className="text-xs text-gray-400">📅</span>
                <span className="text-xs text-gray-500">{project.year}</span>
              </div>
            )}
            {project.featured && (
              <div className="flex items-center gap-1">
                <HiOutlineSparkles className="text-xs text-amber-500" />
                <span className="text-xs text-gray-500">Featured</span>
              </div>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
