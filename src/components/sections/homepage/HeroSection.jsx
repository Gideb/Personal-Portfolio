import React from "react";
import Topic from "../../Props/Topic";
import { FaProjectDiagram } from "react-icons/fa";
import Button from "../../ui/Button";
import { FaPenToSquare } from "react-icons/fa6";
import { HiOutlineSparkles } from "react-icons/hi2";
import Subheading from "../../Props/Subheading";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="scroll-mt-16 relative mt-10 sm:mt-5  w-full overflow-hidden bg-[#F9F6F0] py-8 sm:py-8 lg:py-22 "
      aria-label="Hero section"
    >
      <div className="z-10 mt-10 px-4 lg:px-7 max-w-7xl mx-auto py-10 items-center my-5 space-y-10 flex">
        <div className="space-y-5 ">
          <Topic
            icon={HiOutlineSparkles}
            topic="Available for middle level roles"
            variant="bg"
          />

          <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black leading-tight ">
            Hi, I Am{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-teal-700 via-amber-300 to-emerald-700">
              Gilbert
            </span>
            . I Build Clean Web Experiences.
          </h2>
          <Subheading
            leftAlign
            description="Front-end developer crafting fast, accessible, user-foccused
            interfaces with TypeScript, JavaScript, React and CSS."
          />
          <div className="flex flex-col md:flex-row gap-4 pt-1">
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
