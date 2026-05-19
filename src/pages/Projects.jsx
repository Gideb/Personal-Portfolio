import React, { useState } from "react";
import ProjectCard from "../components/sections/ProjectCard";
import projects from "../data/projects";
import CTASection from "../components/Props/CTASection";
import Heading from "../components/Props/Heading";
import Subheading from "../components/Props/Subheading";

import Topic from "../components/Props/Topic";
import { FaFolder } from "react-icons/fa6";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  // project Categories
  const categories = [
    { id: "all", name: "All" },
    { id: "Frontend", name: "Frontend" },
    { id: "Backend", name: "Backend" },
    { id: "Full Stack", name: "Full Stack" },
    { id: "UI", name: "Web Design" },
    { id: "Web Application", name: "Web Application" },
    { id: "Web Development", name: "Web Development" },
    { id: "Mobile", name: "Mobile Application" },
    { id: "Branding", name: "Brand Experience" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <>
      <div className="w-full mt-20 py-20">
        <div className=" max-w-7xl mx-auto mt-10 px-4 lg:px-7 py-10 items-center my-5 space-y-10 ">
          <div className="space-y-3 ">
            <Topic topic="Projects" />
            <Heading leftAlign title="Projects I've built" />
            <Subheading
              leftAlign
              description="A selection of projects exploring layout, state, and my craft."
            />
          </div>

          <div>
            {/* Categories */}
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 grid gap-6 md:grid-cols-2  order-2 lg:order-1">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              <div className="lg:col-span-1 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-md mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <ul className="space-y-3">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`w-full flex items-center justify-between p-2 rounded-lg transition ${
                            selectedCategory === category.id
                              ? "bg-linear-to-r from-rose-50 to-pink-50 text-rose-600"
                              : "hover:bg-pink-50/45"
                          }`}
                        >
                          <span className="flex items-center gap-5">
                            <FaFolder
                              className={
                                selectedCategory === category.id
                                  ? "text-rose-600"
                                  : "text-gray-400"
                              }
                            />
                            {category.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default Projects;
