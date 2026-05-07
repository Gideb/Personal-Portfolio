import React from "react";
import HeroSection from "../components/sections/homepage/HeroSection";
import ProjectHighlight from "../components/sections/homepage/FeaturedProjects.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProjectHighlight />
    </div>
  );
};

export default Home;
