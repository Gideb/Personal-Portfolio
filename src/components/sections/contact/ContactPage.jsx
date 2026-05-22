import React from "react";
import Heading from "../../Props/Heading";
import Topic from "../../Props/Topic";
import Subheading from "../../Props/Subheading";
import {
  LuClock,
  LuMessageCircle,
  LuPhoneCall,
  LuSparkles,
} from "react-icons/lu";
import { PiMapPinAreaFill } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import Button from "../../ui/Button";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactPage = () => {
  const information = [
    {
      title: "Office Address",
      country: "Ghana",
      detail1: "East Legon, Accra",
      detail2: "",
      icon: PiMapPinAreaFill,
    },
    {
      title: "Phone Number",
      country: "Ghana",
      detail1: "+233-552-649-953",
      detail2: "",
      icon: LuPhoneCall,
    },
    {
      title: "Email Address",
      country: "",
      detail1: "hello@gideb.dev",
      detail2: "info@gideb.dev",
      icon: TfiEmail,
    },
    {
      title: "Business Hours",
      country: "",
      detail1: "Mon - Fri",
      detail2: "8:00 AM - 5:00 pm",
      icon: LuClock,
    },
  ];

  return (
    <section className="py-20 w-full bg-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-20 mt-20">
        {/* hero */}
        <div className="space-y-7 ">
          <Topic topic="contact" icon={LuMessageCircle} variant="bg" />
          <br />
          <br />
          <h3 className="text-white text-4xl font-semibold ">
            Ready to Transform{" "}
            <span className="text-rose-700">Your Business?</span>
          </h3>
          <p className="text-rose-500 mb-10">
            Let's discuss how I can streamline your operations. Get free
            consultation and customized quote.
          </p>

          <div className="grid grid-cols-2 gap-5 ">
            {information.map((info, index) => {
              const Icon = info.icon;

              return (
                <div
                  key={index}
                  className="p-6 border border-gray-600 bg-slate-800 grid grid-cols-2 rounded-md"
                >
                  <div className="p-2 bg-amber-100 w-10 h-10 rounded flex items-center justify-center">
                    <Icon className="text-amber-700 text-xl" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-white font-medium text-xs">
                      {info.title}
                    </div>

                    <div className="text-rose-500 font-medium text-xs mt-4">
                      {info.country}
                    </div>

                    <div className="text-rose-400 font-light text-xs mt-1">
                      {info.detail1}
                    </div>

                    <div className="text-rose-400 font-light text-xs">
                      {info.detail2}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* details */}
        <div className=" p-10 rounded-2xl bg-white text-left">
          <Topic icon={LuSparkles} topic="Request a Free Consultation" />

          <form className="flex flex-col gap-3">
            <label className="text-sm font-medium" htmlFor="fullname">
              Full Name*
            </label>
            <input
              className="border border-amber-400 rounded p-3 text-xs inline-flex mb-2  focus:outline-amber-600"
              type="text"
              placeholder="Your Full Name"
            />

            <label className="text-sm font-medium" htmlFor="email">
              Email Address*
            </label>
            <input
              className="border border-amber-400 rounded p-3 text-xs inline-flex mb-2  focus:outline-amber-600"
              type="email"
              placeholder="you@company.com"
            />

            <label className="text-sm font-medium" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="border border-amber-400 rounded p-3 text-xs inline-flex mb-2  focus:outline-amber-600"
              type="tel"
              placeholder="+233 20 123 4567"
            />

            <label className="text-sm font-medium" htmlFor="company">
              Company Name
            </label>
            <input
              className="border border-amber-400 rounded p-3 text-xs inline-flex mb-2  focus:outline-amber-600"
              type="text"
              placeholder="Your Compnay Ltd"
            />

            <label className="text-sm font-medium" htmlFor="message">
              How can we help?
            </label>
            <textarea
              className="border border-amber-400 rounded p-2 text-sm"
              name="text"
              placeholder="Tell us about your needs..."
              rows={5}
            ></textarea>

            <Button
              buttonText="Send Message"
              icon={RiSendPlaneFill}
              path="/"
              variant="amber"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
