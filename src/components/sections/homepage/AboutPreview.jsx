import React from "react";
import { FaCode } from "react-icons/fa6";
import Subheading from "../../Props/Subheading";
import Heading from "../../Props/Heading";
import Button from "../../ui/Button";
import { BsArrowUpRightSquare } from "react-icons/bs";

const AboutPreview = () => {
  return (
    <section className="bg-gray-50 text-center w-full">
      <div className="max-w-7xl mx-auto py-20 px-4 lg:px-7">
        <div className="border-2 border-gray-200 p-6 rounded-2xl space-y-7 text-left bg-linear-to-br from-white via-white/50 to-gray-50 pl-15 shadow py-10">
          <FaCode className="text-rose-800 text-3xl my-3" />

          <Heading leftAlign title="A bit About Me" />
          <Subheading
            leftAlign
            description="I'm a junior front-end developer with a passion for crafting interfaces that feel effortless. I'm currently sharpening my React skills while exploring AI and cybersecurity on the side."
          />

          <Button
            buttonText="Read Full Story"
            icon={BsArrowUpRightSquare}
            path="/about"
            variant="primary"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
