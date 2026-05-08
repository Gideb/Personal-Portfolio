import React from "react";
import Topic from "../../Props/Topic";
import { FaHandSparkles, FaPhoneSquare, FaProjectDiagram } from "react-icons/fa";
import Button from "../../ui/Button";
import { FaPenToSquare } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-16 relative mt-10 sm:mt-5  w-full overflow-hidden bg-white py-8 sm:py-8 lg:py-22"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto bg-white items-center my-5 space-y-8 flex">
        <div className="space-y-5">
          <Topic
            color="purple"
            icon={FaHandSparkles}
            topic="Available for middle level roles"
            variant="bg"
          />

          <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Hi I am{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-700 via-amber-300 to-emerald-700">
              Gilbert{" "}
            </span>
            . I build clean web experiences.
          </h2>
          <p className="max-w-3xl text-xl sm:text-lg text-gray-500">
            Front-end developer crafting fast, accessible, user-foccused
            interfaces with TypeScript, JavaScript, React and CSS.
          </p>
<div className="flex sm:flex-col md:flex-row gap-3">
  <Button
            buttonText="View Projects"
            icon={FaProjectDiagram}
            path="/projects"
            variant="secondary"
          />

          <Button
            buttonText="Contact Me"
            icon={FaPenToSquare}
            path="/contact"
            variant="primary"
          />
</div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
