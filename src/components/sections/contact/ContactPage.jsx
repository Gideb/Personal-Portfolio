import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Phone Number",
      country: "Ghana",
      detail1: "+233-552-649-953",
      detail2: "",
      icon: LuPhoneCall,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Email Address",
      country: "",
      detail1: "hello@gideb.dev",
      detail2: "info@gideb.dev",
      icon: TfiEmail,
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Business Hours",
      country: "",
      detail1: "Mon - Fri",
      detail2: "8:00 AM - 5:00 pm",
      icon: LuClock,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const leftContentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightContentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  const infoCardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <motion.section
      className="py-20 w-full bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-20 mt-20">
        {/* Left side - Contact Information */}
        <motion.div className="space-y-7" variants={leftContentVariants}>
          <Topic topic="contact" icon={LuMessageCircle} variant="bg" />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-bold leading-tight"
          >
            Ready to Transform{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Your Business?
            </span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-gray-300 mb-10 text-lg leading-relaxed"
          >
            Let's discuss how I can streamline your operations. Get free
            consultation and customized quote.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 gap-5"
            variants={infoCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {information.map((info, index) => {
              const Icon = info.icon;

              return (
                <motion.div
                  key={index}
                  variants={infoCardVariants}
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="p-6 border border-gray-700/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                >
                  <div className="flex flex-col gap-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className={`bg-gradient-to-br ${info.gradient} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white text-xl" />
                    </motion.div>

                    <div className="space-y-2">
                      <div className="text-white font-semibold text-sm">
                        {info.title}
                      </div>

                      {info.country && (
                        <div className="text-cyan-400 font-medium text-xs uppercase tracking-wide">
                          {info.country}
                        </div>
                      )}

                      <div className="text-gray-300 text-xs mt-1">
                        {info.detail1}
                      </div>

                      {info.detail2 && (
                        <div className="text-gray-400 text-xs">
                          {info.detail2}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right side - Contact Form */}
        <motion.div
          className="p-8 md:p-10 rounded-2xl bg-linear-to-br from-white to-gray-50 shadow-2xl text-left"
          variants={rightContentVariants}
        >
          <Topic
            icon={LuSparkles}
            topic="Request a Free Consultation"
            variant="nobg"
          />

          <motion.form
            className="flex flex-col gap-4 mt-6"
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={inputVariants}>
              <label
                className="text-sm font-semibold text-gray-700 mb-1 block"
                htmlFor="fullname"
              >
                Full Name*
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                type="text"
                placeholder="Your Full Name"
                id="fullname"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                className="text-sm font-semibold text-gray-700 mb-1 block"
                htmlFor="email"
              >
                Email Address*
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                type="email"
                placeholder="you@company.com"
                id="email"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                className="text-sm font-semibold text-gray-700 mb-1 block"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                type="tel"
                placeholder="+233 20 123 4567"
                id="phone"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                className="text-sm font-semibold text-gray-700 mb-1 block"
                htmlFor="company"
              >
                Company Name
              </label>
              <input
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                type="text"
                placeholder="Your Company Ltd"
                id="company"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label
                className="text-sm font-semibold text-gray-700 mb-1 block"
                htmlFor="message"
              >
                How can we help?
              </label>
              <textarea
                className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 transition-all duration-300 outline-none"
                name="text"
                placeholder="Tell us about your needs..."
                rows={5}
                id="message"
              ></textarea>
            </motion.div>

            <motion.div
              variants={inputVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex"
            >
              <Button
                buttonText="Send Message"
                icon={RiSendPlaneFill}
                path=""
                variant="cyan"
              />
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
