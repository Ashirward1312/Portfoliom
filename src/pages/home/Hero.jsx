import React from 'react';
import { Phone, Mail, Award, Building2, Star, ChevronRight } from 'lucide-react';
import img from "../../Images/bb.png";

export default function PropertyHero() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.classList.add('ring-2', 'ring-orange-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-orange-500'), 1200);
    } else {
      window.location.hash = 'contact';
    }
  };

  return (
    <div className="w-full flex items-center justify-center relative overflow-hidden bg-neutral-950 text-neutral-100" id="home">
      {/* Black + Orange ambient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -right-24 h-[24rem] w-[24rem] rounded-full bg-orange-600/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-20 h-[22rem] w-[22rem] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <section className="w-full max-w-[1200px] pt-14 md:pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Your Reliable Partner in
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent"> Raipur Real Estate</span>
            </h1>

            <p className="mt-2 text-neutral-300 text-base leading-relaxed">
              With 20+ years in real estate strategy, sales, and marketing, Pradeep Maheshwari is one of Chhattisgarh’s most respected professionals.
              He has led strategic planning for major developers and built strong broker networks across India.
              His leadership drives innovation in modern real estate models and growth across the sector.
            </p>

            {/* Primary CTA (Black + Orange) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-black/40 ring-1 ring-orange-400/40 transition-all hover:from-orange-500 hover:via-orange-400 hover:to-amber-400 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                Schedule Consultation
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {/* Optional secondary CTA (uncomment if needed)
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-black/50 px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-orange-200 backdrop-blur ring-1 ring-white/10 transition-all hover:bg-black/60 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
              >
                Get in Touch
              </button>
              */}
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
              <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Building2 className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-xl font-semibold text-white">500+</p>
                <p className="text-xs text-neutral-400">Properties</p>
              </div>
              <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Award className="h-6 w-6 text-orange-400 mx-auto mb-2" />
                <p className="text-xl font-semibold text-white">20+ yrs</p>
                <p className="text-xs text-neutral-400">Experience</p>
              </div>
              <div className="rounded-xl bg-black/50 p-4 text-center shadow-sm ring-1 ring-white/10 backdrop-blur">
                <Star className="h-6 w-6 text-orange-400 mx-auto mb-2 fill-orange-400" />
                <p className="text-xl font-semibold text-white">4.9/5</p>
                <p className="text-xs text-neutral-400">Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden bg-black/50 ring-1 ring-white/10 shadow-xl shadow-black/50">
              <img
                src={img}
                alt="Property Expert"
                className=" w-full object-cover object-top aspect-[4/5] transition-transform duration-500 ease-out hover:scale-[1.03]"
                onError={(e) => {
                  const fallback = e.currentTarget.nextElementSibling;
                  e.currentTarget.style.display = 'none';
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              {/* Fallback if image missing */}
              <div className="hidden aspect-[4/5] bg-gradient-to-br from-black via-neutral-950 to-neutral-900 grid place-items-center">
                <div className="text-center p-8">
                  <Building2 className="h-20 w-20 text-neutral-700 mx-auto mb-3" />
                  <p className="text-neutral-500">Add your professional photo</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur px-5 py-4 rounded-2xl shadow-2xl ring-1 ring-orange-400/30">
              <div className="flex items-center gap-3">
                <div className="bg-orange-500/15 p-3 rounded-full ring-1 ring-orange-400/30">
                  <Award className="h-5 w-5 text-orange-300" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white leading-tight">Trusted Expert</p>
                  <p className="text-xs text-neutral-400">500+ happy clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Optional contact lines (dark + orange)
        <div className="mt-6 flex flex-wrap gap-6">
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 text-neutral-300 hover:text-orange-200 transition-colors">
            <Phone className="h-5 w-5 text-orange-400" /> +91 98765 43210
          </a>
          <a href="mailto:contact@propertypro.in" className="inline-flex items-center gap-2 text-neutral-300 hover:text-orange-200 transition-colors">
            <Mail className="h-5 w-5 text-orange-400" /> contact@propertypro.in
          </a>
        </div>
        */}
      </section>
    </div>
  );
}