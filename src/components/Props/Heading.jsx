import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 max-w-xl">
      <h2>{title}</h2>
    </div>
  );
};

export default Heading;
