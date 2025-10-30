import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav = [
    { label: "Home", href: "#" },
    { label: "Experties", href: "#experties" },
    // { label: "Services", href: "#services" },
    // { label: "Cities", href: "#cities" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-blue-100">
      <div className="max-w-7xl mx-auto h-16 md:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand with hover color change on the logo */}
        <a href="/" className="group flex items-center gap-3">
          <div
            className="
              relative h-10 w-10 rounded-xl grid place-content-center font-bold text-white
              bg-gradient-to-br from-blue-600 to-sky-500
              ring-1 ring-blue-300/30 shadow-sm
              transition-all duration-300
              group-hover:from-sky-500 group-hover:to-blue-700
              group-hover:ring-blue-400 group-hover:scale-105
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

        {/* Desktop navigation (no CTAs) */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="
                relative text-gray-700 hover:text-blue-700 transition
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded
              "
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-blue-600 transition-all group-hover:w-full" />
            </a>
          ))}
        </nav>

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

      {/* Mobile menu (no CTAs) */}
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-3">
            {nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-gray-700 hover:text-blue-700 transition"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}