// components/PodcastGallery.jsx
// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, Play } from "lucide-react";

// // Videos
// import hq1 from "../../videos/hq1.mp4";
// import hq2 from "../../videos/hq2.mp4";
// import hq3 from "../../videos/hq3.mp4";
// import hq4 from "../../videos/hq4.mp4";
// import hq5 from "../../videos/hq5.mp4";
// import hq6 from "../../videos/hq6.mp4";

// const PODCASTS = [
//   {
//     id: "hq1",
//     title: "HQ 1 • INTRODUCTION",
//     topic: "Start of the journey",
//     duration: "01:20",
//     videoSrc: hq1,
//   },
//   {
//     id: "hq2",
//     title: "HQ 2 • HOW TO MAKE 1 CR IN REAL ESTATE",
//     topic: "Wealth building strategy",
//     duration: "02:30",
//     videoSrc: hq2,
//   },
//   {
//     id: "hq3",
//     title: "HQ 3 • COMMERCIAL VS RESIDENTIAL",
//     topic: "Smart portfolio choices",
//     duration: "02:05",
//     videoSrc: hq3,
//   },
//   {
//     id: "hq4",
//     title: "HQ 4 • HQ VISION",
//     topic: "Long term game plan",
//     duration: "01:50",
//     videoSrc: hq4,
//   },
//   {
//     id: "hq5",
//     title: "HQ 5 • WHY CHOOSE REAL ESTATE",
//     topic: "Clarity on the vehicle",
//     duration: "02:10",
//     videoSrc: hq5,
//   },
//   {
//     id: "hq6",
//     title: "HQ 6 • VISION & EXECUTION",
//     topic: "From idea to results",
//     duration: "02:40",
//     videoSrc: hq6,
//   },
// ];

// export default function PodcastGallery() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const total = PODCASTS.length;
//   const item = PODCASTS[currentIndex];

//   const handlePrev = () => {
//     setCurrentIndex((prev) => (prev - 1 + total) % total);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => (prev + 1) % total);
//   };

//   const handleDotClick = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <section
//       id="gallery"
//       className="relative w-full bg-black text-neutral-100 py-16 sm:py-20 overflow-hidden"
//     >
//       {/* Background aura */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18)_0,transparent_60%)] opacity-50 blur-3xl" />
//         <div className="absolute bottom-[-120px] right-[-60px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.2)_0,transparent_60%)] opacity-60 blur-3xl" />
//       </div>

//       <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Heading */}
//         <div className="flex flex-col items-center gap-3 mb-10 sm:mb-14 text-center">
//           <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-300">
//             HQ REELS
//             <span className="h-[1px] w-6 bg-neutral-500" />
//             {String(total).padStart(2, "0")} Clips
//           </span>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
//             Real Estate HQ
//             <span className="block text-neutral-400 text-lg sm:text-xl font-normal mt-2">
//               Vertical, high–impact clips • 1080 × 1920 • Under 3 minutes
//             </span>
//           </h2>
//         </div>

//         {/* Slider wrapper */}
//         <div className="flex flex-col items-center gap-6">
//           {/* Card + controls */}
//           <div className="relative max-w-[340px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px] w-full">
//             {/* Outer glow ring */}
//             <div className="pointer-events-none absolute inset-0 -z-10 scale-105 rounded-[34px] bg-[conic-gradient(from_210deg,rgba(255,255,255,0.35),transparent_40%,transparent_60%,rgba(148,163,184,0.3),transparent_90%)] opacity-60 blur-xl" />

//             <article
//               key={item.id}
//               className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-b from-neutral-900/90 via-black/95 to-neutral-950/95 shadow-[0_25px_80px_rgba(0,0,0,0.75)] transition-all duration-500"
//             >
//               {/* Top info bar */}
//               <div className="flex items-center justify-between px-4 pt-3 pb-1 text-[11px] text-neutral-400 uppercase tracking-[0.22em]">
//                 <span className="inline-flex items-center gap-2">
//                   <span className="h-[1px] w-6 bg-neutral-500" />
//                   Episode {String(currentIndex + 1).padStart(2, "0")} /{" "}
//                   {String(total).padStart(2, "0")}
//                 </span>
                
//               </div>

//               {/* Video wrapper - reel size */}
//               <div className="relative mx-4 mb-4 aspect-[9/16] overflow-hidden rounded-2xl bg-neutral-900">
//                 <video
//                   key={item.id}
//                   src={item.videoSrc}
//                   controls
//                   preload="metadata"
//                   className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
//                 />

//                 {/* Gradient overlays */}
//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/85 opacity-90 mix-blend-multiply" />
//                 <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

//                 {/* Top left badge */}
//                 <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1">
//                   <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-neutral-200">
//                     HQ {String(currentIndex + 1).padStart(2, "0")}
//                   </span>
//                   <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-[2px] text-[9px] uppercase tracking-[0.24em] text-neutral-200">
//                     Real Estate
//                   </span>
//                 </div>

//                 {/* Play hint / overlay */}
//                 <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
//                   <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-200/70 bg-black/45 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.9)]">
//                     <Play className="h-7 w-7 text-neutral-50 fill-neutral-50/70" />
//                   </div>
//                 </div>

//                 {/* Bottom title overlay inside video */}
//                 <div className="pointer-events-none absolute left-3 right-3 bottom-3">
//                   <div className="rounded-2xl bg-black/55 backdrop-blur-md border border-white/10 px-3.5 py-2.5">
//                     <p className="text-xs uppercase tracking-[0.22em] text-neutral-300 mb-1">
//                       HQ PODCAST CLIP
//                     </p>
//                     <p className="text-[13px] font-semibold leading-snug text-neutral-50">
//                       {item.title}
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom meta section */}
//               <div className="px-4 pb-4 sm:px-5 sm:pb-5">
//                 <div className="flex flex-col gap-3">
//                   <div className="flex items-center justify-between gap-3 text-[11px] text-neutral-400 uppercase tracking-[0.22em]">
//                     <span className="inline-flex items-center gap-2">
//                       <span className="h-[1px] w-5 bg-neutral-600" />
//                       {item.topic}
//                     </span>
//                     <span className="inline-flex items-center gap-2">
//                       {item.duration}
//                       <span className="h-[1px] w-5 bg-neutral-600" />
//                     </span>
//                   </div>

//                   {/* Waveform / audio visualiser */}
//                   <div className="flex items-center gap-3">
//                     <div className="flex-1 flex items-end gap-[3px] h-7 overflow-hidden">
//                       {Array.from({ length: 32 }).map((_, i) => (
//                         <div
//                           key={i}
//                           className="w-[3px] rounded-full bg-neutral-700 group-hover:bg-neutral-200 transition-all duration-300"
//                           style={{
//                             height: `${18 + (Math.sin(i * 0.6) + 1) * 7}px`,
//                           }}
//                         />
//                       ))}
//                     </div>
//                     <span className="text-[10px] text-neutral-500 uppercase tracking-[0.24em] whitespace-nowrap">
//                       Audio + Video
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </article>

//             {/* Prev / Next Buttons */}
//             <button
//               type="button"
//               onClick={handlePrev}
//               className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-white/20 text-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-white/40 transition shadow-[0_0_25px_rgba(0,0,0,0.7)]"
//               aria-label="Previous podcast"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>

//             <button
//               type="button"
//               onClick={handleNext}
//               className="absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/75 border border-white/20 text-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-white/40 transition shadow-[0_0_25px_rgba(0,0,0,0.7)]"
//               aria-label="Next podcast"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>
//           </div>

//           {/* Dots / indicators */}
//           <div className="flex flex-col items-center gap-2 mt-2">
//             <div className="flex items-center gap-2">
//               {PODCASTS.map((_, index) => {
//                 const isActive = index === currentIndex;
//                 return (
//                   <button
//                     key={index}
//                     type="button"
//                     onClick={() => handleDotClick(index)}
//                     className={`h-2.5 rounded-full transition-all ${
//                       isActive
//                         ? "w-8 bg-neutral-100"
//                         : "w-2.5 bg-neutral-600 hover:bg-neutral-400"
//                     }`}
//                     aria-label={`Go to podcast ${index + 1}`}
//                   />
//                 );
//               })}
//             </div>
//             <p className="text-[11px] text-neutral-500 tracking-[0.2em] uppercase">
//               Swipe Through HQ Reels
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// components/InstaReelsSection.jsx
import React from "react";
import { Instagram, ArrowRight } from "lucide-react";

// Apne PNG paths
import reel1 from "../../Images/e1.png";
import reel2 from "../../Images/e2.png";

const REELS = [
  {
    id: "reel1",
    title: "How Leaders Think Before They Act",
    subTitle: "Mindset before money",
    url: "https://www.instagram.com/reel/DRt1i8jCKZN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: reel1,
    tag: "Leadership Mindset",
  },
  {
    id: "reel2",
    title: "Turn Pressure Into Real Growth",
    subTitle: "Control your inner game",
    url: "https://www.instagram.com/reel/DR6RkTzCEku/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    image: reel2,
    tag: "Growth & Clarity",
  },
];

export default function InstaReelsSection() {
  return (
    <section className="relative w-full bg-black text-neutral-100 py-16 sm:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0,transparent_60%)] opacity-60 blur-3xl" />
        <div className="absolute bottom-[-120px] right-[-60px] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(148,163,184,0.25)_0,transparent_60%)] opacity-70 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <p className="text-[11px] tracking-[0.28em] uppercase text-neutral-500 mb-3">
            Leadership • Mindset • Growth
          </p>
          <h2 className="text-3xl sm:text-xl lg:text-[1.6rem] font-semibold tracking-tight">
            IF YOU WANT TO GROW AS A LEADER,
            <span className="block text-neutral-300 mt-1">
              STOP SCROLLING FOR TIMEPASS AND START LEARNING WITH INTENT.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400">
            These Instagram reels are not entertainment. They are short,
            sharp podcast cuts designed to upgrade your thinking, decision
            making and leadership profile – one idea at a time.
          </p>
        </div>

        {/* Reels Grid */}
        <div className="grid gap-7 sm:gap-8 sm:grid-cols-2">
          {REELS.map((reel) => (
            <a
              key={reel.id}
              href={reel.url}
              target="_blank"
              rel="noreferrer"
              className="
                group relative overflow-hidden rounded-[28px]
                bg-gradient-to-b from-neutral-900/85 via-black to-neutral-950
                border border-white/10
                shadow-[0_25px_70px_rgba(0,0,0,0.9)]
                hover:border-white/30 hover:-translate-y-1.5
                transition-all duration-300
              "
            >
              {/* Subtle glow behind each card */}
              <div className="pointer-events-none absolute inset-0 -z-10 rounded-[28px] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_55%)] opacity-60 blur-xl" />

              {/* Image / thumbnail */}
              <div className="relative aspect-[9/16] overflow-hidden rounded-2xl m-3 bg-neutral-900">
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90" />

                {/* Tag / Badge */}
                <div className="pointer-events-none absolute left-3 top-3 flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-black/65 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-neutral-200">
                    <Instagram className="h-3.5 w-3.5" />
                    Instagram Reel
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2.5 py-[2px] text-[9px] uppercase tracking-[0.24em] text-neutral-200 border border-white/10">
                    {reel.tag}
                  </span>
                </div>

                {/* Center hover icon */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200/70 bg-black/55 backdrop-blur-md shadow-[0_0_35px_rgba(0,0,0,0.9)]">
                    <Instagram className="h-7 w-7 text-neutral-50" />
                  </div>
                </div>

                {/* Bottom title */}
                <div className="pointer-events-none absolute left-3 right-3 bottom-3">
                  <div className="rounded-2xl bg-black/65 backdrop-blur-md border border-white/10 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-300 mb-1">
                      Podcast Cut
                    </p>
                    <p className="text-[13px] font-semibold leading-snug text-neutral-50">
                      {reel.title}
                    </p>
                    {reel.subTitle && (
                      <p className="mt-1 text-[11px] text-neutral-400">
                        {reel.subTitle}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom text / CTA */}
              <div className="px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[11px] sm:text-[12px] text-neutral-400 leading-relaxed">
                    Want to grow your leadership profile?{" "}
                    <span className="text-neutral-100">
                      Tap this reel, watch with focus, and apply one idea this week.
                    </span>
                  </p>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-100">
                    Watch now
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}