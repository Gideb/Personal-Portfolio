import { useState, useEffect, useRef } from "react";
import ProjectCard from "../components/sections/ProjectCard";
import projects from "../data/projects";
import CTASection from "../components/Props/CTASection";
import Heading from "../components/Props/Heading";
import Subheading from "../components/Props/Subheading";
import Topic from "../components/Props/Topic";
import { FaFolder, FaFolderOpen } from "react-icons/fa6";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isMobile, setIsMobile] = useState(false);
  const hasMounted = useRef(false);

  // Prevent duplicate mounting
  useEffect(() => {
    if (hasMounted.current) return;
    hasMounted.current = true;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // project Categories
  const categories = [
    { id: "all", name: "All" },
    { id: "Web Application", name: "Web Application" },
    { id: "Web Development", name: "Web Development" },
    { id: "Mobile Application", name: "Mobile Application" },
    { id: "Branding", name: "Brand Experience" },
    { id: "Content Creation", name: "Content Creation" },
    { id: "Graphics Design", name: "Graphics Design" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesCategory;
  });

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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projectsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Don't render anything until mobile detection is complete
  if (isMobile === undefined) return null;

  return (
    <motion.div
      className="w-full mt-20 py-20 bg-linear-to-br from-gray-50 via-white to-gray-50 relative"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto mt-10 px-4 lg:px-7 py-10 items-center my-5 space-y-10">
        {/* Header Section */}
        <motion.div variants={headerVariants} className="space-y-3">
          <Topic topic="Projects" variant="nobg" />
          <Heading leftAlign title="Projects I've built" />
          <Subheading
            leftAlign
            description="A selection of projects exploring layout, state, and my craft."
          />
        </motion.div>

        {/* Main Content */}
        <div>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Projects Grid */}
            <motion.div
              className="lg:col-span-2 order-2 lg:order-1"
              variants={projectsContainerVariants}
              initial="hidden"
              animate="visible"
              // Prevent pointer event blocking
              style={{ pointerEvents: "auto" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid gap-6 md:grid-cols-2"
                >
                  {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                      <motion.div
                        key={`${project.id}-${selectedCategory}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        // Ensure unique keys and proper stacking
                        style={{
                          position: "relative",
                          zIndex: 1,
                          pointerEvents: "auto",
                        }}
                      >
                        <ProjectCard project={project} />
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-2 text-center py-20"
                    >
                      <p className="text-gray-500 text-lg">
                        No projects found in this category
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Categories Sidebar */}
            <motion.div
              className="lg:col-span-1 order-1 lg:order-2"
              variants={sidebarVariants}
              style={{ pointerEvents: "auto", zIndex: 2 }}
            >
              <motion.div
                whileHover={!isMobile ? { y: -5 } : {}}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 lg:sticky lg:top-24"
              >
                <motion.h3
                  className="text-xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Categories
                </motion.h3>

                <ul className="space-y-2">
                  {categories.map((category) => (
                    <motion.li
                      key={category.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={!isMobile ? { scale: 1.02, x: 5 } : {}}
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        delay: categories.indexOf(category) * 0.03,
                      }}
                    >
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                          selectedCategory === category.id
                            ? "bg-linear-to-r from-cyan-50 to-blue-50 text-cyan-600 shadow-sm"
                            : "hover:bg-gray-50 text-gray-700 hover:text-cyan-600"
                        }`}
                      >
                        <span className="flex items-center gap-3 font-medium group">
                          {selectedCategory === category.id ? (
                            <FaFolderOpen className="text-cyan-500 text-lg" />
                          ) : (
                            <FaFolder className="text-gray-400 group-hover:text-cyan-400 text-lg" />
                          )}
                          {category.name}
                        </span>

                        {selectedCategory === category.id && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                          />
                        )}
                      </button>
                    </motion.li>
                  ))}
                </ul>

                {/* Category Stats */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-gray-500">
                    Showing {filteredProjects.length} of {projects.length}{" "}
                    projects
                  </p>
                  <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(filteredProjects.length / projects.length) * 100}%`,
                      }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="h-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <CTASection />
    </motion.div>
  );
};

export default Projects;
