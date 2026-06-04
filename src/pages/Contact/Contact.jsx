import React, { useState } from "react";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) {
      alert("Please fill name and message before sending.");
      return;
    }

    const whatsappNumber = "918871090476";

    const text = `Hello Pradeep Maheshwari!\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-black text-white py-16 md:py-28 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block border border-gray-700 px-5 py-1.5 rounded-full text-xs tracking-wider font-semibold mb-6 md:mb-8">
            CONTACT US
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
            WE’D LOVE TO HEAR FROM YOU
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Have a question or want to book a site visit? Send us a message and our team will respond soon.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10">

          {/* Left Side */}
          <div className="border border-[#1c1c1c] rounded-3xl p-6 sm:p-8 md:p-10 bg-[#0a0a0a]">

            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Get in touch</h3>

            <p className="text-gray-400 mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
              Reach out via phone or email, or visit our office during working hours.
            </p>

            <div className="space-y-8 md:space-y-10">

              {/* Phone */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#222] flex items-center justify-center">
                  <Phone size={18} className="text-gray-300" />
                </div>
                <div>
                  <a
                    href="tel:+918871090476"
                    className="text-base sm:text-lg font-semibold hover:text-gray-300 transition-colors"
                  >
                    +91 88710-90476
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm mt-0.5">
                    Mon–Sat support line
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#222] flex items-center justify-center">
                  <MapPin size={18} className="text-gray-300" />
                </div>
                <div>
                  <p className="font-semibold leading-snug text-sm sm:text-base pr-2">
                    Mahesh Ventures, LK Logistic Park, Kursi, 3rd Floor, Near Kamal Vihar, Raipur (C.G.)
                  </p>

                  <a
                    href="https://www.google.com/maps?cid=2015291886199415063"
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs sm:text-sm text-gray-400 hover:text-white mt-2 inline-block transition-colors underline decoration-gray-700 underline-offset-4"
                  >
                    Open in Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Box */}
            <div className="mt-10 md:mt-14 border border-[#1c1c1c] rounded-2xl p-5 sm:p-6 bg-[#050505]">
              <h4 className="font-semibold mb-1 text-sm sm:text-base">Working hours</h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Mon–Sat: 9:30 AM – 6:30 PM
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="border border-[#1c1c1c] rounded-3xl p-6 sm:p-8 md:p-10 bg-[#0a0a0a]">

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">

              <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">

                {/* Name */}
                <div>
                  <label className="block text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 focus:outline-none focus:border-gray-500 transition text-sm sm:text-base text-white placeholder-gray-600"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 focus:outline-none focus:border-gray-500 transition text-sm sm:text-base text-white placeholder-gray-600"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium text-gray-300">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 ..."
                  className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 focus:outline-none focus:border-gray-500 transition text-sm sm:text-base text-white placeholder-gray-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm mb-1.5 sm:mb-2 font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  className="w-full bg-[#111] border border-[#222] rounded-xl px-4 py-3 focus:outline-none focus:border-gray-500 transition resize-none text-sm sm:text-base text-white placeholder-gray-600"
                />
              </div>

              {/* Terms */}
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                By submitting, you agree to our{" "}
                <span className="text-gray-300 hover:text-white font-medium cursor-pointer transition-colors">
                  Terms
                </span>{" "}
                &{" "}
                <span className="text-gray-300 hover:text-white font-medium cursor-pointer transition-colors">
                  Privacy Policy
                </span>
                .
              </p>

              {/* Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black font-bold text-sm sm:text-base px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-200 transition-colors"
                >
                  SEND MESSAGE
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16 rounded-2xl sm:rounded-3xl overflow-hidden border border-[#1c1c1c] shadow-2xl relative h-[300px] sm:h-[400px] md:h-[450px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.696929111623!2d81.65365437526121!3d21.19567788049572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd318a22241f%3A0x1bf7dd9a38b42117!2sMahesh%20Ventures%20%7C%20Best%20Real%20Estate%20Consultant%20%7C%20Real%20Estate%20Agent%20%7C%20Property%20Consultant%20%7C%20Property%20Dealer%20in%20Raipur!5e1!3m2!1sen!2sin!4v1780568998496!5m2!1sen!2sin" 
            className="absolute inset-0 w-full h-full border-0"
            style={{ filter: "grayscale(15%) contrast(105%) brightness(92%)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mahesh Ventures Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
