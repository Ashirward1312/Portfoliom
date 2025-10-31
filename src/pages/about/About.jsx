import React from "react";
import { CheckCircle2, Building2, Network, Lightbulb } from "lucide-react";
import img from "../../Images/c.jpeg";

export default function LeaderProfile() {
  const bullets = [
    "Strategic planning for builders and large‑scale projects",
    "Broker network development across Chhattisgarh and pan‑India",
    "Leadership in innovative real estate models",
    "20+ years in strategy, sales, and marketing",
  ];

  return (
    <section
      id="leader"
      className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-blue-50/20"
    >
      {/* container fixed 1200 */}
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          {/* LEFT: Photo (smaller width, full image, face/top focus) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative mx-auto max-w-[420px] md:max-w-[460px] lg:max-w-[420px] ">
              <img
                src={img}
                alt="Pradeep Maheshwari"
                className="
                  w-full aspect-[4/5]
                  object-contain object-[50%_15%]
                  
                "
              />
            </div>

            {/* info chip below image (not overlapping face) */}
           
          </div>

          {/* RIGHT: Content */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1 text-xm font-semibold text-blue-700 ring-1 ring-blue-100">
              Leadership Profile
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Pradeep Maheshwari
            </h1>

          <p className="mt-1 text-black font-bold">
  Strategic Leader • Real Estate Visionary • Executive Vice President, CAIT Chhattisgarh
</p>


            <p className="mt-5 text-[15.5px] leading-relaxed text-slate-700">
              With over two decades of experience in real estate strategy, sales, and marketing,
              Pradeep Maheshwari stands as one of Chhattisgarh’s most respected and forward‑thinking
              professionals in the sector. His career spans strategic planning for builders and
              large‑scale projects, development of broker networks across Chhattisgarh and pan‑India,
              and leadership in innovative real estate models.
            </p>

            {/* Highlights */}
            <ul className="mt-6 grid gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100">
                    <CheckCircle2 className="h-4 w-4" />
                  </span>
                  <span className="text-slate-700">{b}</span>
                </li>
              ))}
            </ul>

            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                <Network className="h-4 w-4" /> Pan‑India Network
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 ring-1 ring-amber-100">
                <Lightbulb className="h-4 w-4" /> Innovative Models
              </span>
            </div>

            {/* CTA */}
            {/* <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/20 transition-all hover:from-blue-700 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Contact
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* subtle top aura */}
      <div
        className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
        }}
      />
    </section>
  );
}