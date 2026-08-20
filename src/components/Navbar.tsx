"use client";

import { useState, useEffect } from "react";
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

  // Prevent scrolling when full-screen menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full border-b border-white/10 bg-[#020202]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
          <a href="#top" className="cursor-pointer text-2xl font-black tracking-widest text-white z-50">
            Nex <span className="text-purple-400">ApX</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden gap-8 text-gray-300 md:flex">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-white transition duration-300">{item.name}</a>
            ))}
          </div>

          {/* Desktop Contact Us Button (Hidden on Mobile) - Tailwind Updated */}
          <div className="hidden md:block">
            <a href="#contact">
              <button className="cursor-pointer rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-[0_0_35px_rgba(139,92,246,0.6)] transition duration-300 hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
          
          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Cinematic Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="h-8 w-8" />
            </button>

            <div className="flex flex-col items-center gap-8 text-2xl font-light tracking-wide text-white">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Contact Us Button - Tailwind Updated to bg-linear-to-r & text-white added */}
              <motion.a
                href="#contact"
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 rounded-full bg-linear-to-r from-purple-600 to-blue-600 px-10 py-3 text-lg font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}