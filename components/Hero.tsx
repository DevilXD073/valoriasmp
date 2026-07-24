"use client";

import { motion } from "framer-motion";
import GlowButton from "./GlowButton";
import AnimatedBackground from "./AnimatedBackground";
import ParticleField from "./ParticleField";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

      <AnimatedBackground />
      <ParticleField />

      {/* Center Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold tracking-[0.4em] text-cyan-400 md:text-base"
        >
          SEASON III
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black leading-tight md:text-8xl"
        >
          <span className="gradientText">VALORIASMP</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-2xl font-bold md:text-4xl"
        >
          The Ultimate{" "}
          <span className="text-cyan-400">StrengthSMP</span> Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Enter the next evolution of Minecraft survival.
          <br />
          Build your empire, conquer powerful enemies, unlock incredible
          abilities, and rise to become the strongest player on
          <span className="font-bold text-cyan-400">
            {" "}ValoriaSMP Season 3.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-5 md:flex-row md:justify-center"
        >
          <GlowButton
            href="https://discord.gg/PcC4bC69WG"
            target="_blank"
          >
            🚀 Join Discord
          </GlowButton>

          <a
            href="#features"
            className="rounded-xl border border-cyan-400/30 bg-white/5 px-8 py-4 font-bold text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
          >
            Explore Features
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-12 max-w-2xl rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            🌐 Server IP
          </h3>

          <p className="mt-4 text-gray-300">
            The server is officially live!
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            The IP address is available exclusively inside our Discord server.
          </p>

          <p className="mt-4 text-gray-400">
            Join the community to receive the IP, announcements, updates,
            giveaways, and participate in exclusive Season 3 events.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
