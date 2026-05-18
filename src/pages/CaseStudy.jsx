import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import {
  Fa4,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLightbulb,
  FaQuestion,
  FaRecordVinyl,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import Topic from "../components/Props/Topic";
import Subheading from "../components/Props/Subheading";
import { LuBusFront, LuFile, LuLightbulb, LuTarget } from "react-icons/lu";
import CTASection from "../components/Props/CTASection";
import CTASectionTwo from "../components/Props/CTASectionTwo";
import Button from "../components/ui/Button";

const CaseStudy = () => {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <section className="py-20 bg-white mt-10">
      <div className="max-w-7xl mx-auto text-left items-left px-4 py-10 space-y-8">
        <div>
          <Link
            to="/projects"
            className="flex items-center gap-2 hover:gap-3 text-gray-600 hover:text-gray-400 transition-all duration-300 text-xs my-5"
          >
            <FaArrowLeft /> <span>All Projects</span>
          </Link>

          <Topic topic={project.type} />
          <h2 className="text-3xl lg:text-5xl text-slate-800 font-bold leading-none mb-2">
            {project.title}
          </h2>

          <p className="text-leading text-slate-500 text-md">
            {project.description}
          </p>

          {/* stack */}
          <div className="flex flex-wrap my-4 items-center gap-2">
            {project.tech.map((techstack, techIndex) => (
              <span
                key={techIndex}
                className="text-xs text-slate-500 bg-slate-100 px-3 py-2 rounded-xl"
              >
                {techstack}
              </span>
            ))}
          </div>

          {/* live demo & github repo */}
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <Button
              buttonText="live demo"
              icon={FaRecordVinyl}
              path="."
              variant="secondary"
            />
            <Button
              buttonText="github"
              icon={FaGithub}
              path=".github"
              variant="primary"
            />
          </div>

          <div className=" mt-10 group ">
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-3xl group-hover:scale-101 transition-all duration-500 ease"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4"></div>

        {/* overview */}
        <div className="pt-20">
          <div className="rounded-xl bg-white border  border-slate-300 hover:shadow text-slate-600 flex flex-col gap-3 my-9 p-8">
            <LuFile className="text-teal-700 text-2xl" />
            <h3 className="font-bold text-slate-800">Project Overview</h3>
            {project.overview}
          </div>

          {/* problem and solution */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="rounded-xl bg-gray-50 border text-slate-600 border-slate-300 flex flex-col gap-3 p-6 m-2 flex-1/2 hover:shadow">
              <LuTarget className="text-teal-700 text-2xl" />
              <h2 className="font-semibold text-slate-800"> The Problem</h2>

              {project.problem}
            </div>
            <div className="rounded-xl bg-gray-50 text-slate-600 border border-slate-300 hover:shadow flex flex-col gap-3 p-6 m-2 flex-1/2">
              <FaLightbulb className="text-2xl text-teal-700" />
              <h2 className="font-semibold text-slate-800">The Solution</h2>

              {project.solution}
            </div>
          </div>
        </div>

        {/* key features */}
        <div className="my-20">
          <h2 className="text-xl font-bold">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-1 ">
            {project.features.map((feature, idx) => (
              <div
                key={idx}
                className="text-sm text-slate-800 border border-gray-300 px-5 py-3 rounded-xl flex m-2 gap-4"
              >
                <div className="w-9 h-9 rounded-full bg-emerald-900 flex items-center justify-center">
                  <LuBusFront className="text-white" />
                </div>

                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* challenges and lesson */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="rounded-xl bg-white border text-slate-600 border-slate-300 flex flex-col gap-3 p-6 m-2 flex-1/2 hover:shadow">
            <FaQuestion className="text-teal-700 text-2xl" />
            <h2 className="font-semibold text-slate-800">
              {" "}
              Challenges & Solutions
            </h2>

            {project.challenges}
          </div>
          <div className="rounded-xl bg-white text-slate-600 border border-slate-300 hover:shadow flex flex-col gap-3 p-6 m-2 flex-1/2">
            <LuLightbulb className="text-2xl text-teal-700" />
            <h2 className="font-semibold text-slate-800">Lesson learned</h2>

            {project.learned}
          </div>
        </div>

        {/* next project button  */}
        <Link
          to="/projects/next"
          className="flex items-center gap-2 hover:gap-3 text-gray-600 hover:text-gray-400 transition-all duration-300 text-xs my-15 justify-end"
        >
          <span>Next Project</span>
          <FaArrowRight />
        </Link>

        <CTASectionTwo
          buttonText="Get in touch"
          path="/contact"
          heading="Enjoying what you see?"
          description="Let's talk about your next project"
        />
      </div>
    </section>
  );
};

export default CaseStudy;
