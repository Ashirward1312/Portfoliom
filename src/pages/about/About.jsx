// import React from "react";

// const CheckIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M9.55 16.45a1 1 0 0 1-1.42 0l-3.3-3.3a1 1 0 1 1 1.42-1.42l2.59 2.58 8.01-8a1 1 0 1 1 1.42 1.41l-8.72 8.73z"
//     />
//   </svg>
// );

// const TrophyIcon = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M18 3h-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1H6a1 1 0 0 0-1 1v2a5 5 0 0 0 4 4.9V12a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-1a3 3 0 0 1-3-3v-1.1A5 5 0 0 0 19 6V4a1 1 0 0 0-1-1Zm-1 3a3 3 0 0 1-2.2 2.9A1 1 0 0 0 14 9v3a1 1 0 0 0 1 1h.06A5.01 5.01 0 0 0 17 9.83V6h0ZM7 6v3.83A5.01 5.01 0 0 0 8.94 13H9a1 1 0 0 0 1-1V9a1 1 0 0 0-.8-.98A3 3 0 0 1 7 6Z"
//     />
//   </svg>
// );

// const ArrowRight = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M13.172 5.172a4 4 0 0 1 5.656 5.656l-6.364 6.364a4 4 0 1 1-5.656-5.656l.707.707a3 3 0 1 0 4.242 4.242l6.364-6.364a3 3 0 0 0-4.242-4.242l-.707.707-1.414-1.414.414-.414Z"
//     />
//   </svg>
// );

// function App() {
//   return (
//     <main className="min-h-screen"id="about">
//       <section className="relative py-16 lg:py-24">
//         <div className="mx-auto max-w-7xl px-6 lg:px-8">
//           <div className="grid items-center gap-12 lg:grid-cols-2">
//             {/* LEFT: Image + decorative shapes */}
//             <div className="relative">
//               {/* Slightly smaller image card */}
//               <div className="mx-auto max-w-[520px] md:max-w-[560px] lg:max-w-[520px] rounded-[40px] bg-white/70 backdrop-blur-sm shadow-[0_20px_60px_-15px_rgba(2,6,23,0.25)] ring-1 ring-black/5 p-3">
//                 <img
//                   src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
//                   alt="Team discussing documents"
//                   className="aspect-[4/3] w-full rounded-[32px] object-cover"
//                 />
//               </div>

//               {/* Dotted decoration */}
//               <div
//                 className="pointer-events-none absolute -left-8 -bottom-10 h-40 w-40 opacity-60"
//                 style={{
//                   backgroundImage:
//                     "radial-gradient(currentColor 1.5px, transparent 1.5px)",
//                   backgroundSize: "14px 14px",
//                   color: "#c7d2fe",
//                 }}
//               />

//               {/* Wavy lines decoration */}
//               <svg
//                 className="pointer-events-none absolute -right-6 -bottom-6 w-48 text-indigo-500/70"
//                 viewBox="0 0 200 50"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M0 30c20-20 40 20 60 0s40 20 60 0 40 20 60 0"
//                   stroke="currentColor"
//                   strokeWidth="6"
//                   strokeLinecap="round"
//                 />
//               </svg>
//             </div>

//             {/* RIGHT: Content */}
//             <div>
//               <p className="mb-3 inline-flex items-center gap-2 text-xm font-semibold tracking-widest text-blue-600">
//                 <span className="inline-block h-1.5 w-1.5 rounded-full bg-blue-600" />
//                 ABOUT 
//               </p>

//               <h1 className="text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
//                 One Of The Fastest Way To Gain Business Success
//               </h1>

//               <p className="mt-5 max-w-2xl text-slate-600">
//                 Things go wrong, have questions. We understand how people work.
//                 Viverrra purus sed aliquet tincidunt, nibh eget entum lobortis
//                 ante. Our team blends strategy, design, and engineering to ship
//                 outcomes that move your metrics.
//               </p>

//               {/* Stat card + bullets */}
//               <div className="mt-8 flex flex-col gap-6">
//                 <div className="flex items-center gap-4">
//                   <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
//                     <div className="flex items-center gap-4">
//                       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
//                         <TrophyIcon className="h-7 w-7" />
//                       </div>
//                       <div>
//                         <div className="text-2xl font-extrabold text-slate-900">
//                           10M
//                         </div>
//                         <div className="text-sm font-medium text-slate-500">
//                           Satisfied Clients
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <ul className="grid gap-4 sm:grid-cols-2">
//                   {[
//                     "100% Better results",
//                     "Faster delivery & iteration",
//                   ].map((item) => (
//                     <li key={item} className="flex items-start gap-3">
//                       <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
//                         <CheckIcon className="h-4 w-4" />
//                       </span>
//                       <span className="text-slate-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="pt-2">
//                   <a
//                     href="#contact"
//                     className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
//                   >
//                     Contact With Us
//                     <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition-all group-hover:translate-x-0.5">
//                       <ArrowRight className="h-4 w-4" />
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* subtle gradient aura */}
//           <div
//             className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
//             style={{
//               background:
//                 "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
//             }}
//           />
//         </div>
//       </section>
//     </main>
//   );
// }

// export default App;