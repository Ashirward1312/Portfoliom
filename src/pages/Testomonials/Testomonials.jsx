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
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Great market intelligence and clear communication. They surfaced a high‑yield opportunity we almost missed.",
    name: "Aarav Mehta",
    role: "Partner",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&h=200&fit=crop&crop=faces",
  },
  {
    quote:
      "Smooth execution from underwriting to close. Professional and transparent throughout.",
    name: "Sara Khan",
    role: "Director",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&fit=crop&crop=faces",
  },
];

export default function TestimonialsBlue({ items = DEFAULT_TESTIMONIALS }) {
  return (
    <main className="min-h-screen bg-[#F6F9FF]"id="testimonials">
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
              Our Testimonials
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
              We Are Very Glad To Get
              <br className="hidden sm:block" /> Client Review
            </h1>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map(({ quote, name, role, avatar }, idx) => (
              <article
                key={idx}
                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm ring-1 ring-slate-100 transition hover:shadow-md"
              >
                {/* Blue stars */}
                <div className="flex items-center gap-1 text-blue-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5" />
                  ))}
                </div>

                <p className="mt-4 text-[17px] leading-relaxed text-slate-700">
                  “{quote}”
                </p>

                <footer className="mt-6 flex items-center gap-4">
                  <img
                    src={avatar}
                    alt=""
                    className="h-14 w-14 rounded-full object-cover ring-1 ring-slate-200"
                  />
                  <div>
                    <div className="text-lg font-semibold text-slate-900">
                      {name}
                    </div>
                    <div className="text-sm text-slate-500">{role}</div>
                  </div>
                </footer>

                {/* soft quote mark */}
                <QuoteIcon className="pointer-events-none absolute bottom-6 right-6 h-10 w-10 text-blue-200/60" />
              </article>
            ))}
          </div>

          {/* subtle corner gradient for section vibe */}
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