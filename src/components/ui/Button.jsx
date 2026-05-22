import React from "react";
import { Link } from "react-router-dom";

const Button = ({ path, buttonText, icon: Icon, variant = "primary" }) => {
  const base =
    "md:inline-flex flex items-center gap-2 justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1";

  const styles = {
    secondary:
      " text-white bg-linear-to-r from-rose-700 via-amber-500 to-pink-700",
    amber:
      " text-white bg-linear-to-r from-amber-700 via-amber-500 to-amber-700 text-sm",

    primary: "text-rose-700 bg-white border",
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
