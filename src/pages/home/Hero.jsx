import React from 'react';
import { Phone, Mail, Award, Building2, Star, ChevronRight } from 'lucide-react';
import img from "../../Images/b.jpeg";

export default function PropertyHero() {
  // Smooth scroll to #contact
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Optional: highlight briefly
      el.classList.add('ring-2', 'ring-blue-500');
      setTimeout(() => el.classList.remove('ring-2', 'ring-blue-500'), 1200);
    } else {
      // Fallback: jump to hash if section exists on another route
      window.location.hash = 'contact';
    }
  };

  return (
    <div className="w-full flex items-center justify-center bg-white relative overflow-hidden">
      {/* Soft blue accents (kept) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blue-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-50 blur-2xl" />
      </div>

      {/* Main container - reduced top spacing */}
      <section className="w-full max-w-[1200px] pt-16 md:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Your Reliable Partner in
              <span className="text-blue-600"> Raipur Real Estate</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
              From Shankar Nagar to VIP Road, I help you buy, sell, and invest in premium
              properties across Raipur. With over a decade of expertise, I turn your real
              estate vision into valuable opportunities.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={scrollToContact}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 sm:px-8 sm:py-4 text-white text-sm sm:text-base font-semibold shadow-lg shadow-blue-600/30 ring-1 ring-blue-400/20 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Schedule Consultation
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Contact info (optional, currently hidden lines) */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex items-center gap-2 text-gray-700">
                {/* <Phone className="h-5 w-5 text-blue-600" /> */}
                {/* <span>+91 98765 43210</span> */}
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                {/* <Mail className="h-5 w-5 text-blue-600" /> */}
                {/* <span>contact@propertypro.in</span> */}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
              <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <Building2 className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xl font-semibold text-gray-900">500+</p>
                <p className="text-xs text-gray-600">Properties</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <Award className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="text-xl font-semibold text-gray-900">15+ yrs</p>
                <p className="text-xs text-gray-600">Experience</p>
              </div>
              <div className="rounded-xl border border-blue-100 bg-white p-4 text-center shadow-sm">
                <Star className="h-6 w-6 text-blue-600 mx-auto mb-2 fill-blue-600" />
                <p className="text-xl font-semibold text-gray-900">4.9/5</p>
                <p className="text-xs text-gray-600">Rating</p>
              </div>
            </div>
          </div>

          {/* Right: Image (blue dot removed) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-[24px] overflow-hidden">
              <img
                src={img}
                alt="Property Expert"
                className="w-full object-cover object-top aspect-[4/5]"
                onError={(e) => {
                  const fallback = e.currentTarget.nextElementSibling;
                  e.currentTarget.style.display = 'none';
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="hidden aspect-[4/5] bg-gradient-to-br from-blue-100 via-blue-50 to-white items-center justify-center">
                <div className="text-center p-8">
                  <Building2 className="h-24 w-24 text-blue-300 mx-auto mb-3" />
                  <p className="text-gray-400">Add your professional photo</p>
                </div>
              </div>
            </div>

            {/* Floating badge (kept) */}
            <div className="absolute -bottom-6 -left-6 bg-white px-5 py-4 rounded-2xl shadow-xl border border-blue-100">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-xl font-bold text-gray-900">Trusted Expert</p>
                  <p className="text-xs text-gray-600">500+ happy clients</p>
                </div>
              </div>
            </div>

            {/* Removed the top-right blue dot/badge */}
            {/* <div className="absolute -top-6 -right-6 bg-blue-600 px-4 py-3 rounded-2xl shadow-xl"></div> */}
          </div>
        </div>
      </section>
    </div>
  );
}