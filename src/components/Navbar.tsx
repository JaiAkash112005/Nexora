"use client";

import { motion } from "framer-motion";

const navItems = [
  { name: "Home", href: "#top" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
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
        
        {/* Custom SVG Logo */}
        <a href="#top" className="cursor-pointer flex items-center">
          <svg width="150" height="40" viewBox="0 0 180 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="nexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C084FC" />
                <stop offset="50%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <g transform="translate(5, 5)">
              <polygon points="20,2 35,10 35,30 20,38 5,30 5,10" fill="rgba(168, 85, 247, 0.1)" stroke="url(#nexGradient)" strokeWidth="2" filter="url(#glow)" />
              <circle cx="20" cy="20" r="5" fill="url(#nexGradient)" />
            </g>
            <text x="52" y="32" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2" fill="#FFFFFF">
              NEX <tspan fill="url(#nexGradient)">APX</tspan>
            </text>
          </svg>
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

        {/* Button */}
        <a href="#contact">
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(139,92,246,0.6)]">
            Contact Us
          </button>
        </a>

      </div>
    </motion.nav>
  );
}