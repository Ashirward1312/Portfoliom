import React, { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const nav = [
    { label: "Home", href: "#top" },
    { label: "Experties", href: "#experties" },
    // { label: "About", href: "#about" },
    // Contact CTA alag se button me rahega
    { label: "Testimonials", href: "#testimonials" },
  ];

  // Get current sticky header height
  const getOffset = useCallback(() => {
    return (headerRef.current?.offsetHeight ?? 80) + 6; // +6px breathing space
  }, []);

  // Core smooth-scroll with easing + highlight
  const smoothScrollTo = useCallback(
    (hash) => {
      const id = (hash || "").replace("#", "");
      const el = document.getElementById(id);
      if (!el) {
        // fallback to hash if element not on current route
        window.location.hash = id;
        return;
      }

      const startY = window.pageYOffset;
      const targetY =
        el.getBoundingClientRect().top + window.pageYOffset - getOffset();

      const duration = 550; // ms
      const startTime = performance.now();

      // easeInOutCubic
      const ease = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const y = startY + (targetY - startY) * ease(t);
        window.scrollTo(0, y);
        if (t < 1) requestAnimationFrame(step);
        else {
          // brief highlight
          el.classList.add("ring-2", "ring-blue-500", "ring-offset-2", "rounded-xl");
          setTimeout(
            () =>
              el.classList.remove(
                "ring-2",
                "ring-blue-500",
                "ring-offset-2",
                "rounded-xl"
              ),
            900
          );
        }
      }

      requestAnimationFrame(step);
    },
    [getOffset]
  );

  // Handle nav link click
  const handleNavClick = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
      setOpen(false);
    }
  };

  // Dedicated Contact scroll
  const scrollToContact = (e) => {
    e.preventDefault();
    smoothScrollTo("#contact");
    setOpen(false);
  };

  // If page loads with a hash, smooth-scroll after mount
  useEffect(() => {
    if (window.location.hash) {
      // tiny delay so layout settles
      setTimeout(() => smoothScrollTo(window.location.hash), 50);
    }
  }, [smoothScrollTo]);

  return (
    <header
      ref={headerRef}
      className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-100"
    >
      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="group flex items-center gap-3">
          <div
            className="
              relative h-10 w-10 rounded-xl grid place-content-center font-bold text-white
              bg-gradient-to-br from-blue-600 to-sky-500 ring-1 ring-blue-300/30 shadow-sm
              transition-all duration-300
              group-hover:from-sky-500 group-hover:to-blue-700 group-hover:ring-blue-400 group-hover:scale-105
            "
            aria-label="Logo"
            title="Pradeep Maheshwari"
          >
            PM
          </div>
          <span className="text-lg md:text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-700">
            Pradeep Maheshwari
          </span>
        </a>

        {/* Desktop navigation + CTA */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative text-gray-700 hover:text-blue-700 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Us CTA */}
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-600/25 ring-1 ring-blue-400/30 transition-all hover:from-blue-700 hover:to-blue-600 hover:shadow-blue-700/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu + CTA */}
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-gray-700 hover:text-blue-700 transition"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToContact}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-white font-semibold shadow-md shadow-blue-600/25 ring-1 ring-blue-400/30 transition-all hover:from-blue-700 hover:to-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}