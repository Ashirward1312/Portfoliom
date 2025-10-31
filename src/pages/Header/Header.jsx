import React, { useState, useRef, useCallback, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);

  const nav = [
    { label: "Home", href: "#home" },
    { label: "Experties", href: "#expertise" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  const getOffset = useCallback(() => {
    return (headerRef.current?.offsetHeight ?? 80) + 6;
  }, []);

  const smoothScrollTo = useCallback(
    (hash) => {
      const id = (hash || "").replace("#", "");
      const el = document.getElementById(id);
      if (!el) {
        window.location.hash = id;
        return;
      }

      const startY = window.pageYOffset;
      const targetY =
        el.getBoundingClientRect().top + window.pageYOffset - getOffset();

      const duration = 550;
      const startTime = performance.now();

      const ease = (t) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      function step(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const y = startY + (targetY - startY) * ease(t);
        window.scrollTo(0, y);
        if (t < 1) requestAnimationFrame(step);
        else {
          el.classList.add(
            "ring-2",
            "ring-orange-500",
            "ring-offset-2",
            "ring-offset-neutral-950",
            "rounded-xl"
          );
          setTimeout(
            () =>
              el.classList.remove(
                "ring-2",
                "ring-orange-500",
                "ring-offset-2",
                "ring-offset-neutral-950",
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

  const handleNavClick = (e, href) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      smoothScrollTo(href);
      setOpen(false);
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    smoothScrollTo("#contact");
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => smoothScrollTo(window.location.hash), 50);
    }
  }, [smoothScrollTo]);

  return (
    <header
      ref={headerRef}
      className="w-full sticky top-0 z-50 bg-neutral-950 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-[1200px] mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a href="/" className="group flex items-center gap-3">
          <div
            className="
              relative h-10 w-10 rounded-xl grid place-content-center font-bold text-white
              bg-gradient-to-br from-orange-600 to-amber-500 ring-1 ring-orange-400/30 shadow-sm
              transition-all duration-300
              group-hover:from-orange-500 group-hover:to-amber-600 group-hover:ring-orange-400 group-hover:scale-105
            "
            aria-label="Logo"
            title="Pradeep Maheshwari"
          >
            PM
          </div>
          <span className="text-lg md:text-xl font-semibold text-neutral-100 transition-colors group-hover:text-orange-300">
            Pradeep Maheshwari
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-7">
          <nav className="flex items-center gap-7">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative text-neutral-300 hover:text-orange-300 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 rounded"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Contact Us CTA */}
          <button
            type="button"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-black/40 ring-1 ring-orange-400/30 transition-all hover:from-orange-500 hover:to-amber-400 hover:shadow-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
          >
            Contact Us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-white/5 hover:text-orange-300 transition"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-neutral-950">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-neutral-300 hover:text-orange-300 transition"
              >
                {item.label}
              </a>
            ))}

            <button
              type="button"
              onClick={scrollToContact}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 px-5 py-3 text-white font-semibold shadow-md shadow-black/40 ring-1 ring-orange-400/30 transition-all hover:from-orange-500 hover:to-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
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
