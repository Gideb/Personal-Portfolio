import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaLightbulb,
  FaQuestion,
  FaRecordVinyl,
} from "react-icons/fa6";
import { LuBusFront, LuFile, LuTarget, LuLightbulb } from "react-icons/lu";
import projects from "../data/projects";
import Topic from "../components/Props/Topic";
import CTASectionTwo from "../components/Props/CTASectionTwo";
import Button from "../components/ui/Button";

// Helper component for info cards
const InfoCard = ({ icon: Icon, title, children, bgColor = "bg-white" }) => (
  <div
    className={`rounded-xl ${bgColor} border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 p-8 flex-1`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-teal-100 rounded-lg">
        <Icon className="text-teal-600 text-xl" />
      </div>
      <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
    </div>
    <div className="text-slate-600 leading-relaxed">{children}</div>
  </div>
);

const FeatureCard = ({ feature, index }) => (
  <div className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-teal-200 transition-all duration-300">
    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-teal-600 to-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
      <LuBusFront className="text-white text-lg" />
    </div>
    <span className="text-slate-700 leading-relaxed">{feature}</span>
  </div>
);


const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-teal-600 hover:text-teal-700 underline"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 transition-all duration-300 text-sm group mb-8"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to All Projects</span>
        </Link>

        {/* Header Section */}
        <div className="max-w-4xl">
          <Topic topic={project.type} />
          <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-none mt-4 mb-4">
            {project.title}
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="text-sm text-slate-600 bg-slate-100 px-4 py-2 rounded-full hover:bg-slate-200 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              buttonText="Live Demo"
              icon={FaRecordVinyl}
              path="."
              variant="secondary"
            />
            <Button
              buttonText="GitHub Repository"
              icon={FaGithub}
              path=".github"
              variant="primary"
            />
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-16">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Overview Section */}
        <div className="mb-20">
          <InfoCard
            icon={LuFile}
            title="Project Overview"
            bgColor="bg-slate-50"
          >
            {project.overview}
          </InfoCard>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <InfoCard icon={LuTarget} title="The Problem">
            {project.problem}
          </InfoCard>
          <InfoCard icon={FaLightbulb} title="The Solution">
            {project.solution}
          </InfoCard>
        </div>

        {/* Key Features Section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              Key Features
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Discover what makes this project unique and impactful
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} index={idx} />
            ))}
          </div>
        </div>

        {/* Challenges & Learnings Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <InfoCard icon={FaQuestion} title="Challenges & Solutions">
            {project.challenges}
          </InfoCard>
          <InfoCard icon={LuLightbulb} title="Lessons Learned">
            {project.learned}
          </InfoCard>
        </div>

        {/* Next Project Navigation */}
        <div className="flex justify-end mb-20">
          <Link
            to="/projects/next"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-teal-600 text-white rounded-full transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
          >
            <span>Next Project</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* CTA Section */}
        <CTASectionTwo
          buttonText="Get in touch"
          path="/contact"
          heading="Enjoying what you see?"
          description="Let's collaborate on your next big idea"
        />
      </div>
    </section>
  );
};

export default CaseStudy;
