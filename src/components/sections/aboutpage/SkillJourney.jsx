import React from "react";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import Card from "../../ui/Card";
import { LuPenTool } from "react-icons/lu";

const SkillJourney = () => {
  const skillSet = [
    {
      title: "Frontend",
      icon: LuPenTool,
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        "React Router",
        "Responsive design",
      ],
    },
    {
      title: "Backend",
      icon: LuPenTool,
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        "React Router",
        "Responsive design",
      ],
    },
    {
      title: "Frontend",
      icon: LuPenTool,
      tools: [
        "HTML5",
        "CSS3 / Tailwind",
        "JavaScript",
        "React",
        "React Router",
        "Responsive design",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto py-10 mt-10 px-4 lg:px-7">
        <div className="">
          <Topic topic="Skillset" />

          <Heading leftAlign title="Skills" />

          <Subheading
            leftAlign
            description="Some tools and skills I use daily"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillSet.map((skill, index) => (
              <Card
                key={index}
                title={skill.title}
                icon={skill.icon}
                description={skill.tools.map((tool) => `• ${tool}`).join(" \n")}
                color="teal"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillJourney;
