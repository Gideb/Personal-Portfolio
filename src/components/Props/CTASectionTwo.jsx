import React from "react";
import Subheading from "./Subheading";
import Button from "../ui/Button";
import { FaEnvelope, FaGithub, FaPhoneFlip } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LuPhoneCall } from "react-icons/lu";
import { IoDiamondSharp, IoDiamondOutline } from "react-icons/io5";

const CTASectionTwo = ({ heading, description, path, buttonText , buttonicon}) => {
  return (
    <section className="w-full bg-gray-50 ">
      <div className="py-20 max-w-7xl mx-auto  items-center">
        <div className=" max-w-6xl mx-auto text-center space-y-7 border border-gray-300 rounded-2xl shadow-md bg-white flex flex-col py-10 justify-center items-center ">
          <IoDiamondSharp className="text-5xl text-teal-800 transition-all animate-diamond  " />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold  text-center">
            {heading}
          </h2>
          <Subheading description={description} />

          <div className="gap-3 flex items-center justify-center mt-5">
            <Button
              buttonText={buttonText}
              icon={buttonicon}
              path={path}
              variant="secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASectionTwo;
