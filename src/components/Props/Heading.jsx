import React from "react";

const Heading = ({ title, leftAlign }) => {
  return (
    <div
      className={`text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 max-w-xl ${!leftAlign ? "mx-auto" : ""} `}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
