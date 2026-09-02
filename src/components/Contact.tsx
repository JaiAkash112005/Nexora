"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "b533f6ef-5a4b-4346-a372-87674c9c762e",
          subject: `New Message from ${formData.firstName} ${formData.lastName} - Nex ApX`,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#020202] py-36 text-white border-t border-white/10">
      <div className="absolute right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >
          <p className="mb-5 text-sm uppercase tracking-[10px] text-purple-400">
            GET IN TOUCH
          </p>

          <h2 className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-5xl font-black text-transparent md:text-7xl">
            Let&apos;s Build the
          </h2>

          <h3 className="mt-4 text-4xl font-bold text-purple-300 md:text-5xl">
            Next Era Together
          </h3>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <a
              href="mailto:contact.nexapx@gmail.com"
              className="flex items-center gap-6 p-4 transition-transform duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-400 transition-transform duration-300 group-hover:scale-110">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Email Us</h4>
                <p className="text-sm text-zinc-400 mt-0.5">
                  contact.nexapx@gmail.com
                </p>
              </div>
            </a>

            <div className="flex items-center gap-6 p-4 transition-transform duration-300 hover:scale-105 group cursor-pointer">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-400 transition-transform duration-300 group-hover:scale-110">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Call Us</h4>
                <div className="flex flex-col space-y-0.5 mt-0.5">
                  <a href="tel:+919842161122" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    +91 98421 61122
                  </a>
                  <a href="tel:+919344208635" className="text-sm text-zinc-400 hover:text-white transition-colors">
                    +91 93442 08635
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 transition-transform duration-300 hover:scale-105 group cursor-pointer">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-purple-400 transition-transform duration-300 group-hover:scale-110">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Location</h4>
                <p className="text-sm text-zinc-400 mt-0.5">
                  HSR Layout, Bangalore
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[32px] border border-white/10 bg-white/[0.02] p-8 md:p-12 backdrop-blur-2xl shadow-[0_0_60px_rgba(0,0,0,0.6)] relative"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-16 text-center space-y-4"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you for reaching out to <span className="text-purple-300">Nex ApX</span>. Your message has been sent to your inbox.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="John"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm md:text-base text-white placeholder-zinc-600 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Doe"
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm md:text-base text-white placeholder-zinc-600 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm md:text-base text-white placeholder-zinc-600 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Contact Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 93442 08635"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm md:text-base text-white placeholder-zinc-600 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm md:text-base text-white placeholder-zinc-600 focus:border-purple-500/50 focus:bg-white/10 focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-700 py-4 text-sm md:text-base font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-all hover:shadow-[0_0_55px_rgba(168,85,247,0.7)] hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-5 w-5" />
                    </>
                  )}
                </button>

              </form>
            )}

          </motion.div>

        </div>
      </div>
    </section>
  );
}
<a
  href="https://wa.me/919842161122?text=Hello%20Nex%20ApX,%20I%20would%20like%20to%20enquire%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] transition duration-300 hover:scale-105 hover:bg-emerald-500"
>
  {/* WhatsApp SVG Symbol */}
  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
  <span>Chat on WhatsApp</span>
</a>