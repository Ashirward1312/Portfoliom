import React from "react";
import {
  FaTrophy,
  FaBuilding,
  FaUsersCog,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaUniversity,
} from "react-icons/fa";

export default function Achievements() {
  const items = [
    {
      icon: FaTrophy,
      title: "TOBIP Top Businessman Award",
      desc:
        "Two-Time Recipient of the prestigious TOBIP Top Businessman Award – Chhattisgarh.",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      ringColor: "ring-amber-200",
    },
    {
      icon: FaBuilding,
      title: "Executive Vice President, CAIT Chhattisgarh",
      desc:
        "Driving policy and innovation in the real estate ecosystem as an executive leader.",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      ringColor: "ring-indigo-200",
    },
    {
      icon: FaUniversity,
      title: "Pioneer of MBA in Real Estate Program",
      desc:
        "Initiated India’s First MBA in Real Estate, empowering future leaders in property development.",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      ringColor: "ring-violet-200",
    },
    {
      icon: FaUsersCog,
      title: "Project Leadership Excellence",
      desc:
        "Led projects for top developers like Avinash Group and VB Tower (Mova), supported by Shri Brijmohan Agrawal, MP & former minister.",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      ringColor: "ring-emerald-200",
    },
    {
      icon: FaHandshake,
      title: "Pan-India Broker Network",
      desc:
        "Built a national broker network for seamless property transactions and partnerships.",
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      ringColor: "ring-sky-200",
    },
    {
      icon: FaLightbulb,
      title: "Introduced Co-Ownership Model",
      desc:
        "Collaborated with RealX India to introduce Co-Ownership in Real Estate, revolutionizing investments.",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      ringColor: "ring-rose-200",
    },
    {
      icon: FaChartLine,
      title: "Founder of Real Estate Co-working HQ",
      desc:
        "Established India’s First Real Estate Co-working & Community HQ in Raipur — a hub for innovation and collaboration.",
      wide: true,
      iconBg: "bg-cyan-50",
      iconColor: "text-cyan-600",
      ringColor: "ring-cyan-200",
    },
  ];

  return (
    <main id="achievements" className="bg-gray-50 py-16 px-6">
      {/* width set to 1200px */}
      <section className="max-w-[1200px] mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Key Achievements & Leadership Roles
          </h1>
          <p className="mt-3 text-gray-600">
            20+ years of expertise in strategy building, project management, and real estate marketing.
          </p>
        </header>

        {/* Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-gray-300 ${
                  item.wide ? "sm:col-span-2 lg:col-span-3" : ""
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.iconBg} ${item.iconColor} ring-1 ${item.ringColor}`}
                  >
                    <Icon className="text-lg" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-white p-8">
          <p className="text-gray-700 leading-relaxed">
            Mr. Maheshwari continues to shape the future of Indian real estate through
            <span className="font-semibold"> education, innovation, and strategic alliances.</span> His visionary leadership
            bridges traditional development with <span className="font-semibold">modern fintech solutions</span>, making him a
            sought-after advisor for corporates, developers, and institutional investors.
          </p>
        </div>
      </section>
    </main>
  );
}