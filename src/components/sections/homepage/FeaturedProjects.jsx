import React from "react";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import projects from "../../../data/projects";

import ProjectCard from "../ProjectCard";

const FeaturedProjects = () => {
  return (
    <section className="bg-white w-full py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16 space-y-2">
          <Topic topic="selected work" />

          <Link
            to="/projects"
            className="flex items-center justify-between hover:text-teal-700"
          >
            <Heading leftAlign
              title="Featured Projects"
              className="hover:text-teal-700"
            />

            <div className="flex gap-3 hover:gap-4 items-center ">
              <span>View all</span>
              <FaArrowRight className="text-sm" />
            </div>
          </Link>

          <Subheading leftAlign description="A glimpse of what we've created for our clients. Each project represents our commitment to excellence." />
        </div>

        {/* featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8 mb-16">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
