import React from "react";
import HeroSection from "../components/sections/homepage/HeroSection";
import ProjectHighlight from "../components/sections/homepage/FeaturedProjects.jsx";
import SkillsPreview from "../components/sections/homepage/SkillsPreview.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsPreview />
      <ProjectHighlight />
    </div>
  );
};

export default Home;
