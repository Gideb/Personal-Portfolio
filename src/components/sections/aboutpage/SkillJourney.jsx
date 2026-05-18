import React from "react";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import Card from "../../ui/Card";
import {
  LuBrain,
  LuCode,
  LuCodeXml,
  LuPenTool,
  LuRabbit,
  LuRocket,
} from "react-icons/lu";
import { BiMobileAlt } from "react-icons/bi";
import { FaMobileButton } from "react-icons/fa6";

const SkillJourney = () => {
  const skillSet = [
    {
      title: "Frontend",
      icon: LuPenTool,
      color: "rose",
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        "React Router",
        "Responsive design",
        "TypeScript",
      ],
    },
    {
      title: "Backend",
      icon: LuBrain,
      color: "amber",
      tools: [
        "Next.js",
        "Testing (Vitest)",
        "AI / LLM applications",
        "Node.js",
        "Express JS",
      ],
    },
    {
      title: "Mobile App Development",
      icon: BiMobileAlt,
      color: "rose",
      tools: ["Flutter", "React Native", "Kotlin", "Firebase", "GraphQL"],
    },
  ];

  const journey = [
    {
      id: 1,
      year: "2026",
      icon: FaMobileButton,
      color: "bg-rose-900",
      title: "Mobile Application Development",
      description:
        "Complex architectural patterns, native platform constraints, and performance management",
    },
    {
      id: 2,
      year: "2025",
      icon: LuRocket,
      color: "bg-rose-800",
      title: "Shipping Complete Products",
      description:
        "Deep dive into software engineering, and shipping complete and scalable products that reflect the brand and identity of clients.",
    },
    {
      id: 3,
      year: "2024",
      icon: LuBrain,
      color: "bg-rose-700",
      title: "Building Real Projects",
      description:
        "Getting into backend development and shipping statement pieces while contributing to open source works on several platforms.",
    },
    {
      id: 4,
      year: "2023",
      icon: LuPenTool,
      color: "bg-rose-600",
      title: "Deep dive into Frontend Development",
      description:
        "Figm, Canva, React Hooks, state, routing, and modern tooling & TypeScript.",
    },
    {
      id: 5,
      year: "2022",
      icon: LuCodeXml,
      color: "bg-rose-600",
      title: "Fundamentals of Web Development",
      description:
        "HTML, CSS, JavaScript — the foundation everything builds on.",
    },
  ];

  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto py-10 mt-10 px-4 lg:px-7">
          <div className="mb-10 space-y-2">
            <Topic topic="Skillset" />

            <Heading leftAlign title="Skills" />

            <Subheading
              leftAlign
              description="Some tools and skills I use daily"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {skillSet.map((skill, index) => (
              <Card
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.tools.map((tool) => `• ${tool}`).join(" \n")}
                color={`${skill.color}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto py-10 mt-10 px-4 lg:px-7">
          <div className="mb-20 space-y-2">
            <Topic topic="Journey" />

            <Heading leftAlign title="Programming Journey" />

            <Subheading
              leftAlign
              description="From Hello World to building the future. "
            />
          </div>

          <div className="flex flex-col gap-8 justify-center items-center space-y-6">
            {journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="lg:ml-20  flex gap-5 text-left self-start "
                >
                  <div
                    className={`w-14 h-14 flex items-center relative z-50  justify-center rounded-full ${step.color} bg-rose-100 group`}
                  >
                    <div className="w-0.5 h-25 bg-rose-900 absolute lg:top-14 lg:left-7 z-0" />
                    <Icon className="text-white text-2xl z-50 group-hover:text-3xl transition-all duration-300 ease-out" />
                  </div>

                  <div className="flex flex-col text-left gap-2">
                    <div className="w-13 h-6 bg-rose-100">
                      <span className="text-rose-700 pl-2 font-semibold ">
                        {step.year}
                      </span>
                    </div>

                    <span className="font-semibold text-xl">{step.title}</span>
                    <span className=" text-xs">{step.description}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillJourney;
