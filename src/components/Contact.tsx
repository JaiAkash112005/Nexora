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