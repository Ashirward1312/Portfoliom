import React, { useState } from "react";

/* Minimal icons */
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"
    />
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
    />
  </svg>
);
const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
    />
  </svg>
);
const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path
      fill="currentColor"
      d="M5 12a1 1 0 0 1 1-1h10.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.42-1.4l3.3-3.3H6a1 1 0 0 1-1-1Z"
    />
  </svg>
);

export default function ContactWithUs() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "363556af-2a82-49cc-84f0-1f8851f273ab");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        e.target.reset();
      } else {
        console.error("Web3Forms error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submit error:", error);
      setStatus("error");
    }
  }

  return (
    <main
      className="relative bg-neutral-950 text-neutral-100 -mb-8 md:-mb-12"
      id="contact"
    >
      <section className="relative py-16 lg:py-24 pb-0">
        {/* Fixed 1200px container */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-neutral-700 bg-black/50 px-3 py-1 text-xs sm:text-sm font-semibold text-neutral-200">
              CONTACT US
            </span>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-5xl">
              WE’D LOVE TO HEAR FROM YOU
            </h1>
            <p className="mt-3 text-neutral-300">
              Have a question or want to book a site visit? Send us a message and our
              team will respond soon.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Left: Contact details */}
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-8 ring-1 ring-white/10 backdrop-blur">
              <h2 className="text-xl font-semibold text-white">Get in touch</h2>
              <p className="mt-2 text-neutral-300">
                Reach out via phone or email, or visit our office during working hours.
              </p>

              <ul className="mt-6 space-y-4">
                {/* Phone – same as footer */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/60 text-neutral-100 ring-1 ring-white/10">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-white font-medium">
                      <a
                        href="tel:+918871090476"
                        className="hover:underline"
                      >
                        +91 88710-90476
                      </a>
                    </div>
                    <div className="text-sm text-neutral-400">
                      Mon–Sat support line
                    </div>
                  </div>
                </li>

                {/* Address – same as footer + maps link */}
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-black/60 text-neutral-100 ring-1 ring-white/10">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-white font-medium">
                      Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near
                      Kamal Vihar, Raipur (C.G.)
                    </div>
                    <a
                      href="https://maps.google.com/?q=Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-neutral-200 hover:text-neutral-50 hover:underline"
                    >
                      Open in Maps
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl bg-black/40 p-4 ring-1 ring-white/10">
                <div className="text-sm text-neutral-300">
                  <span className="font-medium text-neutral-200">
                    Working hours
                  </span>
                  <br />
                  Mon–Sat: 9:30 AM – 6:30 PM
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-8 ring-1 ring-white/10 backdrop-blur">
              {status === "success" ? (
                <div
                  className="rounded-2xl bg-black/60 p-6 text-neutral-100 ring-1 ring-white/10"
                  role="status"
                  aria-live="polite"
                >
                  <h3 className="text-lg font-semibold">
                    Thanks for reaching out!
                  </h3>
                  <p className="mt-1 text-sm">
                    We’ve received your message and will get back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-neutral-200">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="block w-full rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2.5 text-neutral-100 placeholder-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-neutral-200">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="block w-full rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2.5 text-neutral-100 placeholder-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-200">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 ..."
                      className="block w-full rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2.5 text-neutral-100 placeholder-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="mb-1 block text-sm font-medium text-neutral-200">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      placeholder="How can we help you?"
                      className="block w-full resize-y rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2.5 text-neutral-100 placeholder-neutral-400 shadow-sm focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-200"
                    />
                  </div>

                  <p className="text-xs text-neutral-400">
                    By submitting, you agree to our{" "}
                    <a
                      href="#terms"
                      className="font-medium text-neutral-200 hover:text-neutral-50 hover:underline"
                    >
                      Terms
                    </a>{" "}
                    &{" "}
                    <a
                      href="#privacy"
                      className="font-medium text-neutral-200 hover:text-neutral-50 hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </p>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-xl
                                 bg-white text-black
                                 px-5 py-3 font-semibold
                                 shadow-sm shadow-black/30 ring-1 ring-neutral-200
                                 transition-all
                                 hover:bg-neutral-100
                                 focus-visible:outline-none
                                 focus-visible:ring-2 focus-visible:ring-neutral-300
                                 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950
                                 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          SEND MESSAGE
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400" role="alert">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Top neutral aura */}
        <div
          className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(148,163,184,0.12) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        {/* Bottom neutral aura */}
        <div
          className="pointer-events-none absolute inset-x-0 -z-10 bottom-0 h-40"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 100%, rgba(148,163,184,0.10) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </section>
    </main>
  );
}