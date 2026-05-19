import React, { useState } from "react";
import ProjectCard from "../components/sections/ProjectCard";
import projects from "../data/projects";
import CTASection from "../components/Props/CTASection";
import Heading from "../components/Props/Heading";
import Subheading from "../components/Props/Subheading";

import Topic from "../components/Props/Topic";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // project Categories
  const categories = [
    { id: "all", name: "All" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
    { id: "web-design", name: "Web Design" },
    { id: "web-development", name: "Web Development" },
    { id: "mobile-development", name: "Mobile Development" },
    { id: "branding", name: "Branding" },
  ];

  const choices = ["All", "Frontend", "Backend", "UI", "React", "Javascript"];

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
            <div className="flex gap-3 items-start my-10">
              {choices.map((choice) => (
                <span className="px-4 py-2 rounded-3xl border border-zinc-500 hover:border-rose-700 text-slate-500 hover:text-rose-900 bg-gray-200 hover:bg-gray-100 transition-all ease duration-500 cursor-pointer">
                  {choice}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CTASection />
    </>
  );
};

export default Projects;
