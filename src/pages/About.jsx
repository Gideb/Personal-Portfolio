import React from "react";
import AboutMe from "../components/sections/aboutpage/AboutMe";
import SkillJourney from "../components/sections/aboutpage/SkillJourney";
import CTASectionTwo from "../components/Props/CTASectionTwo";
import { FaPhoneFlip } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <AboutMe />
      <SkillJourney />
      <CTASectionTwo
        buttonText="Say Hello"
        buttonicon={FaPhoneFlip}
        path="/contact"
        heading="Ready to collaborate?"
        description="Whether it's a project, an internship, or just a conversation about the web — I'm in."
      />
    </div>
  );
};

export default About;
