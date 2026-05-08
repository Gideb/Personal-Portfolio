import React from "react";
import HeroSection from "../components/sections/homepage/HeroSection";
import FeaturedProjects from "../components/sections/homepage/FeaturedProjects.jsx";
import SkillsPreview from "../components/sections/homepage/SkillsPreview.jsx";
import AboutPreview from "../components/sections/homepage/AboutPreview.jsx";
import CTASection from "../components/Props/CTASection.jsx";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsPreview />
      <FeaturedProjects />
      <AboutPreview />
      <CTASection />
    </div>
  );
};

export default Home;
