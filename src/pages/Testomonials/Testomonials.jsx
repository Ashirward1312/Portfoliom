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

/* Helpers */
const getInitials = (name = "") => {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : "";
  return (first + last).toUpperCase();
};

/* Data: Thought Leader, Happiness Coach, Real Estate */
const TESTIMONIALS = [
  {
    quote:
      "They helped me structure my ideas, sharpen my message and build a presence that actually converts. The process was calm, clear and deeply strategic.",
    name: "Ananya Verma",
    tag: "Thought Leader",
  },
  {
    quote:
      "From the first session, the focus was on ease and clarity. My programs are now more aligned, simpler to sell, and my clients feel the difference.",
    name: "Rahul Sharma",
    tag: "Happiness Coach",
  },
  {
    quote:
      "Every property, every number and every risk was explained in plain language. I closed with confidence, not pressure — that’s rare in real estate.",
    name: "Meera Patel",
    tag: "Real Estate",
  },
];

export default function TestimonialsBlackWhite() {
  return (
    <main
      id="testimonials"
      className="min-h-screen bg-black text-white"
    >
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-300">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Testimonials
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            REAL WORDS FROM REAL CLIENTS
            </h1>

            <p className="mt-4 text-sm sm:text-base text-neutral-300">
              Thought leader, happiness coach and real estate investor —
              three journeys, one promise:{" "}
              <span className="font-semibold text-white">
                clarity, trust and results.
              </span>
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map(({ quote, name, role, tag }, idx) => (
              <article
                key={idx}
                className="relative flex h-full flex-col rounded-3xl border border-neutral-800 bg-neutral-950 px-6 py-7 shadow-[0_18px_40px_rgba(0,0,0,0.7)]"
              >
                {/* Top row: Tag + Stars */}
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-neutral-700 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-300">
                    {tag}
                  </span>

                  {/* Yellow stars only color */}
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-100">
                  “{quote}”
                </p>

                {/* Footer */}
                <footer className="mt-6 flex items-center gap-4">
                  {/* Initials circle (no image) */}
                  <div
                    className="grid h-12 w-12 place-items-center rounded-full border border-neutral-700 bg-neutral-900 text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {getInitials(name)}
                  </div>

                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-white">
                      {name}
                    </div>
                    <div className="truncate text-xs text-neutral-400">
                      {role}
                    </div>
                  </div>
                </footer>

                <QuoteIcon className="pointer-events-none absolute -bottom-2 -right-2 h-14 w-14 text-neutral-700/60" />
              </article>
            ))}
          </div>

          {/* Bottom line */}
        
        </div>
      </section>
    </main>
  );
}