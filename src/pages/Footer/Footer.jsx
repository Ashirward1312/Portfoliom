// import React, { useEffect, useState } from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaArrowUp } from "react-icons/fa";

// const Pin = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
//     />
//   </svg>
// );

// const Phone = (props) => (
//   <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
//     <path
//       fill="currentColor"
//       d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"
//     />
//   </svg>
// );

// const Mail = (props) => (
//   <svg
//     viewBox="0 0 24 24"
//     aria-hidden="true"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.8"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     {...props}
//   >
//     <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
//     <path d="M3 7l9 6 9-6" />
//   </svg>
// );

// const SocialLink = ({ href, label, children }) => (
//   <a
//     href={href}
//     aria-label={label}
//     target="_blank"
//     rel="noreferrer"
//     title={label}
//     className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition-colors hover:border-orange-400 hover:text-orange-400 hover:bg-orange-500/10"
//   >
//     {children}
//   </a>
// );

// export default function FooterPM({
//   brand = "Pradeep Maheshwari",
//   address = "Raipur, Chhattisgarh, India",
//   phone = "+91 98765 43210",
//   email = "hello@pradeepmaheshwari.com",
//   socials = {
//     facebook: "#",
//     instagram: "#",
//     linkedin: "#",
//     twitter: "#",
//   },
// }) {
//   const year = new Date().getFullYear();
//   const [showTop, setShowTop] = useState(false);

//   // Show scroll button after 200px
//   useEffect(() => {
//     const onScroll = () => setShowTop(window.scrollY > 200);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <footer className="-mt-8 md:-mt-12 bg-neutral-950 text-neutral-300 border-t border-white/10 relative">
//       <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
//         {/* Top Section */}
//         <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <h3 className="text-3xl font-extrabold tracking-tight">
//               <span className="text-white">Pradeep</span>{" "}
//               <span className="text-orange-400">Maheshwari</span>
//             </h3>
//             <p className="mt-4 max-w-md leading-relaxed">
//               {brand} — Your trusted real estate partner in Raipur — helping you
//               discover modern properties, premium offices, and verified homes with
//               transparency and ease.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-xl font-semibold text-orange-400">Quick Links</h4>
//             <ul className="mt-5 space-y-3">
//               {[
//                 { label: "Home", href: "#" },
//                 { label: "Testimonials", href: "#testimonials" },
//                 { label: "Contact", href: "#contact" },
//                 { label: "Expertise", href: "#expertise" },
//                 { label: "Achievements", href: "#achievements" },
//               ].map((l) => (
//                 <li key={l.label}>
//                   <a
//                     className="hover:text-orange-300 transition-colors"
//                     href={l.href}
//                   >
//                     {l.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-xl font-semibold text-orange-400">Contact Us</h4>
//             <ul className="mt-5 space-y-4">
//               <li className="flex items-start gap-3">
//                 <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
//                   <Pin className="h-5 w-5" />
//                 </span>
//                 <span>{address}</span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20">
//                   <Phone className="h-5 w-5" />
//                 </span>
//                 <a
//                   href={`tel:${phone.replace(/\s+/g, "")}`}
//                   className="hover:text-orange-300"
//                 >
//                   {phone}
//                 </a>
//               </li>

//               {/* FIXED EMAIL LINE */}
//               <li className="flex items-start gap-3 flex-wrap sm:flex-nowrap">
//                 <span className="grid h-9 w-9 place-items-center rounded-lg bg-orange-500/10 text-orange-300 ring-1 ring-orange-400/20 flex-shrink-0">
//                   <Mail className="h-5 w-5" />
//                 </span>
//                 <a
//                   href={`mailto:${email}`}
//                   className="hover:text-orange-300 whitespace-nowrap"
//                 >
//                   {email}
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Socials */}
//           <div>
//             <h4 className="text-xl font-semibold text-orange-400">Follow Us</h4>
//             <div className="mt-6 flex items-center gap-3">
//               <SocialLink href={socials.facebook} label="Facebook">
//                 <FaFacebookF className="h-4 w-4" />
//               </SocialLink>
//               <SocialLink href={socials.instagram} label="Instagram">
//                 <FaInstagram className="h-4 w-4" />
//               </SocialLink>
//               <SocialLink href={socials.linkedin} label="LinkedIn">
//                 <FaLinkedinIn className="h-4 w-4" />
//               </SocialLink>
//               <SocialLink href={socials.twitter} label="Twitter / X">
//                 <FaXTwitter className="h-4 w-4" />
//               </SocialLink>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-white/10 py-6 text-center text-sm text-neutral-400">
//           Copyright © {year}. All rights reserved, Designed and developed by{" "}
//           <span className="text-orange-400 font-semibold">SP Advertising</span>.
//         </div>
//       </div>

//       {/* Scroll to Top Button */}
//       {showTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 animate-bounce"
//           aria-label="Scroll to top"
//         >
//           <FaArrowUp className="h-5 w-5" />
//         </button>
//       )}
//     </footer>
//   );
// }


import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

const Pin = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 10.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"
    />
  </svg>
);

const Phone = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"
    />
  </svg>
);

const Mail = (props) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

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
  phone = "+91 88710-90476",
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
              {brand} — Your Trusted Real Estate Partner In Raipur Helping You
              Discover Modern Properties, Premium Offices, And Verified Homes
              With Transparency And Ease.
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
              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-black/60 text-neutral-100 ring-1 ring-white/10">
                  <Pin className="h-5 w-5" />
                </span>
                <span>{address}</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-black/60 text-neutral-100 ring-1 ring-white/10">
                  <Phone className="h-5 w-5" />
                </span>
                <a
                  href={`tel:${phone.replace(/\s+/g, "")}`}
                  className="hover:text-neutral-50 transition-colors"
                >
                  {phone}
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
              {/* <SocialLink href={socials.linkedin} label="LinkedIn">
                <FaLinkedinIn className="h-4 w-4" />
              </SocialLink> */}
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