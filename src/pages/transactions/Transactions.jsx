// import React from "react";
// import {
//   CheckCircle2,
//   TrendingUp,
//   KeyRound,
//   Handshake,
//   ShieldCheck,
//   MapPin,
//   BadgeCheck,
//   CalendarCheck,
//   Headset,
// } from "lucide-react";

// export default function WhyChooseUs() {
//   const features = [
//     {
//       title: "Proven Results",
//       desc: "High‑value transactions and on‑time closes backed by process and discipline.",
//       Icon: TrendingUp,
//     },
//     {
//       title: "Exclusive Access",
//       desc: "Off‑market listings and vetted investment opportunities you won’t find publicly.",
//       Icon: KeyRound,
//     },
//     {
//       title: "Market Intel + Negotiation",
//       desc: "Data‑driven underwriting and strong advocacy to protect your position.",
//       Icon: Handshake,
//     },
//     {
//       title: "Ethics & Transparency",
//       desc: "Clear fees, risk disclosure, and documentation at every step—no surprises.",
//       Icon: ShieldCheck,
//     },
//     {
//       title: "Local Expertise",
//       desc: "Deep knowledge of micro‑markets to uncover neighborhood‑level value.",
//       Icon: MapPin,
//     },
//     {
//       title: "Verified Listings",
//       desc: "Diligence, title checks, and documentation to ensure clean transactions.",
//       Icon: BadgeCheck,
//     },
//     {
//       title: "Faster Closings",
//       desc: "Streamlined coordination with lenders, legal, and notary to close on time.",
//       Icon: CalendarCheck,
//     },
//     {
//       title: "End‑to‑End Support",
//       desc: "From discovery to possession — we stay with you throughout the journey.",
//       Icon: Headset,
//     },
//   ];

//   const stats = [
//     { value: "200+", label: "Deals closed" },
//     { value: "$250M+", label: "Total volume" },
//     { value: "95%", label: "Repeat/referral rate" },
//   ];

//   const goContact = (e) => {
//     e.preventDefault();
//     const el = document.getElementById("contact");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//       el.classList.add("ring-2", "ring-orange-500");
//       setTimeout(() => el.classList.remove("ring-2", "ring-orange-500"), 1200);
//     } else {
//       window.location.hash = "contact";
//     }
//   };

//   // Reusable card (dark + orange)
//   const Card = ({ Icon, title, desc }) => (
//     <article className="rounded-2xl bg-black/50 p-5 ring-1 ring-white/10 shadow-sm backdrop-blur transition hover:bg-white/5 hover:ring-orange-400/30">
//       <div className="flex items-start gap-4">
//         <span className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/30">
//           <Icon className="h-6 w-6" />
//         </span>
//         <div>
//           <h3 className="text-base sm:text-lg font-semibold text-white">{title}</h3>
//           <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">{desc}</p>
//         </div>
//       </div>
//     </article>
//   );

//   return (
//     <main className="bg-neutral-950 text-neutral-100">
//       <section className="relative py-14 lg:py-20">
//         <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
//           {/* Header */}
//           <div className="mx-auto max-w-3xl text-center">
//             <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-[19px] font-semibold uppercase tracking-wider text-orange-400 ring-1 ring-orange-400/30">
//               <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
//               Why Choose Us
//             </span>
//             <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-white">
//               {/* Keep or add a subtitle if needed */}
//             </h1>
//           </div>

//           {/* Feature cards — 2 columns */}
//           <div className="mt-12 grid gap-8 lg:grid-cols-2">
//             <div className="space-y-6">
//               {features.slice(0, 4).map(({ title, desc, Icon }) => (
//                 <Card key={title} Icon={Icon} title={title} desc={desc} />
//               ))}
//             </div>

//             <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
//               {features.slice(4, 8).map(({ title, desc, Icon }) => (
//                 <Card key={title} Icon={Icon} title={title} desc={desc} />
//               ))}
//             </div>
//           </div>

//           {/* Stats strip */}
//           <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-black/50 shadow-sm ring-1 ring-white/10 backdrop-blur">
//             <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
//               {stats.map((s) => (
//                 <div key={s.label} className="px-6 py-6 text-center">
//                   <div className="text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
//                   <div className="mt-1 text-sm text-neutral-400">{s.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
//             <button
//               type="button"
//               onClick={goContact}
//               className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/40 ring-1 ring-orange-400/40 transition-all hover:from-orange-500 hover:to-amber-400 hover:shadow-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//             >
//               Book a Strategy Call
//               <span className="transition-transform group-hover:translate-x-0.5">→</span>
//             </button>
//             <a
//               href="#testimonials"
//               className="inline-flex items-center justify-center rounded-full border border-orange-400/30 bg-black/50 px-6 py-3 text-sm font-semibold text-orange-200 backdrop-blur ring-1 ring-white/10 transition-colors duration-200 hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
//             >
//               View Client Stories
//             </a>
//           </div>

//           {/* subtle orange aura */}
//           <div
//             className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
//             style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0) 70%)" }}
//           />
//         </div>
//       </section>
//     </main>
//   );
// }


import React from "react";
import {
  TrendingUp,
  KeyRound,
  Handshake,
  ShieldCheck,
  MapPin,
  BadgeCheck,
  CalendarCheck,
  Headset,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      title: "PROVEN RESULTS",
      desc: "High‑value transactions and on‑time closes backed by process and discipline.",
      Icon: TrendingUp,
    },
    {
      title: "EXCLUSIVE ACCESS",
      desc: "Off‑market listings and vetted investment opportunities you won’t find publicly.",
      Icon: KeyRound,
    },
    {
      title: "MARKET INTEL + NEGOTIATION",
      desc: "Data‑driven underwriting and strong advocacy to protect your position.",
      Icon: Handshake,
    },
    {
      title: "ETHICS & TRANSPARENCY",
      desc: "Clear fees, risk disclosure, and documentation at every step—no surprises.",
      Icon: ShieldCheck,
    },
    {
      title: "LOCAL EXPERTISE",
      desc: "Deep knowledge of micro‑markets to uncover neighborhood‑level value.",
      Icon: MapPin,
    },
    {
      title: "VERIFIED LISTINGS",
      desc: "Diligence, title checks, and documentation to ensure clean transactions.",
      Icon: BadgeCheck,
    },
    {
      title: "FASTER CLOSINGS",
      desc: "Streamlined coordination with lenders, legal, and notary to close on time.",
      Icon: CalendarCheck,
    },
    {
      title: "END‑TO‑END SUPPORT",
      desc: "From discovery to possession — we stay with you throughout the journey.",
      Icon: Headset,
    },
  ];

  const stats = [
    { value: "200+", label: "Deals closed" },
    { value: "$250M+", label: "Total volume" },
    { value: "95%", label: "Repeat/referral rate" },
  ];

  const goContact = (e) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      el.classList.add(
        "ring-2",
        "ring-neutral-100",
        "ring-offset-2",
        "ring-offset-neutral-950",
        "rounded-xl"
      );
      setTimeout(
        () =>
          el.classList.remove(
            "ring-2",
            "ring-neutral-100",
            "ring-offset-2",
            "ring-offset-neutral-950",
            "rounded-xl"
          ),
        1200
      );
    } else {
      window.location.hash = "contact";
    }
  };

  // Reusable card (dark + neutral)
  const Card = ({ Icon, title, desc }) => (
    <article className="rounded-2xl bg-black/50 p-5 ring-1 ring-white/10 shadow-sm backdrop-blur transition hover:bg-white/5 hover:ring-neutral-300/60">
      <div className="flex items-start gap-4">
        <span className="shrink-0 grid h-12 w-12 place-items-center rounded-xl bg-black/60 text-neutral-100 ring-1 ring-white/10">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">
            {title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-neutral-300">
            {desc}
          </p>
        </div>
      </div>
    </article>
  );

  return (
    <main className="bg-neutral-950 text-neutral-100">
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
  {/* Small label (optional) */}
  {/* <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-200">
    <span className="h-1.5 w-1.5 rounded-full bg-white" />
    WHY CHOOSE US
  </span> */}

  {/* Main bold heading */}
  <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
    WHY CHOOSE US
  </h1>
</div>

          {/* Feature cards — 2 columns */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {features.slice(0, 4).map(({ title, desc, Icon }) => (
                <Card key={title} Icon={Icon} title={title} desc={desc} />
              ))}
            </div>

            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
              {features.slice(4, 8).map(({ title, desc, Icon }) => (
                <Card key={title} Icon={Icon} title={title} desc={desc} />
              ))}
            </div>
          </div>

          {/* Stats strip */}
          {/* <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-white/10 bg-black/50 shadow-sm ring-1 ring-white/10 backdrop-blur">
            <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-6 text-center">
                  <div className="text-3xl font-extrabold tracking-tight text-white">
                    {s.value}
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={goContact}
              className="group inline-flex items-center justify-center gap-2
                         rounded-full
                         bg-white text-black font-semibold
                         px-6 py-3 text-sm
                         shadow-md shadow-black/30 ring-1 ring-neutral-200
                         transition-all
                         hover:bg-neutral-100
                         focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-neutral-300
                         focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              BOOK A STRATEGY CALL
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </button>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-full border border-neutral-600 bg-black/50 px-6 py-3 text-sm font-semibold text-neutral-200 backdrop-blur ring-1 ring-white/10 transition-colors duration-200 hover:border-neutral-300 hover:text-neutral-50 hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
              VIEW CLIENT STORIES
            </a>
          </div>

          {/* subtle neutral aura */}
          <div
            className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.12) 0%, rgba(0,0,0,0) 70%)",
            }}
          />
        </div>
      </section>
    </main>
  );
}