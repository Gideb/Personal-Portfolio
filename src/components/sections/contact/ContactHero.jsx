import React from "react";
import { motion } from "framer-motion";
import { HiOutlineSparkles, HiOutlineMail } from "react-icons/hi";
import { LuPhoneCall, LuClock, LuMapPin } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactHero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: HiOutlineMail,
      title: "Email",
      details: "hello@gideb.dev",
      action: "mailto:hello@gideb.dev",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: LuPhoneCall,
      title: "Phone",
      details: "+233 552 649 953",
      action: "tel:+233552649953",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: LuMapPin,
      title: "Location",
      details: "Accra, Ghana",
      action: null,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: LuClock,
      title: "Response Time",
      details: "Within 24 hours",
      action: null,
      color: "from-amber-500 to-orange-500",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/gideb", label: "GitHub" },
    {
      icon: FaLinkedin,
      url: "https://linkedin.com/in/gideb",
      label: "LinkedIn",
    },
  ];

  return (
    <motion.section
      className="relative overflow-hidden bg-teal-900 py-20 "
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Decorative background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-white/20 to-pink-500/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-7 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <HiOutlineSparkles className="text-cyan-400 text-sm" />
              <span className="text-xs text-cyan-300 font-medium uppercase tracking-wide">
                Let's Connect
              </span>
            </div>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4"
          >
            Let's Talk{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Creativity
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Whether you have a project in mind, want to collaborate, or just
            want to say hello — I'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Methods Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {method.action ? (
                <a
                  href={method.action}
                  className="block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4`}
                  >
                    <method.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{method.details}</p>
                </a>
              ) : (
                <div className="block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 text-center">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color} mb-4`}
                  >
                    <method.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-white font-semibold mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{method.details}</p>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="text-center">
          <p className="text-gray-400 text-sm mb-4">
            Or find me on social media
          </p>
          <div className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="text-gray-300 hover:text-white text-xl transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Availability Badge */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs text-green-400">Available for work</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactHero;
