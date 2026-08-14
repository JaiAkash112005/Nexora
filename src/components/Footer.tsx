"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, X } from "lucide-react";

export default function Footer() {
  const [modalType, setModalType] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer id="contact" className="relative overflow-hidden bg-[#020202] py-16 text-white border-t border-white/10">
        {/* Background Ambient Glow */}
        <div className="absolute left-1/2 bottom-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-8">
          
          {/* Main Footer Container */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            
            {/* Brand & Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
                Nex <span className="text-purple-400">ApX</span>
              </h2>
              <p className="mt-2 max-w-sm text-xs md:text-sm leading-relaxed text-zinc-400">
                Training intelligent AI agents, custom AI automation, and high-performance digital solutions.
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-xs text-zinc-300"
            >
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>contact.nexapx@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>+91 98421 61122</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>HSR Layout, Bangalore</span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Nex ApX Technologies. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="h-3.5 w-3.5 text-purple-400" />
                <span>contact.nexapx@gmail.com</span>
              </div>
              <button 
                onClick={() => setModalType("privacy")} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => setModalType("terms")} 
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* Legal Information Modal */}
      <AnimatePresence>
        {modalType !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 text-white shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setModalType(null)}
                className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Title */}
              <h2 className="text-2xl font-black text-purple-400 font-mono tracking-wide mb-6">
                {modalType === "privacy" ? "Privacy Policy" : "Terms of Service"}
              </h2>

              {/* Content */}
              <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
                {modalType === "privacy" ? (
                  <>
                    <p>Last updated: August 2026</p>
                    <p>
                      At <strong className="text-white">Nex ApX</strong>, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
                    </p>
                    <h3 className="text-white font-bold mt-4">1. Information We Collect</h3>
                    <p>
                      We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows: Contact Data (email address, phone numbers) and Technical Data (IP address, browser type, and version).
                    </p>
                    <h3 className="text-white font-bold mt-4">2. How We Use Your Information</h3>
                    <p>
                      We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide custom automation services, intelligent AI agent deployments, and to respond to your project inquiries.
                    </p>
                    <h3 className="text-white font-bold mt-4">3. Contact Us</h3>
                    <p>
                      If you have any questions about this privacy policy, please contact us at <span className="text-purple-300">contact.nexapx@gmail.com</span>.
                    </p>
                  </>
                ) : (
                  <>
                    <p>Last updated: August 2026</p>
                    <p>
                      Welcome to <strong className="text-white">Nex ApX</strong>. By accessing our website and utilizing our software engineering and AI services, you agree to comply with and be bound by the following terms and conditions.
                    </p>
                    <h3 className="text-white font-bold mt-4">1. Services</h3>
                    <p>
                      Nex ApX provides next-generation software development, AI agent training, custom automations, and digital scaling solutions. All project deliverables and timelines will be governed by specific statements of work agreed upon by both parties.
                    </p>
                    <h3 className="text-white font-bold mt-4">2. Intellectual Property</h3>
                    <p>
                      The content, logos, design assets, and source code provided on this website are the intellectual property of Nex ApX and protected under applicable copyright laws.
                    </p>
                    <h3 className="text-white font-bold mt-4">3. Limitation of Liability</h3>
                    <p>
                      In no event shall Nex ApX be liable for any indirect, incidental, or consequential damages arising out of or in connection with your use of our platform or services.
                    </p>
                  </>
                )}
              </div>

              {/* Footer action */}
              <div className="mt-8 pt-6 border-t border-white/15 flex justify-end">
                <button
                  onClick={() => setModalType(null)}
                  className="rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-2 text-xs font-semibold text-white shadow-lg transition-all hover:scale-105 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}