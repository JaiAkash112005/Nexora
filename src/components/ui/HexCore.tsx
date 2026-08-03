"use client";

import React from "react";
import { 
  motion,
  useSpring
} from "framer-motion";

export default function HexCore() {
  const nodes = [
    { x: "20%", y: "25%" },
    { x: "75%", y: "20%" },
    { x: "85%", y: "65%" },
    { x: "25%", y: "75%" },
    { x: "50%", y: "10%" },
    { x: "50%", y: "90%" },
  ];

  // Mouse values
  const rotateX = useSpring(0, {
    stiffness: 120,
    damping: 15
  });

  const rotateY = useSpring(0, {
    stiffness: 120,
    damping: 15
  });

  const moveX = useSpring(0, {
    stiffness: 120,
    damping: 15
  });

  const moveY = useSpring(0, {
    stiffness: 120,
    damping: 15
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable heavy calculations on mobile viewports to prevent lag
    if (typeof window !== "undefined" && window.innerWidth < 768) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateAmountX = ((y - centerY) / centerY) * 20;
    const rotateAmountY = ((x - centerX) / centerX) * 20;

    rotateX.set(-rotateAmountX);
    rotateY.set(rotateAmountY);

    moveX.set((x - centerX) / 10);
    moveY.set((y - centerY) / 10);
  };

  const resetMouse = () => {
    rotateX.set(0);
    rotateY.set(0);
    moveX.set(0);
    moveY.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMouse}
      style={{
        perspective: "1200px"
      }}
      className="
        relative
        flex
        h-[350px]
        w-[350px]
        md:h-[460px]
        md:w-[460px]
        items-center
        justify-center
        scale-80
        md:scale-100
      "
    >
      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity
        }}
        className="
          absolute
          h-[280px]
          w-[280px]
          md:h-[380px]
          md:w-[380px]
          rounded-full
          bg-purple-600/20
          blur-[90px]
          md:blur-[130px]
        "
      />

      {/* Floating Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={index}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2 + index,
            repeat: Infinity
          }}
          style={{
            left: node.x,
            top: node.y
          }}
          className="
            absolute
            h-3
            w-3
            md:h-4
            md:w-4
            rounded-full
            bg-purple-400
            shadow-[0_0_20px_rgba(168,85,247,0.8)]
            md:shadow-[0_0_30px_rgba(168,85,247,1)]
          "
        />
      ))}

      {/* 3D Reactor */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: moveX,
          y: moveY,
          transformStyle: "preserve-3d"
        }}
        animate={{
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="
          relative
          flex
          h-36
          w-36
          md:h-44
          md:w-44
          items-center
          justify-center
          rounded-full
          border
          border-white/20
          bg-white/5
          backdrop-blur-md
          md:backdrop-blur-xl
          shadow-[0_0_60px_rgba(168,85,247,.5)]
          md:shadow-[0_0_100px_rgba(168,85,247,.6)]
        "
      >
        {/* Inner Energy */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity
          }}
          className="
            absolute
            h-20
            w-20
            md:h-28
            md:w-28
            rounded-full
            bg-gradient-to-br
            from-white
            via-purple-300
            to-purple-700
            shadow-[0_0_50px_rgba(168,85,247,.8)]
            md:shadow-[0_0_80px_rgba(168,85,247,.9)]
          "
        />

        <span
          className="
            relative
            z-10
            text-3xl
            md:text-4xl
            font-black
            text-black
          "
        >
          NX
        </span>
      </motion.div>
    </div>
  );
}