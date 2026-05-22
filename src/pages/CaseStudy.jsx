import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaRecordVinyl,
} from "react-icons/fa6";
import {
  LuLightbulb,
  LuInfo,
  LuListChecks,
  LuGraduationCap,
  LuSparkles,
} from "react-icons/lu";
import projects from "../data/projects";
import Topic from "../components/Props/Topic";
import CTASectionTwo from "../components/Props/CTASectionTwo";
import Button from "../components/ui/Button";
import { FiAlertTriangle, FiGrid } from "react-icons/fi";
import { HiOutlinePuzzle } from "react-icons/hi";

// Helper component for info cards with animation
const InfoCard = ({
  icon: Icon,
  title,
  children,
  bgColor = "bg-white",
  delay = 0,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={`rounded-xl ${bgColor} border border-gray-200 hover:shadow-xl transition-all duration-300 flex flex-col gap-4 p-8 flex-1 hover:border-cyan-200`}
  >
    <div className="flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.4 }}
        className="p-2 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-lg"
      >
        <Icon className="text-cyan-600 text-xl" />
      </motion.div>
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
    </div>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </motion.div>
);

const FeatureCard = ({ feature, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    whileHover={{ x: 5, transition: { duration: 0.2 } }}
    className="group flex items-start gap-4 p-4 rounded-xl border border-gray-200 bg-white hover:shadow-md hover:border-cyan-200 transition-all duration-300"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 90 }}
      transition={{ duration: 0.3 }}
      className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0"
    >
      <LuListChecks className="text-white text-lg" />
    </motion.div>
    <span className="text-gray-700 leading-relaxed">{feature}</span>
  </motion.div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
    exit: { opacity: 0 },
  };

  const headerVariants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const techStackVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, delayChildren: 0.3 },
    },
  };

  const techItemVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
  };

  const navVariants = {
    initial: { opacity: 0, y: 30 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.6 },
    },
  };

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="text-4xl font-bold text-gray-800 mb-4"
          >
            Project Not Found
          </motion.h1>
          <Link
            to="/projects"
            className="text-cyan-600 hover:text-cyan-700 underline inline-flex items-center gap-2"
          >
            <FaArrowLeft className="text-sm" />
            Back to Projects
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key={slug}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-gradient-to-br from-white via-gray-50 to-white mt-15"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          {/* Navigation Back Button */}
          <motion.div variants={headerVariants}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-all duration-300 text-sm group mb-8"
            >
              <motion.div whileHover={{ x: -5 }} transition={{ duration: 0.2 }}>
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              </motion.div>
              <span>Back to All Projects</span>
            </Link>
          </motion.div>

          {/* Header Section */}
          <div className="max-w-4xl">
            <motion.div variants={headerVariants}>
              <Topic topic={project.category} variant="nobg" />
            </motion.div>

            <motion.h1
              variants={headerVariants}
              className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent leading-none mt-4 mb-4"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={headerVariants}
              className="text-lg lg:text-xl text-gray-500 leading-relaxed mb-6"
            >
              {project.description}
            </motion.p>

            {/* Tech Stack */}
            <motion.div
              variants={techStackVariants}
              initial="initial"
              animate="animate"
              className="flex flex-wrap gap-2 mb-8"
            >
              {project.tech.map((tech, index) => (
                <motion.span
                  key={index}
                  variants={techItemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-sm text-cyan-600 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full hover:shadow-sm transition-all duration-200"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={headerVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button
                buttonText="Live Demo"
                icon={FaRecordVinyl}
                path="."
                variant="cyan"
              />
              <Button
                buttonText="GitHub Repository"
                icon={FaGithub}
                path=".github"
                variant="primary"
              />
            </motion.div>

            {/* Hero Image */}
            <motion.div
              variants={imageVariants}
              className="rounded-2xl overflow-hidden shadow-xl mb-16"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>

          {/* Overview Section */}
          <div className="mb-20">
            <InfoCard
              icon={LuInfo}
              title="Project Overview"
              bgColor="bg-gradient-to-br from-gray-50 to-white"
              delay={0.1}
            >
              {project.overview}
            </InfoCard>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <InfoCard icon={FiAlertTriangle} title="The Problem" delay={0.2}>
              {project.problem}
            </InfoCard>
            <InfoCard icon={LuLightbulb} title="The Solution" delay={0.3}>
              {project.solution}
            </InfoCard>
          </div>

          {/* Key Features Section */}
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-50 to-blue-50 px-4 py-2 rounded-full mb-4"
              >
                <LuSparkles className="text-cyan-600" />
                <span className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">
                  Features
                </span>
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Key Features
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Discover what makes this project unique and impactful
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, idx) => (
                <FeatureCard key={idx} feature={feature} index={idx} />
              ))}
            </div>
          </div>

          {/* Challenges & Learnings Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <InfoCard
              icon={HiOutlinePuzzle}
              title="Challenges & Solutions"
              delay={0.4}
            >
              {project.challenges}
            </InfoCard>
            <InfoCard
              icon={LuGraduationCap}
              title="Lessons Learned"
              delay={0.5}
            >
              {project.learned}
            </InfoCard>
          </div>

          {/* Navigation Section between projects */}
          <motion.div
            variants={navVariants}
            className="flex justify-between gap-3 lg:gap-0 items-center pt-12 border-t border-gray-200 mt-12"
          >
            {/* Previous Project */}
            {prevProject && (
              <motion.div whileHover={{ x: -5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="group flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl hover:border-cyan-500 transition-all duration-300"
                >
                  <FaArrowLeft className="text-gray-500 group-hover:-translate-x-1 transition-transform duration-300" />
                  <div className="text-left">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      Previous
                    </span>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-cyan-600">
                      {prevProject.title}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )}

            {/* Placeholder for spacing when no previous project */}
            {!prevProject && <div />}

            {/* Next Project */}
            {nextProject && (
              <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="group flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-xl hover:border-cyan-500 transition-all duration-300 text-right"
                >
                  <div className="text-right">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      Next
                    </span>
                    <p className="text-sm font-medium text-gray-700 group-hover:text-cyan-600">
                      {nextProject.title}
                    </p>
                  </div>
                  <FaArrowRight className="text-gray-500 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* CTA Section */}
        <CTASectionTwo
          buttonText="Get in touch"
          path="/contact"
          heading="Enjoying what you see?"
          description="Let's collaborate on your next big idea"
        />
      </motion.section>
    </AnimatePresence>
  );
};

export default CaseStudy;
