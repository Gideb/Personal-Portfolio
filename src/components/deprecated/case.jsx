import React from "react";

import {
  FaArrowRight,
  FaChartLine,
  FaClock,
  FaShoppingCart,
  FaEye,
  FaRocket,
  FaMobile,
  FaStar,
} from "react-icons/fa";

const CaseStudy = () => {
  const caseStudies = [
    {
      id: 1,
      title: "E-commerce Redesign",
      category: "Web Development",
      metrics: [
        {
          icon: FaChartLine,
          value: "+120%",
          label: "Traffic Increase",
          color: "from-green-500 to-emerald-400",
        },
        {
          icon: FaShoppingCart,
          value: "37%",
          label: "Conversion Increase",
          color: "from-blue-500 to-cyan-400",
        },
        {
          icon: FaClock,
          value: "2.4s",
          label: "Faster Load Time",
          color: "from-purple-500 to-pink-400",
        },
      ],
      description:
        "Complete overhaul of an outdated e-commerce platform resulting in dramatic performance improvements and revenue growth.",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/case-studies/ecommerce-redesign",
      color: "from-amber-400 to-amber-600",
    },
    {
      id: 2,
      title: "SaaS Platform Migration",
      category: "Cloud Solutions",
      metrics: [
        {
          icon: FaRocket,
          value: "99.9%",
          label: "Uptime Achieved",
          color: "from-green-500 to-emerald-400",
        },
        {
          icon: FaClock,
          value: "60%",
          label: "Faster Response",
          color: "from-blue-500 to-cyan-400",
        },
        {
          icon: FaChartLine,
          value: "45%",
          label: "Cost Reduction",
          color: "from-purple-500 to-pink-400",
        },
      ],
      description:
        "Legacy system migration to modern cloud infrastructure with zero downtime and significant cost savings.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/case-studies/saas-migration",
      color: "from-blue-600 to-cyan-600",
    },
    {
      id: 3,
      title: "Mobile App Launch",
      category: "Mobile Development",
      metrics: [
        {
          icon: FaEye,
          value: "50K+",
          label: "Downloads (Month 1)",
          color: "from-green-500 to-emerald-400",
        },
        {
          icon: FaStar,
          value: "4.8",
          label: "App Store Rating",
          color: "from-yellow-500 to-amber-400",
        },
        {
          icon: FaMobile,
          value: "85%",
          label: "User Retention",
          color: "from-purple-500 to-pink-400",
        },
      ],
      description:
        "Cross-platform mobile application that achieved outstanding user adoption and retention rates.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      link: "/case-studies/mobile-app",
      color: "from-orange-600 to-red-600",
    },
  ];

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 py-20 sm:py-24 lg:py-28 bg-linear-to-b from-white to-purple-50/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 left-20 w-72 h-72 bg-purple-200/20 rounded-xl blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-fuchsia-200/20 rounded-xl blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-xl text-sm font-medium mx-auto mb-6">
            <span className="w-2 h-2 bg-fuchsia-600 rounded-xl animate-pulse"></span>
            Case Studies
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-3xl font-normal text-gray-900 mb-4">
            Real Results.{" "}
            <span className="bg-clip-text text-transparent bg-linear-to-br from-purple-700 to-fuchsia-500">
              Real Impact.
            </span>
          </h2>

          <p className="text-gray-600 text-lg sm:text-xl">
            See how we've helped businesses achieve measurable growth and
            transformation
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-8 lg:space-y-12">
          {caseStudies.map((study, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={study.id}
                className={`group relative bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex`}
              >
                {/* Image Side */}
                <div className="lg:w-5/12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent z-10 lg:bg-linear-to-r lg:from-black/60 lg:via-black/20 lg:to-transparent"></div>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 sm:h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-xl text-sm font-semibold shadow-lg">
                      {study.category}
                    </span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="lg:w-7/12 p-6 sm:p-8 lg:p-10">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h3>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                    {study.metrics.map((metric, idx) => {
                      const Icon = metric.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-linear-to-br from-gray-50 to-white rounded-xl p-3 sm:p-4 text-center border border-gray-100 hover:shadow-md transition-shadow"
                        >
                          <div
                            className={`inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-linear-to-br ${metric.color} rounded-lg mb-2`}
                          >
                            <Icon className="text-white text-sm sm:text-base" />
                          </div>
                          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                            {metric.value}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Results Highlight */}
                  <div className="bg-purple-50 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 border border-purple-100">
                    <div className="flex items-center gap-2 text-purple-700 font-semibold mb-2">
                      <FaRocket className="text-sm" />
                      <span className="text-sm">Key Results</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="text-xs sm:text-sm bg-white px-3 py-1.5 rounded-xl text-gray-700 shadow-sm"
                        >
                          {metric.label}: {metric.value}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={study.link}
                    className={`inline-flex items-center gap-3 bg-linear-to-r ${study.color} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 group/btn`}
                  >
                    <span>View Case Study</span>
                    <FaArrowRight className="text-sm group-hover/btn:translate-x-1 transition-transform" />
                  </a>

                  {/* Decorative Element */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${study.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="/case-studies"
            className="inline-flex items-center gap-2 bg-fuchsia-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-fuchsia-800 transition-all duration-300 hover:shadow-xl hover:scale-105 group"
          >
            View All Case Studies
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
