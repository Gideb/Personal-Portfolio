import React from "react";

const Subheading = ({ description, isLight, leftAlign }) => {
  return (
    <div
      className={`max-w-2xl ${!leftAlign ? "mx-auto": ""} lg:text-xl md:text-lg text-md ${isLight ? "text-gray-100" : "text-gray-500"} `}
    >
      {description}
    </div>
  );
};

export default Subheading;
