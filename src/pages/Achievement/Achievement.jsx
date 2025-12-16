// import React from "react";

// export default function Achievements() {
//   const imageUrl =
//     "https://images.pexels.com/photos/8518660/pexels-photo-8518660.jpeg?auto=compress&cs=tinysrgb&w=800"; // compressed

//   const details = [
//     "20+ Years of Expertise in strategy building, project management, and real estate marketing.",
//     "Two-Time Recipient of the prestigious TOBIP Top Businessman Award – Chhattisgarh.",
//     "Executive Vice President, CAIT Chhattisgarh – driving policy and innovation in the real estate ecosystem.",
//     "Pioneer of India’s First MBA in Real Estate Program, empowering future leaders in property development and investment.",
//     "Project Leadership for top developers including Avinash Group and VB Tower (Mova), backed by Shri Brijmohan Agrawal, Member of Parliament and former minister.",
//     "Pan-India Broker Network Development, enabling seamless property transactions and strategic partnerships.",
//     "Introduced Co-Ownership in Real Estate in collaboration with leading fintech firm RealX India, revolutionizing property investment models.",
//     "Founder of India’s First Real Estate Co-working & Community Headquarters in Raipur — a hub for collaboration, innovation, and growth.",
//   ];

//   return (
//     <main
//       id="achievements"
//       className="bg-neutral-950 text-neutral-100 py-20 px-6 relative overflow-hidden"
//     >
//       <section className="w-full max-w-[1200px] mx-auto animate-fadeIn">
//         {/* Grid: Left content + Right image */}
//         <div className="grid gap-10 lg:grid-cols-12 items-stretch">
//           {/* Left: Content */}
//           <div className="lg:col-span-8 self-stretch">
//             <div className="bg-black/40 rounded-2xl shadow-lg ring-1 ring-white/10 p-8 sm:p-10 space-y-6">
//               <h2 className="text-4xl md:text-6xl font-bold mb-6">
//                 <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent">
//                   Key Achievements & Leadership Roles
//                 </span>
//               </h2>

//               {details.map((line, index) => (
//                 <p
//                   key={index}
//                   className="text-neutral-200 text-sm sm:text-base leading-relaxed border-l-4 border-orange-500 pl-4 rounded-md transition-all duration-300 hover:bg-white/5"
//                 >
//                   {line}
//                 </p>
//               ))}
//             </div>
//           </div>

//           {/* Right: Image */}
//           <div className="lg:col-span-4 self-stretch">
//             <div className="relative h-full rounded-2xl overflow-hidden shadow-md bg-black/50 ring-1 ring-white/10 group">
//               <img
//                 src={imageUrl}
//                 loading="lazy"
//                 alt="Achievements"
//                 className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Soft orange aura */}
//       <div
//         className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.1) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />
//     </main>
//   );
// }



import React from "react";

export default function Achievements() {
  const imageUrl =
    "https://images.pexels.com/photos/8518660/pexels-photo-8518660.jpeg?auto=compress&cs=tinysrgb&w=800"; // compressed

  const details = [
    "20+ Years of Expertise in strategy building, project management, and real estate marketing.",
    "Two-Time Recipient of the prestigious TOBIP Top Businessman Award – Chhattisgarh.",
    "Executive Vice President, CAIT Chhattisgarh – driving policy and innovation in the real estate ecosystem.",
    "Pioneer of India’s First MBA in Real Estate Program, empowering future leaders in property development and investment.",
    "Project Leadership for top developers including Avinash Group and VB Tower (Mova), backed by Shri Brijmohan Agrawal, Member of Parliament and former minister.",
    "Pan-India Broker Network Development, enabling seamless property transactions and strategic partnerships.",
    "Introduced Co-Ownership in Real Estate in collaboration with leading fintech firm RealX India, revolutionizing property investment models.",
    "Founder of India’s first real estate co‑working & community HEADQUARTER in Raipur with IREF and Anjaneya University — a hub for collaboration, innovation, and growth."

  ];

  return (
    <main
      id="achievements"
      className="bg-neutral-950 text-neutral-100 py-20 px-6 relative overflow-hidden"
    >
      <section className="w-full max-w-[1200px] mx-auto animate-fadeIn">
        {/* Grid: Left content + Right image */}
        <div className="grid gap-10 lg:grid-cols-12 items-stretch">
          {/* Left: Content */}
          <div className="lg:col-span-8 self-stretch">
            <div className="bg-black/40 rounded-2xl shadow-lg ring-1 ring-white/10 p-8 sm:p-10 space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-white">
                  KEY ACHIEVEMENTS &amp; LEADERSHIP ROLES
                </span>
              </h2>

              {details.map((line, index) => (
                <p
                  key={index}
                  className="text-neutral-200 text-sm sm:text-base leading-relaxed border-l-[3px] border-neutral-600 pl-4 rounded-md transition-all duration-300 hover:bg-white/5 hover:border-neutral-300"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-4 self-stretch">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-md bg-black/50 ring-1 ring-white/10 group">
              <img
                src={imageUrl}
                loading="lazy"
                alt="Achievements"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Soft neutral aura (no orange) */}
      <div
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </main>
  );
}