import React from "react";

const Topic = ({ topic, icon: Icon, variant = "noBg" }) => {
  
  const styles = { bg: "bg-purple-200", nobg: "bg-transparent text-color-600" };
  
  const base =
    "inline-flex justify-center items-center gap-2 px-4 h-7 uppercase tracking-none rounded-xl";
  
    const color = "text-purple-600";


  return (
    <div className={`${base} ${styles[variant]}`}>
      {Icon && <Icon className={`text-sm ${color}`} />}
      <span className={` text-sm ${color} `}>{topic}</span>
    </div>
  );
};

export default Topic;
