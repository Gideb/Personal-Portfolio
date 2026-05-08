import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, buttonText, icon: Icon, variant = "primary" }) => {
  const base =
    "md:inline-flex flex items-center gap-2 justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1";

  const styles = {
    secondary:
      " text-white bg-linear-to-r from-teal-700 via-amber-300 to-emerald-700",

    primary: "text-teal-700 bg-white border",
  };

  return (
    <Link to={path} className={`${base}  ${styles[variant]} group`}>
      <span> {buttonText}</span>

      {Icon && (
        <Icon className="text-sm transiton-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
};

export default Button;
