import React from "react";
import { CheckCircle2, Building2, Network, Lightbulb } from "lucide-react";
import img from "../../Images/c.jpeg";

export default function LeaderProfile() {
  const bullets = [
    "Strategic planning for builders and large‑scale projects",
    "Broker network development across Chhattisgarh and pan‑India",
    "Leadership in innovative real estate models",
    "20+ years in strategy, sales, and marketing",
    "Real Estate Expert • Sales Trainer — inspiring growth and excellence in the property sector.",
    "Motivator — inspiring growth and excellence in the property sector."
  ];

  return (
    <section
      id="leader"
      className="relative py-16 lg:py-24 bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      {/* container fixed 1200 */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: Photo (same design, no change) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative mx-auto max-w-[420px] md:max-w-[460px] lg:max-w-[420px]">
              <img
                src={img}
                alt="Pradeep Maheshwari"
                className="
                  w-full aspect-[4/5]
                  object-contain object-[50%_15%]
                "
              />
            </div>
          </div>

          {/* RIGHT: Content (Black + Orange theme) */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-500/10 px-4 py-1 text-xm font-semibold text-orange-200 ring-1 ring-orange-400/30">
              Leadership Profile
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Pradeep Maheshwari
            </h1>

            <p className="mt-1 text-white-200/90 font-semibold">
              Strategic Leader • Real Estate Visionary • Executive Vice President, CAIT Chhattisgarh
            </p>

            <p className="mt-5 text-[15.5px] leading-relaxed text-neutral-300">
              With over two decades of experience in real estate strategy, sales, and marketing,
              Pradeep Maheshwari stands as one of Chhattisgarh’s most respected and forward‑thinking
              professionals in the sector. His career spans strategic planning for builders and
              large‑scale projects, development of broker networks across Chhattisgarh and pan‑India,
              and leadership in innovative real estate models.
            </p>

            {/* Highlights */}
            <ul className="mt-6 grid gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-white/5">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-orange-500/15 text-orange-300 ring-1 ring-orange-400/30">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-neutral-300">{b}</span>
                </li>
              ))}
            </ul>

            {/* Badges */}
           
          </div>
        </div>
      </div>

      {/* subtle top aura (orange) */}
      <div
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(249,115,22,0.12) 0%, rgba(0,0,0,0) 70%)",
        }}
      />
    </section>
  );
}