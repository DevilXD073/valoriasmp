"use client";

import { motion } from "framer-motion";
import GlowButton from "./GlowButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-purple-600/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="mb-4 text-cyan-400 font-semibold tracking-[0.4em]"
        >
          SEASON III
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-6xl font-black leading-tight md:text-8xl"
        >
          <span className="gradientText">
            VALORIASMP
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .3 }}
          className="mt-8 text-2xl font-bold md:text-4xl"
        >
          The Ultimate
          <span className="text-cyan-400">
            {" "}StrengthSMP{" "}
          </span>
          Experience
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .5 }}
          className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300"
        >
          Build your empire.
          Fight powerful enemies.
          Unlock incredible strength.
          Become the strongest player in
          <span className="font-bold text-cyan-400">
            {" "}ValoriaSMP Season 3.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .7 }}
          className="mt-12 flex justify-center"
        >
          <GlowButton
            href="https://discord.gg/PcC4bC69WG"
            target="_blank"
          >
            Join Discord
          </GlowButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur-xl"
        >
          <h3 className="text-xl font-bold text-cyan-400">
            Server IP
          </h3>

          <p className="mt-3 text-gray-300">
            The server is now live!
          </p>

          <p className="mt-2 font-semibold">
            Join our Discord server to get the official IP and stay updated with announcements, events, and giveaways.
          </p>
        </motion.div>

      </div>

    </section>
  );
}
