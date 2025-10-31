import React, { useState } from "react";

/* Minimal icons */
const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 2a1 1 0 0 1 1-1h3.49a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.24 1.02l-2.2 2.2Z"/>
  </svg>
);
const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"/>
  </svg>
);
const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/>
  </svg>
);
const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="currentColor" d="M5 12a1 1 0 0 1 1-1h10.59l-3.3-3.3a1 1 0 1 1 1.42-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 1 1-1.42-1.4l3.3-3.3H6a1 1 0 0 1-1-1Z"/>
  </svg>
);

export default function ContactWithUs() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    // TODO: Replace with your real endpoint
    setTimeout(() => setStatus("success"), 900); // demo
  }

  return (
    <main className=" bg-gradient-to-b from-blue-50/40 to-white" id="contact">
      <section className="py-16 lg:py-24">
        {/* Fixed 1200px container */}
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xm font-semibold text-blue-700">
              Contact us
            </span>
            <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              We’d love to hear from you
            </h1>
            <p className="mt-3 text-slate-600">
              Have a question or want to book a site visit? Send us a message and our
              team will respond soon.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Left: Contact details */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
              <p className="mt-2 text-slate-600">
                Reach out via phone or email, or visit our office during working hours.
              </p>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-slate-900 font-medium">+91 98765 43210</div>
                    <div className="text-sm text-slate-500">Mon–Sat support line</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-slate-900 font-medium">hello@yourbrand.com</div>
                    <div className="text-sm text-slate-500">We reply within 1 business day</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-slate-900 font-medium">
                      123 MG Road, Bengaluru, KA 560001
                    </div>
                    <a
                      href="https://maps.google.com/?q=123 MG Road, Bengaluru, KA 560001"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-blue-600 hover:underline"
                    >
                      Open in Maps
                    </a>
                  </div>
                </li>
              </ul>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4">
                <div className="text-sm text-slate-600">
                  <span className="font-medium text-slate-700">Working hours</span>
                  <br />
                  Mon–Sat: 9:30 AM – 6:30 PM
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              {status === "success" ? (
                <div
                  className="rounded-2xl bg-blue-50 p-6 text-blue-800"
                  role="status"
                  aria-live="polite"
                >
                  <h3 className="text-lg font-semibold">Thanks for reaching out!</h3>
                  <p className="mt-1 text-sm">
                    We’ve received your message and will get back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your name"
                        className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 ..."
                      className="block w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows="6"
                      placeholder="How can we help you?"
                      className="block w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-slate-900 placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <p className="text-xs text-slate-500">
                    By submitting, you agree to our{" "}
                    <a href="#terms" className="font-medium text-blue-600 hover:underline">
                      Terms
                    </a>{" "}
                    &{" "}
                    <a href="#privacy" className="font-medium text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>

                  <div className="flex items-center justify-end">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "loading" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send message
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-600" role="alert">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* subtle gradient aura */}
        <div
          className="pointer-events-none absolute inset-x-0 -z-10 top-0 h-64"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(59,130,246,0.12) 0%, rgba(59,130,246,0) 70%)",
          }}
        />
      </section>
    </main>
  );
}