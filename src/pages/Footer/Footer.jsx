import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    title={label}
    className="group inline-flex h-10 w-10 items-center justify-center rounded-full
               border border-white/10 text-neutral-300
               transition-colors
               hover:border-neutral-300 hover:text-neutral-50 hover:bg-white/5"
  >
    {children}
  </a>
);

export default function FooterPM({
  brand = "Pradeep Maheshwari",
  address = "Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)",
  phone = "+91 88710 90476",
  email = "hello@pradeepmaheshwari.com",
  socials = {
    facebook:
      "https://www.facebook.com/people/Headquarter-HQ-In-Association-with-Kursi/61582888842094/",
    instagram: "https://www.instagram.com/headquarterkursi/",
    linkedin: "#",
    twitter: "https://x.com/maheshwari95189",
  },
}) {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="-mt-8 md:-mt-12 bg-neutral-950 text-neutral-300 border-t border-white/10 relative">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">PRADEEP</span>{" "}
              <span className="text-neutral-200">MAHESHWARI</span>
            </h3>
            <p className="mt-4 max-w-md leading-relaxed">
              {brand} — Happiness Coach, Thought Leader, and your trusted real
              estate partner in Raipur, helping you find happy homes and
              inspiring spaces with honesty and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-100">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
                { label: "Expertise", href: "#expertise" },
                { label: "Achievements", href: "#achievements" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    className="hover:text-neutral-50 transition-colors"
                    href={l.href}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-100">
              Contact Us
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="leading-relaxed">
                  📍 {address}
                </span>
              </li>

              <li>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hover:text-neutral-50 transition-colors"
                >
                  📞 {phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xl font-semibold text-neutral-100">
              Follow Us
            </h4>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={socials.facebook} label="Facebook">
                <FaFacebookF className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={socials.instagram} label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={socials.twitter} label="Twitter / X">
                <FaXTwitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-400">
          Copyright © {year}. All rights reserved, Designed and Developed by{" "}
          <a
            href="https://spadvertising.in/"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-100 font-semibold hover:text-neutral-50 underline-offset-4 hover:underline"
          >
            SP ADVERTISING
          </a>
          .
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6
                     rounded-full p-3
                     bg-neutral-100 text-neutral-950
                     shadow-lg shadow-black/40
                     transition-all duration-300 hover:bg-neutral-200"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}