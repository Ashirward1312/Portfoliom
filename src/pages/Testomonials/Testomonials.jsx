// import React from "react";

// /* Icons */
// const StarIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       fillRule="evenodd"
//       d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l1.59 3.823c.15.36.48.62.866.68l4.146.637c1.165.179 1.637 1.67.789 2.498l-3.061 2.98a1.2 1.2 0 0 0-.352 1.06l.723 4.208c.198 1.16-1.019 2.047-2.061 1.5l-3.73-1.96a1.2 1.2 0 0 0-1.114 0l-3.73 1.96c-1.042.547-2.26-.34-2.061-1.5l.723-4.208a1.2 1.2 0 0 0-.352-1.06l-3.06-2.98c-.849-.828-.377-2.319.788-2.498l4.146-.637a1.2 1.2 0 0 0 .866-.68l1.59-3.823Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const QuoteIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M7.5 6a4.5 4.5 0 0 0-4.5 4.5V21h7.5v-9H6.75a2.25 2.25 0 0 1 2.25-2.25V6h-1.5Zm12 0a4.5 4.5 0 0 0-4.5 4.5V21h7.5v-9h-3.75a2.25 2.25 0 0 1 2.25-2.25V6h-1.5Z"
//     />
//   </svg>
// );

// const DEFAULT_TESTIMONIALS = [
//   {
//     quote:
//       "The [Broker/Company Name] team guided us through every step of our investment process — their insight turned our property goals into reality.",
//     name: "Mr. Robey Alexa",
//     role: "CEO, Xara Agency",
//     avatar:
//       "https://images.pexels.com/photos/14983798/pexels-photo-14983798.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     quote:
//       "Great market intelligence and clear communication. They surfaced a high-yield opportunity we almost missed.",
//     name: "Aarav Mehta",
//     role: "Partner",
//     avatar:
//       "https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
//   {
//     quote:
//       "Smooth execution from underwriting to close. Professional and transparent throughout.",
//     name: "Sara Khan",
//     role: "Director",
//     avatar:
//       "https://images.pexels.com/photos/1759524/pexels-photo-1759524.jpeg?auto=compress&cs=tinysrgb&w=400",
//   },
// ];

// export default function TestimonialsBlue({ items = DEFAULT_TESTIMONIALS }) {
//   return (
//     <main className="bg-neutral-950 text-neutral-100" id="testimonials">
//       <section className="relative py-16 lg:py-24 overflow-hidden">
//         {/* Fixed 1200px container */}
//         <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
//           {/* Header */}
//           <div className="mx-auto max-w-3xl text-center">
//             <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-orange-400">
//               Our Testimonials
//             </p>
//             <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
//               We Are Very Glad To Get
//               <br className="hidden sm:block" /> Client Review
//             </h1>
//           </div>

//           {/* Cards */}
//           <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//             {items.map(({ quote, name, role, avatar }, idx) => (
//               <article
//                 key={idx}
//                 className="relative rounded-3xl border border-white/10 bg-black/40 p-8 shadow-lg shadow-black/20 ring-1 ring-white/10 transition hover:border-orange-400/30 hover:ring-orange-400/20 hover:shadow-black/30"
//               >
//                 <div className="flex items-center gap-1 text-orange-400">
//                   {[...Array(5)].map((_, i) => (
//                     <StarIcon key={i} className="h-5 w-5" />
//                   ))}
//                 </div>

//                 <p className="mt-4 text-[17px] leading-relaxed text-neutral-300">
//                   “{quote}”
//                 </p>

//                 <footer className="mt-6 flex items-center gap-4">
//                   <img
//                     src={avatar}
//                     loading="lazy"
//                     alt={name}
//                     className="h-14 w-14 rounded-full object-cover ring-1 ring-white/10"
//                   />
//                   <div>
//                     <div className="text-lg font-semibold text-white">
//                       {name}
//                     </div>
//                     <div className="text-sm text-neutral-400">{role}</div>
//                   </div>
//                 </footer>

//                 <QuoteIcon className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 text-orange-400/30" />
//               </article>
//             ))}
//           </div>
//         </div>

//         {/* subtle top aura (orange) */}
//         <div
//           className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
//           style={{
//             background:
//               "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0) 70%)",
//           }}
//         />
//       </section>
//     </main>
//   );
// }


import React from "react";

/* Icons */
const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l1.59 3.823c.15.36.48.62.866.68l4.146.637c1.165.179 1.637 1.67.789 2.498l-3.061 2.98a1.2 1.2 0 0 0-.352 1.06l.723 4.208c.198 1.16-1.019 2.047-2.061 1.5l-3.73-1.96a1.2 1.2 0 0 0-1.114 0l-3.73 1.96c-1.042.547-2.26-.34-2.061-1.5l.723-4.208a1.2 1.2 0 0 0-.352-1.06l-3.06-2.98c-.849-.828-.377-2.319.788-2.498l4.146-.637a1.2 1.2 0 0 0 .866-.68l1.59-3.823Z"
      clipRule="evenodd"
    />
  </svg>
);

const QuoteIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M7.5 6a4.5 4.5 0 0 0-4.5 4.5V21h7.5v-9H6.75a2.25 2.25 0 0 1 2.25-2.25V6h-1.5Zm12 0a4.5 4.5 0 0 0-4.5 4.5V21h7.5v-9h-3.75a2.25 2.25 0 0 1 2.25-2.25V6h-1.5Z"
    />
  </svg>
);

const DEFAULT_TESTIMONIALS = [
  {
    quote:
      "The [Broker/Company Name] team guided us through every step of our investment process — their insight turned our property goals into reality.",
    name: "Mr. Robey Alexa",
    role: "CEO, Xara Agency",
    avatar:
      "https://images.pexels.com/photos/14983798/pexels-photo-14983798.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote:
      "Great market intelligence and clear communication. They surfaced a high-yield opportunity we almost missed.",
    name: "Aarav Mehta",
    role: "Partner",
    avatar:
      "https://images.pexels.com/photos/9604304/pexels-photo-9604304.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    quote:
      "Smooth execution from underwriting to close. Professional and transparent throughout.",
    name: "Sara Khan",
    role: "Director",
    avatar:
      "https://images.pexels.com/photos/1759524/pexels-photo-1759524.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function TestimonialsBlue({ items = DEFAULT_TESTIMONIALS }) {
  return (
    <main className="bg-neutral-950 text-neutral-100" id="testimonials">
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Fixed 1200px container */}
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-200">
              {/* amber gradient -> white dot */}
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              OUR TESTIMONIALS
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              WE ARE VERY GLAD TO GET
              <br className="hidden sm:block" /> CLIENT REVIEW
            </h1>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ quote, name, role, avatar }, idx) => (
              <article
                key={idx}
                className="relative rounded-3xl border border-white/10 bg-black/40 p-8 shadow-lg shadow-black/20 ring-1 ring-white/10 transition hover:bg-white/5 hover:border-neutral-300/60 hover:ring-neutral-300/40 hover:shadow-black/30"
              >
                {/* Stars (amber accent, untouched) */}
                <div className="flex items-center gap-1 text-amber-300">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mt-4 text-[17px] leading-relaxed text-neutral-300">
                  “{quote}”
                </p>

                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={avatar}
                    loading="lazy"
                    alt={name}
                    className="h-14 w-14 rounded-full object-cover ring-1 ring-white/10"
                  />
                  <div>
                    <div className="text-lg font-semibold text-white">
                      {name}
                    </div>
                    <div className="text-sm text-neutral-400">{role}</div>
                  </div>
                </footer>

                <QuoteIcon className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 text-neutral-500/40" />
              </article>
            ))}
          </div>
        </div>

        {/* subtle top aura (neutral) */}
        <div
          className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.12) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </section>
    </main>
  );
}