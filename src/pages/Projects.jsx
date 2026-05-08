import React from "react";
import ProjectCard from "../components/sections/ProjectCard";
import projects from "../data/projects";


const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
