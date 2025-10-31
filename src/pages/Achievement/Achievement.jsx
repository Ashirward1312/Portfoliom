import React from "react";

export default function Achievements() {
  const imageUrl =
    "https://media.istockphoto.com/id/1409520341/photo/group-of-young-people-discussing-in-the-co-working-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=P4YjC3AEogPzkRnpta_IFFr2Pa5idqqU11-neJx_Ars="; // replace with your own image

  const details = [
    "20+ Years of Expertise in strategy building, project management, and real estate marketing.",
    "Two-Time Recipient of the prestigious TOBIP Top Businessman Award – Chhattisgarh.",
    "Executive Vice President, CAIT Chhattisgarh – driving policy and innovation in the real estate ecosystem.",
    "Pioneer of India’s First MBA in Real Estate Program, empowering future leaders in property development and investment.",
    "Project Leadership for top developers including Avinash Group and VB Tower (Mova), backed by Shri Brijmohan Agrawal, Member of Parliament and former minister.",
    "Pan-India Broker Network Development, enabling seamless property transactions and strategic partnerships.",
    "Introduced Co-Ownership in Real Estate in collaboration with leading fintech firm RealX India, revolutionizing property investment models.",
    "Founder of India’s First Real Estate Co-working & Community Headquarters in Raipur — a hub for collaboration, innovation, and growth.",
  ];

  return (
    <main id="achievements" className="bg-gradient-to-b from-white to-blue-50 py-20 px-6">
      <section className="w-full max-w-[1200px] mx-auto">
        {/* Single heading */}
         <div className="w-full flex justify-center mb-6">
  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xm font-semibold text-blue-700 ring-1 ring-blue-100">
   Achievements
  </span>
</div>


        {/* Grid: Left details, Right image */}
        <div className="grid gap-10 lg:grid-cols-12 items-stretch">
          {/* Left - All Details */}
          <div className="lg:col-span-8 self-stretch">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 sm:p-10 space-y-6">
              {details.map((line, index) => (
                <p
                  key={index}
                  className="text-gray-700 text-base sm:text-lg leading-relaxed border-l-4 border-blue-500 pl-4 hover:bg-blue-50/40 transition-all duration-300 rounded-md"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="lg:col-span-4 self-stretch">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <img
                src={imageUrl}
                alt="Achievements"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              {/* Soft overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-30 group-hover:opacity-50 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}