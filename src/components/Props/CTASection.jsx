import React from "react";
import Subheading from "./Subheading";
import Button from "../ui/Button";
import { FaEnvelope, FaGithub } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";

const CTASection = () => {
  return (
    <section className="w-full bg-linear-to-br from-rose-900 via-slate-800 to-pink-900 border-t border-white ">
      <div className="py-20 max-w-7xl mx-auto  items-center">
        <div
          className=" max-w-5xl mx-auto text-center p-8 space-y-7
        "
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white font-extrabold  text-center">
            Let's Build Something Great Together.
          </h2>
          <Subheading isLight description="I'd love to hear from you." />

          <div className="gap-3 flex items-center justify-center mt-5">
            <Button
              buttonText="Get in Touch"
              icon={HiOutlineEnvelope}
              path="/contact"
              variant="secondary"
            />

            <Button
              buttonText="Github"
              icon={FaGithub}
              path="https://github/gideb"
              variant="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
