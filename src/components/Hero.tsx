"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // Renders an identical static layout on the server and initial client frame
    return (
      <section id="top" className="relative min-h-screen overflow-hidden bg-[#020202] text-white pt-40 sm:pt-48">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[220px]" />
          <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center justify-between gap-20 px-8 lg:flex-row flex-col">
          <div className="flex-1">
            <h1 className="relative inline-block text-[50px] sm:text-[68px] md:text-[90px] lg:text-[105px] font-black leading-none tracking-[8px] md:tracking-[12px] whitespace-nowrap">
              <span className="bg-gradient-to-b from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Nex <span className="text-purple-400">ApX</span>
              </span>
            </h1>
            <p className="mt-8 text-sm uppercase tracking-[9px] text-purple-300">
              THE NEXT ERA OF INNOVATION
            </p>
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
              We train intelligent AI agents, build custom automation, and craft next-generation software that helps businesses scale faster.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-[#020202] text-white pt-40 sm:pt-48">

      {/* Background Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
          absolute
          left-1/2
          top-1/2
          h-[750px]
          w-[750px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/15
          blur-[220px]
          "
        />

        <div
          className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-fuchsia-500/10
          blur-[150px]
          "
        />
      </div>

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-[calc(100vh-120px)]
        max-w-7xl
        items-center
        justify-between
        gap-20
        px-8
        lg:flex-row
        flex-col
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex-1"
        >

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
            relative
            inline-block
            text-[50px]
            sm:text-[68px]
            md:text-[90px]
            lg:text-[105px]
            font-black
            leading-none
            tracking-[8px]
            md:tracking-[12px]
            whitespace-nowrap
            "
          >
            <motion.span
              animate={{
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="
              relative
              bg-gradient-to-b
              from-white
              via-zinc-200
              to-zinc-500
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_15px_rgba(168,85,247,0.35)]
              "
            >
              Nex <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">ApX</span>
            </motion.span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
            mt-8
            text-sm
            uppercase
            tracking-[9px]
            text-purple-300
            "
          >
            THE NEXT ERA OF INNOVATION
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="
            mt-8
            max-w-xl
            text-lg
            leading-8
            text-zinc-400
            "
          >
            We train intelligent AI agents, build custom automation, and craft next-generation software that helps businesses scale faster.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="
            mt-12
            flex
            flex-wrap
            gap-5
            "
          >
            <a href="#contact">
              <button
                className="
                rounded-full
                bg-gradient-to-r
                from-purple-600
                to-fuchsia-600
                px-10
                py-4
                font-semibold
                text-white
                shadow-[0_0_35px_rgba(168,85,247,.35)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-[0_0_55px_rgba(168,85,247,.6)]
                "
              >
                Start Project →
              </button>
            </a>

            <a href="#portfolio">
              <button
                className="
                rounded-full
                border
                border-white/15
                bg-white/5
                px-10
                py-4
                font-medium
                text-white
                backdrop-blur-xl
                transition-all
                duration-300
                hover:border-purple-400/40
                hover:bg-white/10
                hover:-translate-y-1
                "
              >
                Portfolio
              </button>
            </a>
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE - Floating Logo with Blend Mode to remove background box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center flex-1 relative"
        >
          {/* Subtle Ambient Back Glow */}
          <div className="absolute h-64 w-64 rounded-full bg-purple-600/20 blur-[100px] pointer-events-none" />

          {/* Floating Logo Container with screen blend mode to eliminate dark/purple image background */}
          <motion.div
            animate={{
              y: [-12, 12, -12],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 flex items-center justify-center cursor-pointer mix-blend-screen"
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/logo.png" 
              alt="Nex ApX Logo" 
              className="h-72 w-72 sm:h-[420px] sm:w-[420px] object-contain drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]" 
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}