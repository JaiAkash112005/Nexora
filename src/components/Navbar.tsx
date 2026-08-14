"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#top" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <a href="#top" className="cursor-pointer text-3xl font-black tracking-widest text-white">
          Nex <span className="text-purple-400">ApX</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-gray-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <a href="#contact">
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] cursor-pointer">
              Contact Us
            </button>
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {/* Mobile Dropdown / Sliding Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-[#0A0A0A]/95 backdrop-blur-xl px-8 py-6"
          >
            <div className="flex flex-col gap-5 text-base font-medium text-gray-300">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="transition duration-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  <button className="w-full rounded-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-sm font-semibold text-white text-center shadow-lg transition duration-300 hover:scale-105">
                    Contact Us
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}