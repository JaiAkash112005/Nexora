"use client";

import { motion } from "framer-motion";

const navItems = [
  "Home",
  "Services",
  "Portfolio",
  "About",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <div className="cursor-pointer bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-500 bg-clip-text text-3xl font-black tracking-widest text-transparent">
          NEXORA
        </div>

        {/* Desktop Menu */}
        <div className="hidden gap-8 text-gray-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative transition duration-300 hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Button */}
        <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]">
          Get Started
        </button>

      </div>
    </motion.nav>
  );
}