"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
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
            <div className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5 text-purple-400" />
              <span>contact.nexapx@gmail.com</span>
            </div>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}