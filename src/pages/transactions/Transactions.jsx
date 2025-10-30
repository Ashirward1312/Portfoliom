import React from "react";

/* Icons */
const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M9.55 16.45a1 1 0 0 1-1.42 0l-3.3-3.3a1 1 0 1 1 1.42-1.42l2.59 2.58 8.01-8a1 1 0 1 1 1.42 1.41l-8.72 8.73z"
    />
  </svg>
);

const ChartUpIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 18a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h16ZM20 6a1 1 0 0 1 .8 1.6l-4 5.5a1 1 0 0 1-1.5.12l-3.1-2.79-3.76 4.01a1 1 0 0 1-1.42-1.4l4.5-4.8a1 1 0 0 1 1.4-.07l3.03 2.73 3.38-4.64A1 1 0 0 1 20 6Z"
    />
  </svg>
);

const KeyIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M14 3a6 6 0 1 0 5.66 7.7l1.69 1.7a1 1 0 0 1 .29.7V15a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-1v1a1 1 0 0 1-1 1h-2v-2h1v-2h2v-2h2v-.59l-1.3-1.3A6 6 0 0 0 14 3Zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
    />
  </svg>
);

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2c3 2 6 2 8 2a1 1 0 0 1 1 1v6c0 5.25-3.44 9.29-8.55 10.87a1 1 0 0 1-.9 0C6.44 20.29 3 16.25 3 11V5a1 1 0 0 1 1-1c2 0 5 0 8-2Zm0 2.2C9.72 5.1 7.44 5.26 5 5.2V11c0 4.1 2.64 7.38 7 8.83 4.36-1.45 7-4.73 7-8.83V5.2c-2.44.06-4.72-.1-7-1Z"
    />
  </svg>
);

const HandshakeIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M8.5 6.5 11 9l2-2 1.5 1.5-2 2a2 2 0 0 1-2.83 0L7.5 8.33 3 12.83 4.17 14l2.33-2.33 2.08 2.07A4 4 0 0 0 15 13l2.5-2.5 2.33 2.33L21 11.67l-3.5-3.5-3.17 3.17a2 2 0 0 1-2.83 0L8.5 6.5Z"
    />
  </svg>
);

export default function WhyChooseUs() {
  const bullets = [
    "Proven track record of high-value transactions",
    "Access to exclusive listings and investment opportunities",
    "Strong market intelligence and negotiation expertise",
    "Commitment to ethical and transparent brokerage practices",
  ];

  const features = [
    {
      title: "Proven Results",
      desc: "High‑value transactions and on‑time closes backed by process and discipline.",
      Icon: ChartUpIcon,
    },
    {
      title: "Exclusive Access",
      desc: "Off‑market listings and vetted investment opportunities you won’t find publicly.",
      Icon: KeyIcon,
    },
    {
      title: "Market Intel + Negotiation",
      desc: "Data‑driven underwriting and strong advocacy to protect your position.",
      Icon: HandshakeIcon,
    },
    {
      title: "Ethics & Transparency",
      desc: "Clear fees, risk disclosure, and documentation at every step—no surprises.",
      Icon: ShieldIcon,
    },
  ];

  const stats = [
    { value: "200+", label: "Deals closed" },
    { value: "$250M+", label: "Total volume" },
    { value: "95%", label: "Repeat/referral rate" },
  ]; // Replace with your real numbers

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-100">
              📈 Why Choose Us
            </span>
            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              We align every deal with your investment goals
            </h1>
            <p className="mt-4 text-slate-600">
              Our clients trust us to deliver results—whether it’s identifying
              high‑yield assets or structuring complex transactions, we ensure
              every deal adds measurable value.
            </p>
          </div>

          {/* Bullets */}
          <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                  <CheckIcon className="h-4 w-4" />
                </span>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Feature cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, desc, Icon }) => (
              <article
                key={title}
                className="group rounded-3xl bg-white p-6 ring-1 ring-slate-200/70 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </article>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-4 rounded-3xl bg-white/80 p-6 ring-1 ring-slate-200 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold tracking-tight text-slate-900">{s.value}</div>
                <div className="mt-1 text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition-colors duration-200 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Book a Strategy Call
            </a>
            <a
              href="#stories"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              View Client Stories
            </a>
          </div>

          {/* subtle gradient aura */}
          <div
            className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
            }}
          />
        </div>
      </section>
    </main>
  );
}