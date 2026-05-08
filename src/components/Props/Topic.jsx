import React from "react";

const Topic = ({ topic, icon: Icon, variant = "noBg" }) => {
  const styles = {
    bg: "bg-emerald-100 px-4 border border-emerald-300",
    nobg: "bg-transparent text-teal-600",
  };

  const base =
    "inline-flex justify-center items-center gap-2 h-7 uppercase tracking-none rounded-xl";

  const color = "text-emerald-700";

  return (
    <div className={`${base} ${styles[variant]}`}>
      {Icon && <Icon className={`text-sm ${color}`} />}
      <span className={` text-sm ${color} `}>{topic}</span>
    </div>
  );
};

export default Topic;
