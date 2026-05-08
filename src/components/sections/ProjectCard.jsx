import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaEye } from "react-icons/fa6";

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(null);

  // eslint-disable-next-line no-unused-vars
  const hoveredProject = isHovered === project.id;

  return (
    <div
      className="group relative overflow-hidden border-2 border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 m-3"
      onMouseEnter={() => setIsHovered(project.id)}
      onMouseLeave={() => setIsHovered(null)}
    >
      <Link to={`/projects/${project.slug}`} className="flex flex-col ">
        {/* image container */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full group-hover:scale-105 transition duration-500 ease-out"
          />
          {/* dark overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* view button */}
          <div className="absolute inset-0 items-center justify-center opacity-0 transition-all group-hover:opacity-100 flex duration-500 ">
            <Link
              to={`/projects/${project.slug}`}
              className="flex items-center text-white gap-2 bg-teal-600 p-4 shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 font-medium hover:bg-teal-800"
            >
              <FaEye />
              View Project
            </Link>
          </div>
        </div>

        {/* content */}
        <div className=" space-y-4 bg-white p-6">
          <div className="flex items-center justify-between">
            {/* title */}
            <h2 className="text-gray-800 text-md font-semibold group-hover:text-teal-700">
              {project.title}
            </h2>

            {/* icon */}
            <BsArrowUpRightSquare className="text-md text-gray-500 group-hover:text-teal-700 group-hover:text-xl transition-all duration-500" />
          </div>

          {/* description */}
          <p className="text-gray-500 text-xs">{project.description}</p>

          {/* stack */}
          <div className="flex flex-wrap mb-4 items-center gap-2">
            {project.tech.map((techstack, techIndex) => (
              <span
                key={techIndex}
                className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded"
              >
                {techstack}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
