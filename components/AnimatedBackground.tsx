"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Blue Orb */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        top-20
        left-10
        h-96
        w-96
        rounded-full
        bg-blue-500/20
        blur-[120px]
        "
      />

      {/* Cyan Orb */}
      <motion.div
        animate={{
          x: [0, -150, 80, 0],
          y: [0, 100, -120, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        bottom-20
        right-20
        h-[450px]
        w-[450px]
        rounded-full
        bg-cyan-500/20
        blur-[140px]
        "
      />

      {/* Purple Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-600/20
        blur-[170px]
        "
      />

    </div>
  );
}
