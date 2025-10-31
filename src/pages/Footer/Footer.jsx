import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Pin = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" />
  </svg>
);
const Phone = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z" />
  </svg>
);
const Mail = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
  </svg>
);

const SocialLink = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    title={label}
    className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors hover:border-orange-400 hover:text-orange-400 hover:bg-orange-500/10"
  >
    {children}
  </a>
);

export default function FooterPM({
  brand = "Pradeep Maheshwari",
  address = "Raipur, Chhattisgarh, India",
  phone = "+91 98765 43210",
  email = "hello@pradeepmaheshwari.com",
  socials = {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    twitter: "#",
  },
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="-mt-8 md:-mt-12 bg-neutral-950 text-neutral-300 border-t border-white/10">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Top */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight">
              <span className="text-white">Pradeep</span>{" "}
              <span className="text-orange-400">Maheshwari</span>
            </h3>
            <p className="mt-4 max-w-md leading-relaxed">
              {brand} — Your trusted real estate partner in Raipur — helping you discover modern properties, premium offices, and verified homes with transparency and ease.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-orange-400">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {[
                { label: "Home", href: "#" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact", href: "#contact" },
                { label: "Expertise", href: "#expertise" },
                { label: "Achievements", href: "#achievements" },
              ].map((l) => (
                <li key={l.label}>
                  <a className="hover:text-orange-300 transition-colors" href={l.href}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-semibold text-orange-400">Contact Us</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                  <Pin className="h-5 w-5" />
                </span>
                <span>{address}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                  <Phone className="h-5 w-5" />
                </span>
                <a href={`tel:${phone.replace(/\s+/g, "")}`} className="hover:text-orange-300">
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
                  <Mail className="h-5 w-5" />
                </span>
                <a href={`mailto:${email}`} className="hover:text-orange-300">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-xl font-semibold text-orange-400">Follow Us</h4>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={socials.facebook} label="Facebook">
                <FaFacebookF className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={socials.instagram} label="Instagram">
                <FaInstagram className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={socials.linkedin} label="LinkedIn">
                <FaLinkedinIn className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={socials.twitter} label="Twitter / X">
                <FaXTwitter className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-400">
          © {year} {brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}