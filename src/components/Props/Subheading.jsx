import React from "react";

const Subheading = ({ description }) => {
  return (
    <div className="max-w-3xl text-gray-500 lg:text-xl md:text-lg text-md">
      {description}
    </div>
  );
};

export default Subheading;
