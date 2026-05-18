import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaRecordVinyl,
} from "react-icons/fa6";
import {
  LuLightbulb,
  LuInfo,
  LuListChecks,
  LuGraduationCap,
} from "react-icons/lu";
import projects from "../data/projects";
import Topic from "../components/Props/Topic";
import CTASectionTwo from "../components/Props/CTASectionTwo";
import Button from "../components/ui/Button";
import { FiAlertTriangle, FiGrid } from "react-icons/fi";
import { HiOutlinePuzzle } from "react-icons/hi";

// Helper component for info cards
const InfoCard = ({ icon: Icon, title, children, bgColor = "bg-white" }) => (
  <div
    className={`rounded-xl ${bgColor} border border-slate-200 hover:shadow-lg transition-all duration-300 flex flex-col gap-4 p-8 flex-1`}
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-rose-100 rounded-lg">
        <Icon className="text-rose-600 text-xl" />
      </div>
      <h3 className="font-semibold text-slate-800 text-lg">{title}</h3>
    </div>
    <div className="text-slate-600 leading-relaxed">{children}</div>
  </div>
);

const FeatureCard = ({ feature, index }) => (
  <div className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-rose-200 transition-all duration-300">
    <div className="w-10 h-10 rounded-lg bg-linear-to-br from-rose-600 to-pink-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
      <LuListChecks className="text-white text-lg" />
    </div>
    <span className="text-slate-700 leading-relaxed">{feature}</span>
  </div>
);

const CaseStudy = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[currentIndex + 1];
  const prevProject = projects[currentIndex - 1];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="text-rose-600 hover:text-rose-700 underline"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-white mt-15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Navigation */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-all duration-300 text-sm group mb-8"
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
            icon={LuInfo}
            title="Project Overview"
            bgColor="bg-slate-50"
          >
            {project.overview}
          </InfoCard>
        </div>
        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <InfoCard icon={FiAlertTriangle} title="The Problem">
            {project.problem}
          </InfoCard>
          <InfoCard icon={LuLightbulb} title="The Solution">
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
          <InfoCard icon={HiOutlinePuzzle} title="Challenges & Solutions">
            {project.challenges}
          </InfoCard>
          <InfoCard icon={LuGraduationCap} title="Lessons Learned">
            {project.learned}
          </InfoCard>
        </div>


        {/* Navigation Section */}
        <div className="flex justify-between gap-3 lg:gap-0 items-center pt-12 border-t border-slate-200 dark:border-slate-700 mt-12">

          
          {/* Previous Project */}
          {prevProject && (
            <Link
              to={`/projects/${prevProject.slug}`}
              className="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
            >
              <FaArrowLeft className="text-slate-500 group-hover:-translate-x-1 transition-transform duration-300" />
              <div className="text-left">
                <span className="text-xs text-slate-400 uppercase tracking-wide">
                  Previous
                </span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600">
                  {prevProject.title}
                </p>
              </div>
            </Link>
          )}

          {/* Placeholder for spacing when no previous project */}
          {!prevProject && <div />}

          {/* Next Project */}
          {nextProject && (
            <Link
              to={`/projects/${nextProject.slug}`}
              className="group flex items-center gap-3 px-5 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 text-right"
            >
              <div className="text-right">
                <span className="text-xs text-slate-400 uppercase tracking-wide">
                  Next
                </span>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary-600">
                  {nextProject.title}
                </p>
              </div>
              <FaArrowRight className="text-slate-500 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>

        {/* CTA Section */}
      </div>
      <CTASectionTwo
        buttonText="Get in touch"
        path="/contact"
        heading="Enjoying what you see?"
        description="Let's collaborate on your next big idea"
      />
    </section>
  );
};

export default CaseStudy;
