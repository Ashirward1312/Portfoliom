// import React from "react";
// import {
//   FaBullhorn,
//   FaBuilding,
//   FaChartLine,
//   FaChalkboardTeacher,
//   FaFlagCheckered,
//   FaHandshake,
//   FaLightbulb,
//   FaHome,
//   FaMapMarkedAlt,
// } from "react-icons/fa";

// const rolesData = [
//   {
//     Icon: FaBullhorn,
//     title: "Motivator",
//     subtitle: "Keynote Speaker & Mindset Coach",
//     bullets: [
//       { Icon: FaLightbulb, text: "Goal-setting frameworks & habit design" },
//       { Icon: FaHandshake, text: "Team motivation workshops" },
//       { Icon: FaFlagCheckered, text: "1:1 performance coaching" },
//     ],
//   },
//   {
//     Icon: FaBuilding,
//     title: "Real Estate Expert",
//     subtitle: "Investments, Brokerage & Strategy",
//     bullets: [
//       { Icon: FaHome, text: "Residential & luxury advisory" },
//       { Icon: FaChartLine, text: "Investment analysis & portfolio planning" },
//       {
//         Icon: FaMapMarkedAlt,
//         text: "Land sourcing, due diligence & JV facilitation",
//       },
//     ],
//   },
//   {
//     Icon: FaChalkboardTeacher,
//     title: "Sales Trainer",
//     subtitle: "Systems, Scripts & Team Enablement",
//     bullets: [
//       { Icon: FaBullhorn, text: "High-conversion sales scripts" },
//       { Icon: FaHandshake, text: "Negotiation & objection handling" },
//       { Icon: FaChartLine, text: "Pipeline building & CRM playbooks" },
//     ],
//   },
// ];

// const OurExpertise = () => {
//   return (
//     <section
//       className="relative bg-neutral-950 text-neutral-100 py-24 md:py-28 px-6"
//       id="expertise"
//     >
//       {/* top orange aura */}
//       <div
//         className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
//         style={{
//           background:
//             "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0) 70%)",
//         }}
//       />

//       <div className="max-w-[1200px] mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4">
//             My{" "}
//             <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//               Expertise
//             </span>
//           </h2>
       
//         </div>

//         {/* Spotlight Cards (new design) */}
//         <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
//           {rolesData.map(({ Icon, title, subtitle, bullets }, i) => (
//             <div
//               key={i}
//               className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-orange-500/40 to-amber-300/20 hover:from-orange-500/60 hover:to-amber-300/40 transition-all duration-300 hover:-translate-y-1"
//             >
//               <div className="relative h-full rounded-3xl bg-neutral-950/60 ring-1 ring-white/10 backdrop-blur px-7 py-8 flex flex-col">
//                 {/* Icon */}
//                 <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/30 transition-colors group-hover:bg-orange-500/15 group-hover:text-orange-200">
//                   <Icon className="h-7 w-7" />
//                 </div>

//                 {/* Title + subtitle */}
//                 <div>
//                   <h3 className="text-2xl font-semibold text-white">
//                     {title}
//                   </h3>
//                   <p className="mt-1 text-sm text-neutral-300">{subtitle}</p>
//                 </div>

//                 {/* Bullet points */}
//                 <ul className="mt-6 space-y-3">
//                   {bullets.map(({ Icon: BIcon, text }, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start gap-3 text-sm text-neutral-300"
//                     >
//                       <span className="mt-0.5 text-orange-300">
//                         <BIcon className="h-4 w-4" />
//                       </span>
//                       <span>{text}</span>
//                     </li>
//                   ))}
//                 </ul>

            

//                 {/* subtle glow */}
//                 <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl" />
//               </div>
//             </div>
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// };

// export default OurExpertise;


import React from "react";
import {
  FaBullhorn,
  FaChartLine,
  FaFlagCheckered,
  FaHandshake,
  FaLightbulb,
  FaBrain,
  FaSmile,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";

const rolesData = [
  {
    Icon: FaBullhorn,
    title: "MOTIVATOR",
    subtitle: "Keynote Speaker & Performance Energizer",
    bullets: [
      {
        Icon: FaLightbulb,
        text: "High-energy talks that shift perspectives & unlock confidence",
      },
      {
        Icon: FaFlagCheckered,
        text: "Goal clarity, focus & action-oriented mindset building",
      },
      {
        Icon: FaHandshake,
        text: "Team motivation for sales, leadership & student groups",
      },
    ],
  },
  {
    Icon: FaBrain,
    title: "THOUGHT LEADER",
    subtitle: "Ideas, Frameworks & Strategic Clarity",
    bullets: [
      {
        Icon: FaLightbulb,
        text: "Simple mental models to take better life & business decisions",
      },
      {
        Icon: FaChartLine,
        text: "Future-ready thinking for entrepreneurs, youth & teams",
      },
      {
        Icon: FaFlagCheckered,
        text: "Content & sessions that inspire people to think bigger",
      },
    ],
  },
  {
    Icon: FaUserTie,
    title: "LEADERSHIP & BUSINESS COACH",
    subtitle: "From Solo Hustler to Impactful Leader",
    bullets: [
      {
        Icon: FaHandshake,
        text: "1:1 & group coaching for founders, managers & leaders",
      },
      {
        Icon: FaChartLine,
        text: "Business growth, systems thinking & decision frameworks",
      },
      {
        Icon: FaFlagCheckered,
        text: "Accountability, reviews & clear execution roadmaps",
      },
    ],
  },
  {
    Icon: FaSmile,
    title: "HAPPINESS COACH",
    subtitle: "Emotional Fitness, Balance & Fulfilment",
    bullets: [
      {
        Icon: FaLightbulb,
        text: "Daily routines to manage stress, overthinking & anxiety",
      },
      {
        Icon: FaHandshake,
        text: "Work–life harmony for entrepreneurs, students & teams",
      },
      {
        Icon: FaFlagCheckered,
        text: "Practical tools for joy, gratitude & inner peace",
      },
    ],
  },
  {
    Icon: FaRocket,
    title: "INNOVATOR",
    subtitle: "New Models, Experiments & Possibilities",
    bullets: [
      {
        Icon: FaLightbulb,
        text: "Designing new ways of working, learning & collaborating",
      },
      {
        Icon: FaChartLine,
        text: "Testing ideas with real-world feedback & iteration",
      },
      {
        Icon: FaFlagCheckered,
        text: "Turning experiments into scalable, repeatable systems",
      },
    ],
  },
  {
    Icon: FaHandshake,
    title: "COMMUNITY BUILDER",
    subtitle: "Spaces Where People Grow Together",
    bullets: [
      {
        Icon: FaLightbulb,
        text: "Curated communities for learners, leaders & doers",
      },
      {
        Icon: FaChartLine,
        text: "Events, meetups & ecosystems that create real growth",
      },
      {
        Icon: FaFlagCheckered,
        text: "Collaboration-over-competition mindset in every space",
      },
    ],
  },
];

const OurExpertise = () => {
  return (
    <section
      className="relative bg-neutral-950 text-neutral-100 py-24 md:py-28 px-6"
      id="expertise"
    >
      {/* top neutral aura */}
      <div
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="inline-block text-neutral-100">
              MY EXPERTISE
            </span>
          </h2>
        </div>

        {/* Spotlight Cards */}
        <div className="grid gap-8 lg:gap-10 md:grid-cols-3">
          {rolesData.map(({ Icon, title, subtitle, bullets }, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-[1px]
                         bg-gradient-to-br from-neutral-100/20 via-neutral-500/10 to-neutral-700/20
                         hover:from-neutral-100/30 hover:via-neutral-500/20 hover:to-neutral-700/30
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-full rounded-3xl bg-neutral-950/60 ring-1 ring-white/10 backdrop-blur px-7 py-8 flex flex-col">
                {/* Icon */}
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-xl bg-black/60 text-neutral-100 ring-1 ring-white/10 transition-colors group-hover:bg-neutral-800/80">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title + subtitle */}
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-300">{subtitle}</p>
                </div>

                {/* Bullet points */}
                <ul className="mt-6 space-y-3">
                  {bullets.map(({ Icon: BIcon, text }, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-neutral-300"
                    >
                      <span className="mt-0.5 text-neutral-200">
                        <BIcon className="h-4 w-4" />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -top-10 right-0 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;