// import React from 'react';
// import { Phone, Mail, Award, Building2, Star, ChevronRight } from 'lucide-react';
// import img from "../../Images/bb.png";

// export default function PropertyHero() {
//   const scrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById('contact');
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       el.classList.add('ring-2', 'ring-orange-500');
//       setTimeout(() => el.classList.remove('ring-2', 'ring-orange-500'), 1200);
//     } else {
//       window.location.hash = 'contact';
//     }
//   };

//   return (
//     <div className="w-full flex items-center justify-center relative overflow-hidden bg-neutral-950 text-neutral-100" id="home">
//       {/* Black + Orange ambient glows */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-28 -right-24 h-[24rem] w-[24rem] rounded-full bg-orange-600/20 blur-3xl" />
//         <div className="absolute -bottom-28 -left-20 h-[22rem] w-[22rem] rounded-full bg-orange-500/15 blur-3xl" />
//         <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
//       </div>

//       <section className="w-full max-w-[1200px] pt-14 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* Left content */}
//           <div className="lg:col-span-7 space-y-6">
//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
//               Your Reliable Partner in
//               <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent"> Raipur Real Estate</span>
//             </h1>

//            <p className="mt-2 text-neutral-300 text-lg sm:text-xl leading-relaxed font-medium">
//   A real estate strategist with <span className="text-orange-400 font-semibold">over two decades of experience</span>, 
//   Pradeep Maheshwari has led major projects and broker networks across India driving growth and innovation in the sector.
// </p>


//             {/* Primary CTA (Black + Orange) */}
//             <div className="flex items-center gap-4">
//               <button
//                 type="button"
//                 onClick={scrollToContact}
//                 className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/40 ring-1 ring-orange-400/40 transition-all hover:from-orange-500 hover:via-orange-400 hover:to-amber-400 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//               >
//                 <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                 Schedule Consultation
//                 <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
//               </button>

//               {/* Optional secondary CTA (uncomment if needed)
//               <button
//                 type="button"
//                 onClick={scrollToContact}
//                 className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-black/50 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-orange-200 backdrop-blur ring-1 ring-white/10 transition-all hover:bg-black/60 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//               >
//                 Get in Touch
//               </button>
//               */}
//             </div>

//             {/* Quick stats */}
//             <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
//               <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Building2 className="h-6 w-6 text-orange-400 mx-auto mb-2" />
//                 <p className="text-xl font-semibold text-white">500+</p>
//                 <p className="text-xs text-neutral-400">Properties</p>
//               </div>
//               <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Award className="h-6 w-6 text-orange-400 mx-auto mb-2" />
//                 <p className="text-xl font-semibold text-white">20+ yrs</p>
//                 <p className="text-xs text-neutral-400">Experience</p>
//               </div>
//               <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Star className="h-6 w-6 text-orange-400 mx-auto mb-2 fill-orange-400" />
//                 <p className="text-xl font-semibold text-white">4.9/5</p>
//                 <p className="text-xs text-neutral-400">Rating</p>
//               </div>
//             </div>
//           </div>

//           {/* Right: Image */}
//           <div className="lg:col-span-5 relative">
//             <div className="rounded-3xl overflow-hidden bg-black/50 ring-1 ring-white/10 shadow-xl shadow-black/50">
//               <img
//                 src={img}
//                 alt="Property Expert"
//                 className=" w-full object-cover object-top aspect-[4/5] transition-transform duration-500 ease-out hover:scale-[1.03]"
//                 onError={(e) => {
//                   const fallback = e.currentTarget.nextElementSibling;
//                   e.currentTarget.style.display = 'none';
//                   if (fallback) fallback.classList.remove('hidden');
//                 }}
//               />
//               {/* Fallback if image missing */}
//               <div className="hidden aspect-[4/5] bg-gradient-to-br from-black via-neutral-950 to-neutral-900 grid place-items-center">
//                 <div className="text-center p-8">
//                   <Building2 className="h-20 w-20 text-neutral-700 mx-auto mb-3" />
//                   <p className="text-neutral-500">Add your professional photo</p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur px-5 py-4 rounded-2xl shadow-2xl ring-1 ring-orange-400/30">
//               <div className="flex items-center gap-3">
//                 <div className="bg-orange-500/15 p-3 rounded-full ring-1 ring-orange-400/30">
//                   <Award className="h-5 w-5 text-orange-300" />
//                 </div>
//                 <div>
//                   <p className="text-lg font-bold text-white leading-tight">Trusted Expert</p>
//                   <p className="text-xs text-neutral-400">500+ happy clients</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Optional contact lines (dark + orange)
//         <div className="mt-6 flex flex-wrap gap-6">
//           <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-neutral-300 hover:text-orange-200 transition-colors">
//             <Phone className="h-5 w-5 text-orange-400" /> +91 98765 43210
//           </a>
//           <a href="mailto:contact@propertypro.in" className="inline-flex items-center gap-2 text-neutral-300 hover:text-orange-200 transition-colors">
//             <Mail className="h-5 w-5 text-orange-400" /> contact@propertypro.in
//           </a>
//         </div>
//         */}
//       </section>
//     </div>
//   );
// }



// import React from "react";
// import { Phone, Mail, Award, Building2, Star, ChevronRight } from "lucide-react";
// import img from "../../Images/j.jpeg";

// export default function PropertyHero() {
//   const scrollToContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       el.classList.add("ring-2", "ring-neutral-100");
//       setTimeout(() => el.classList.remove("ring-2", "ring-neutral-100"), 1200);
//     } else {
//       window.location.hash = "contact";
//     }
//   };

//   return (
//     <div
//       className="w-full flex items-center justify-center relative overflow-hidden bg-neutral-950 text-neutral-100"
//       id="home"
//     >
//       {/* Black / Grey ambient glows */}
//       <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-28 -right-24 h-[24rem] w-[24rem] rounded-full bg-neutral-800/40 blur-3xl" />
//         <div className="absolute -bottom-28 -left-20 h-[22rem] w-[22rem] rounded-full bg-neutral-900/50 blur-3xl" />
//         <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-neutral-700/35 blur-3xl" />
//       </div>

//       <section className="w-full max-w-[1200px] pt-14 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* Left content */}
//           <div className="lg:col-span-7 space-y-6">
//             {/* Eyebrow label */}
//             <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-neutral-300 shadow-sm">
//               <span className="h-1.5 w-1.5 rounded-full bg-neutral-100 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
//               RAIPUR • REAL ESTATE ADVISORY
//             </div>

//             {/* Main heading - fully white */}
//             <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
//              YOUR RELIABLE PARTNER IN{" "}
//               <span className="text-white">RAIPUR REAL ESTATE</span>
//             </h1>

//             {/* Subtle heading underline */}
//             <div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-700" />

//             <p className="mt-2 text-neutral-300 text-lg sm:text-xl leading-relaxed font-medium">
//               A Real Estate Strategist With{" "}
//               <span className="text-neutral-50 font-semibold">
//                 Over Two Decades Of Experience
//               </span>
//               , Pradeep Maheshwari Has Led Major Projects And Broker Networks
//               Across India Driving Growth And Innovation In The Sector.
//             </p>

//             {/* CTAs */}
//             <div className="flex items-center flex-wrap gap-4">
//               {/* Highlighted primary button */}
//               <div className="relative inline-flex rounded-full p-[1.5px] bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-300 shadow-[0_0_0_1px_rgba(243,244,246,0.2)]">
//                 <button
//                   type="button"
//                   onClick={scrollToContact}
//                   className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-neutral-50 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-all hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//                 >
//                   <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
//                   <span className="relative">SCHEDULE CONSULTATION</span>
//                   <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
//                 </button>
//               </div>

//               {/* Secondary button (outline, minimal) */}
//               <button
//                 type="button"
//                 onClick={scrollToContact}
//                 className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-white/0 px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-200 tracking-wide backdrop-blur-sm shadow-sm hover:border-neutral-300 hover:text-neutral-50 hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//               >
//                 <Phone className="h-4 w-4" />
//                 REQUEST A CALL BACK
//               </button>
//             </div>

//             {/* Quick stats */}
//             <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
//               <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Building2 className="h-6 w-6 text-neutral-200 mx-auto mb-2" />
//                 <p className="text-xl font-semibold text-white">500+</p>
//                 <p className="text-xs text-neutral-400">Properties</p>
//               </div>
//               <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Award className="h-6 w-6 text-neutral-200 mx-auto mb-2" />
//                 <p className="text-xl font-semibold text-white">20+ yrs</p>
//                 <p className="text-xs text-neutral-400">Experience</p>
//               </div>
//               <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
//                 <Star className="h-6 w-6 text-neutral-200 mx-auto mb-2 fill-neutral-200" />
//                 <p className="text-xl font-semibold text-white">5/5</p>
//                 <p className="text-xs text-neutral-400">Rating</p>
//               </div>
//             </div>
//           </div>

//           {/* Right: Image */}
//           <div className="lg:col-span-5 relative">
//             <div className="rounded-3xl overflow-hidden bg-black/60 ring-1 ring-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
//               <img
//                 src={img}
//                 alt="Property Expert"
//                 className="w-full object-cover object-top aspect-[4/5] transition-transform duration-500 ease-out hover:scale-[1.03]"
//                 onError={(e) => {
//                   const fallback = e.currentTarget.nextElementSibling;
//                   e.currentTarget.style.display = "none";
//                   if (fallback) fallback.classList.remove("hidden");
//                 }}
//               />
//               <div className="hidden aspect-[4/5] bg-gradient-to-br from-black via-neutral-950 to-neutral-900 grid place-items-center">
//                 <div className="text-center p-8">
//                   <Building2 className="h-20 w-20 text-neutral-700 mx-auto mb-3" />
//                   <p className="text-neutral-500">
//                     Add your professional photo
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Floating badge */}
//             <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur px-5 py-4 rounded-2xl shadow-2xl ring-1 ring-white/20">
//               <div className="flex items-center gap-3">
//                 <div className="bg-white/10 p-3 rounded-full ring-1 ring-white/20">
//                   <Award className="h-5 w-5 text-neutral-100" />
//                 </div>
//                 <div>
//                   <p className="text-lg font-bold text-white leading-tight">
//                    TRUSTED EXPERT
//                   </p>
//                   <p className="text-xs text-neutral-400">500+ happy clients</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



import React from "react";
import { Phone, Mail, Award, Building2, Star, ChevronRight } from "lucide-react";
import img from "../../Images/j.jpeg";

export default function PropertyHero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add("ring-2", "ring-neutral-100");
      setTimeout(() => el.classList.remove("ring-2", "ring-neutral-100"), 1200);
    } else {
      window.location.hash = "contact";
    }
  };

  return (
    <div
      className="w-full flex items-center justify-center relative overflow-hidden bg-neutral-950 text-neutral-100"
      id="home"
    >
      {/* Black / Grey ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -right-24 h-[24rem] w-[24rem] rounded-full bg-neutral-800/40 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-[22rem] w-[22rem] rounded-full bg-neutral-900/50 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-neutral-700/35 blur-3xl" />
      </div>

      <section className="w-full max-w-[1200px] pt-14 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-3 py-1 text-[10px] tracking-[0.22em] uppercase text-neutral-300 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-100 shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
              RAIPUR • LEADERSHIP • BUSINESS • HAPPINESS COACH
            </div>

            {/* Main heading - fully white */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
              EMPOWERING YOU TO LEAD WITH{" "}
              <span className="text-white">CLARITY, CONFIDENCE & HAPPINESS</span>
            </h1>

            {/* Subtle heading underline */}
<div className="h-[3px] w-28 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-700" />

<p className="mt-2 text-neutral-300 text-lg sm:text-xl leading-relaxed font-medium">
  A{" "}
  <span className="text-neutral-50 font-semibold">
    <span className="font-extrabold">Thought Leader</span>,{" "}
    <span className="font-extrabold">Leadership &amp; Business Coach</span>,{" "}
    <span className="font-extrabold">Happiness Coach</span> &amp;{" "}
    <span className="font-extrabold">Motivator</span>
    
  </span>
  , Pradeep Maheshwari mentors entrepreneurs, students and teams, and is the{" "}
  <span className="text-neutral-50 font-semibold">
    Founder of India’s first co-working &amp; community{" "}
    <span className="font-extrabold">HEADQUARTERS</span>
    {" "}in Raipur with IREF and Anjaneya University
  </span>
  .
</p>

            {/* CTAs */}
            <div className="flex items-center flex-wrap gap-4">
              {/* Highlighted primary button */}
              <div className="relative inline-flex rounded-full p-[1.5px] bg-gradient-to-r from-neutral-100 via-neutral-500 to-neutral-300 shadow-[0_0_0_1px_rgba(243,244,246,0.2)]">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-950 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-neutral-50 shadow-[0_18px_40px_rgba(0,0,0,0.8)] transition-all hover:bg-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-100 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                  <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative">SCHEDULE CONSULTATION</span>
                  <ChevronRight className="relative h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>

              {/* Secondary button (outline, minimal) */}
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-600 bg-white/0 px-6 py-3.5 text-xs sm:text-sm font-medium text-neutral-200 tracking-wide backdrop-blur-sm shadow-sm hover:border-neutral-300 hover:text-neutral-50 hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <Phone className="h-4 w-4" />
                REQUEST A CALL BACK
              </button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
              <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Building2 className="h-6 w-6 text-neutral-200 mx-auto mb-2" />
                <p className="text-xl font-semibold text-white">500+</p>
                <p className="text-xs text-neutral-400">Sessions & Workshops</p>
              </div>
              <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Award className="h-6 w-6 text-neutral-200 mx-auto mb-2" />
                <p className="text-xl font-semibold text-white">20+ yrs</p>
                <p className="text-xs text-neutral-400">Experience in Business & Leadership</p>
              </div>
              <div className="rounded-xl bg-black/60 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Star className="h-6 w-6 text-neutral-200 mx-auto mb-2 fill-neutral-200" />
                <p className="text-xl font-semibold text-white">5/5</p>
                <p className="text-xs text-neutral-400">Audience Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden bg-black/60 ring-1 ring-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.9)]">
              <img
                src={img}
                alt="Pradeep Maheshwari – Thought Leader & Coach"
                className="w-full object-cover object-top aspect-[4/5] transition-transform duration-500 ease-out hover:scale-[1.03]"
                onError={(e) => {
                  const fallback = e.currentTarget.nextElementSibling;
                  e.currentTarget.style.display = "none";
                  if (fallback) fallback.classList.remove("hidden");
                }}
              />
              <div className="hidden aspect-[4/5] bg-gradient-to-br from-black via-neutral-950 to-neutral-900 grid place-items-center">
                <div className="text-center p-8">
                  <Award className="h-20 w-20 text-neutral-700 mx-auto mb-3" />
                  <p className="text-neutral-500">
                    Add your leadership portrait
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-black/80 backdrop-blur px-5 py-4 rounded-2xl shadow-2xl ring-1 ring-white/20">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-3 rounded-full ring-1 ring-white/20">
                  <Award className="h-5 w-5 text-neutral-100" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-tight">
                    TRUSTED COACH & MENTOR
                  </p>
                  <p className="text-xs text-neutral-400">
                    Entrepreneurs, students & teams across India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}