"use client";

import { motion } from "framer-motion";
import HexCore from "@/components/ui/HexCore";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020202] text-white">


      {/* Luxury Glow */}

      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[600px]
        w-[600px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-600/10
        blur-[180px]
        "
      />



      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-screen
        max-w-7xl
        items-center
        justify-between
        gap-20
        px-8
        lg:flex-row
        flex-col
        "
      >




        {/* LEFT CONTENT */}


        <motion.div

        initial={{
          opacity:0,
          x:-80
        }}

        animate={{
          opacity:1,
          x:0
        }}

        transition={{
          duration:1
        }}

        className="flex-1"

        >



        {/* Company Name */}


        <motion.h1

        initial={{
          opacity:0,
          y:40
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:1
        }}

        className="
        text-7xl
        md:text-[120px]
        font-bold
        tracking-[12px]
        leading-none
        "

        >

        <span
        className="
        bg-gradient-to-b
        from-white
        via-zinc-300
        to-zinc-700
        bg-clip-text
        text-transparent
        "
        >

        NEXORA

        </span>


        </motion.h1>




        {/* Small Tagline */}


        <motion.p

        initial={{
          opacity:0
        }}

        animate={{
          opacity:1
        }}

        transition={{
          delay:.5
        }}

        className="
        mt-8
        text-sm
        uppercase
        tracking-[8px]
        text-purple-300
        "

        >

        The Next Era of Innovation

        </motion.p>






        {/* Description */}


        <p
        className="
        mt-8
        max-w-lg
        text-lg
        leading-relaxed
        text-zinc-400
        "
        >

        Creating intelligent digital experiences,
        AI solutions and next-generation software
        for modern businesses.

        </p>




        {/* Buttons */}


        <div
        className="
        mt-10
        flex
        gap-5
        "
        >


        <button

        className="
        rounded-full
        bg-white
        px-9
        py-4
        font-semibold
        text-black
        transition
        hover:scale-105
        "

        >

        Start Project →

        </button>




        <button

        className="
        rounded-full
        border
        border-white/20
        bg-white/5
        px-9
        py-4
        text-white
        backdrop-blur-xl
        hover:bg-white/10
        "

        >

        Portfolio

        </button>



        </div>


        </motion.div>







        {/* 3D CORE */}


        <motion.div

        initial={{
          opacity:0,
          scale:.6
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1.3
        }}

        >

        <HexCore />

        </motion.div>




      </div>


    </section>
  );
}