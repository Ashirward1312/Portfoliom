import React from "react";
import { FaBuilding, FaHome, FaChartLine, FaMapMarkedAlt } from "react-icons/fa";

const expertiseData = [
  {
    icon: <FaHome className="text-5xl text-blue-500 mb-5" />,
    title: "Residential Brokerage",
    desc: "Luxury homes, apartments, and residential developments in high-demand markets.",
  },
  {
    icon: <FaBuilding className="text-5xl text-blue-500 mb-5" />,
    title: "Commercial Brokerage",
    desc: "Office spaces, retail outlets, industrial parks, and mixed-use developments.",
  },
  {
    icon: <FaChartLine className="text-5xl text-blue-500 mb-5" />,
    title: "Investment Brokerage",
    desc: "Structured investment opportunities for individuals and institutional clients, including REITs and joint ventures.",
  },
  {
    icon: <FaMapMarkedAlt className="text-5xl text-blue-500 mb-5" />,
    title: "Land & Development",
    desc: "Strategic land acquisitions and development project facilitation for long-term growth.",
  },
];

const OurExpertise = () => {
  return (
    <section
      className="bg-gradient-to-b from-white to-blue-50 py-24 md:py-28 px-6"
      id="expertise"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-3xl font-bold text-gray-800 mb-5">
            Our <span className="text-blue-600">Expertise</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We specialize in providing tailored brokerage solutions across multiple asset classes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className="group bg-white shadow-lg rounded-2xl p-10 text-center border border-gray-100 hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3 group-hover:text-blue-600">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
