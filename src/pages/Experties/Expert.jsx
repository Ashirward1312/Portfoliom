import React from "react";
import { FaBuilding, FaHome, FaChartLine, FaMapMarkedAlt } from "react-icons/fa";

const expertiseData = [
  {
    Icon: FaHome,
    title: "Residential Brokerage",
    desc: "Luxury homes, apartments, and residential developments in high-demand markets.",
  },
  {
    Icon: FaBuilding,
    title: "Commercial Brokerage",
    desc: "Office spaces, retail outlets, industrial parks, and mixed-use developments.",
  },
  {
    Icon: FaChartLine,
    title: "Investment Brokerage",
    desc: "Structured investment opportunities for individuals and institutional clients, including REITs and joint ventures.",
  },
  {
    Icon: FaMapMarkedAlt,
    title: "Land & Development",
    desc: "Strategic land acquisitions and development project facilitation for long-term growth.",
  },
];

const OurExpertise = () => {
  return (
    <section className="relative bg-neutral-950 text-neutral-100 py-24 md:py-28 px-6" id="expertise">
      {/* top orange aura */}
      <div
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            We specialize in providing tailored brokerage solutions across multiple asset classes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {expertiseData.map(({ Icon, title, desc }, index) => (
            <div
              key={index}
              className="group bg-black/50 ring-1 ring-white/10 rounded-2xl p-8 text-center backdrop-blur shadow-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/5 hover:ring-orange-400/40 hover:shadow-black/40"
            >
              <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/30 transition-colors group-hover:bg-orange-500/15 group-hover:text-orange-200">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-white mt-1 mb-3 transition-colors group-hover:text-orange-300">
                {title}
              </h3>
              <p className="text-neutral-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;