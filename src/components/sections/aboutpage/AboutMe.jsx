import React from "react";
import { HiOutlineSparkles } from "react-icons/hi";
import Subheading from "../../Props/Subheading";
import Topic from "../../Props/Topic";

const AboutMe = () => {
  return (
    <section className="bg-white py-20 w-full">
      <div className="max-w-7xl mx-auto z-10 mt-10 px-4 lg:px-7 py-10 items-center my-5 space-y-10 ">
        <div className="space-y-5 ">
          <Topic topic="About" />

          <h2 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl font-black leading-none ">
            Curious developer with a love for the {""}
            <span className="bg-clip-text text-transparent bg-linear-to-r from-rose-700 via-amber-300 to-pink-700">
              web
            </span>
            .
          </h2>

          <div className="space-y-6">
            <Subheading
              leftAlign
              description="I am Gideb - a middle-level software developer focused on TypeScript, JavaScript and React. My journey into tech started with a simple curiosity about how websites work, and quickly turned into a craft I genuinely enjoy."
            />
            <Subheading
              leftAlign
              description="I love building interfaces that feel quick, clear, and considered. Outside of front-end work, I'm exploring two areas that fascinat me: AI/LLM tooling and the foundatons of cybersecurity. I believe great developers stay curious."
            />
            <Subheading
              leftAlign
              description="My goal: land a middle-level software developer role where I can ship real product, learn from senior engineers, and keep growing."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
