import React from "react";
import { FaPen } from "react-icons/fa";
import Card from "../../ui/Card";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";
import { BsJavascript } from "react-icons/bs";
import { FaCss3Alt, FaNodeJs, FaReact } from "react-icons/fa6";
import { TbBrandTypescript } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";

const SkillsPreview = () => {
  const skills = [
    {
      title: "Vanilla CSS",
      description: "Modern layouts & animations",
      icon: FaCss3Alt,
    },
    {
      title: "Tailwind CSS",
      description: "Modern layouts & animations",
      icon: SiTailwindcss,
    },
    {
      title: "JavaScript",
      description: "ES6+, async, the DOM",
      icon: BsJavascript,
    },
    { title: "React", description: "Hooks, Router, Context", icon: FaReact },
    {
      title: "TypeScript",
      description: "TypeScript Content",
      icon: TbBrandTypescript,
    },
    {
      title: "Node.js",
      description: "Rest API's, Authentication",
      icon: FaNodeJs,
    },
  ];

  return (
    /* skills grid */
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <Topic topic="toolkit" />
          <Heading title="Daily Skills Toolkit" />
          <Subheading description="Tools I work with daily" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
              color="teal"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SkillsPreview;
