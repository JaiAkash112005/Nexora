"use client";

import { motion } from "framer-motion";

export default function ParticleBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#020202]">
      {/* Blob 1 - Top Left */}
      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -100, 80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 -top-20 h-[550px] w-[550px] rounded-full bg-purple-600/25 blur-[150px]"
      />

      {/* Blob 2 - Center Right */}
      <motion.div
        animate={{
          x: [0, -140, 90, 0],
          y: [0, 140, -70, 0],
          scale: [1, 0.85, 1.35, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-5%] top-[30%] h-[650px] w-[650px] rounded-full bg-indigo-600/20 blur-[170px]"
      />

      {/* Blob 3 - Bottom Left */}
      <motion.div
        animate={{
          x: [0, 100, -120, 0],
          y: [0, -90, 110, 0],
          scale: [1, 1.15, 0.75, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] left-[15%] h-[600px] w-[600px] rounded-full bg-blue-600/20 blur-[160px]"
      />
    </div>
  );
}