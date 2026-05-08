import React from "react";
import { FaPen } from "react-icons/fa";
import Card from "../../ui/Card";
import Topic from "../../Props/Topic";
import Heading from "../../Props/Heading";
import Subheading from "../../Props/Subheading";

const SkillsPreview = () => {
  const skills = [
    {
      title: "Vanilla CSS",
      description: "Modern layouts & animations",
      icon: FaPen,
    },
    {
      title: "Tailwind CSS",
      description: "Modern layouts & animations",
      icon: FaPen,
    },
    { title: "JavaScript", description: "ES6+, async, the DOM", icon: FaPen },
    { title: "React", description: "Hooks, Router, Context", icon: FaPen },
    { title: "TypeScript", description: "TypeScript Content", icon: FaPen },
    {
      title: "Node.js",
      description: "Rest API's, Authentication",
      icon: FaPen,
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-left">
            <Topic topic="toolkit" />
            <Heading title="Daily Skills Toolkit" />
            <Subheading description="Tools I work with daily" />
          </div>
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
