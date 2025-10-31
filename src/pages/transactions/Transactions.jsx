import React from "react";
import {
  CheckCircle2,
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
  const bullets = [];

  // 8 relatable features with mixed accent colors
  const features = [
    {
      title: "Proven Results",
      desc: "High‑value transactions and on‑time closes backed by process and discipline.",
      Icon: TrendingUp,
      badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
    },
    {
      title: "Exclusive Access",
      desc: "Off‑market listings and vetted investment opportunities you won’t find publicly.",
      Icon: KeyRound,
      badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
    },
    {
      title: "Market Intel + Negotiation",
      desc: "Data‑driven underwriting and strong advocacy to protect your position.",
      Icon: Handshake,
      badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
    },
    {
      title: "Ethics & Transparency",
      desc: "Clear fees, risk disclosure, and documentation at every step—no surprises.",
      Icon: ShieldCheck,
      badgeClass: "bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100",
    },
    {
      title: "Local Expertise",
      desc: "Deep knowledge of micro‑markets to uncover neighborhood‑level value.",
      Icon: MapPin,
      badgeClass: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    },
    {
      title: "Verified Listings",
      desc: "Diligence, title checks, and documentation to ensure clean transactions.",
      Icon: BadgeCheck,
      badgeClass: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    },
    {
      title: "Faster Closings",
      desc: "Streamlined coordination with lenders, legal, and notary to close on time.",
      Icon: CalendarCheck,
      badgeClass: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
    },
    {
      title: "End‑to‑End Support",
      desc: "From discovery to possession — we stay with you throughout the journey.",
      Icon: Headset,
      badgeClass: "bg-amber-50 text-amber-600 ring-1 ring-amber-100",
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
      el.classList.add("ring-2", "ring-blue-500");
      setTimeout(() => el.classList.remove("ring-2", "ring-blue-500"), 1200);
    } else {
      window.location.hash = "contact";
    }
  };

  // Split into two columns with 4 items each
  const colLeft = features.slice(0, 4);
  const colRight = features.slice(4, 8);

  const Card = ({ Icon, title, desc, badgeClass }) => (
    <article className="rounded-2xl bg-white/95 p-5 ring-1 ring-slate-200/80 shadow-sm transition hover:bg-slate-50/70 hover:ring-slate-300">
      <div className="flex items-start gap-4">
        <span className={`shrink-0 grid h-12 w-12 place-items-center rounded-xl ${badgeClass}`}>
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{desc}</p>
        </div>
      </div>
    </article>
  );

  return (
    <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <section className="relative py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[13px] font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-blue-100">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Why Choose Us
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900">
              We align every deal with your investment goals
            </h1>
          </div>

          {/* Feature cards — 2 columns, each with 4 items (icon left, content right) */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              {colLeft.map(({ title, desc, Icon, badgeClass }) => (
                <Card key={title} Icon={Icon} title={title} desc={desc} badgeClass={badgeClass} />
              ))}
            </div>

            <div className="space-y-6 lg:border-l lg:border-slate-200/70 lg:pl-8">
              {colRight.map(({ title, desc, Icon, badgeClass }) => (
                <Card key={title} Icon={Icon} title={title} desc={desc} badgeClass={badgeClass} />
              ))}
            </div>
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 max-w-5xl rounded-3xl border border-slate-200 bg-white/90 shadow-sm">
            <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-6 text-center">
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={goContact}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/20 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Book a Strategy Call
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
            <a
              href="#testimonials"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              View Client Stories
            </a>
          </div>

          {/* subtle gradient aura */}
          <div
            className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
            style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)" }}
          />
        </div>
      </section>
    </main>
  );
}