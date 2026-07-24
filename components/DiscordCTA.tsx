"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";

export default function DiscordCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-6xl rounded-3xl border border-cyan-500/20 bg-white/5 p-10 backdrop-blur-xl md:p-16"
      >
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Left */}
          <div>
            <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4">
              <MessageCircle className="h-10 w-10 text-cyan-400" />
            </div>

            <h2 className="text-4xl font-black md:text-5xl">
              Join the{" "}
              <span className="gradientText">
                ValoriaSMP Community
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              The server is now live, but the official server IP is shared
              exclusively inside our Discord server.
            </p>

            <p className="mt-4 text-gray-400">
              Join today to receive:
            </p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Official Server IP</span>
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Announcements & Updates</span>
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Events & Giveaways</span>
              </li>

              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-cyan-400" />
                <span>Community Support</span>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-cyan-500/20 bg-black/30 p-8 text-center">
            <h3 className="text-3xl font-black">
              🚀 Ready to Play?
            </h3>

            <p className="mt-6 leading-8 text-gray-300">
              Become part of ValoriaSMP Season III and begin your
              StrengthSMP adventure with players from around the world.
            </p>

            <a
              href="https://discord.gg/PcC4bC69WG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
            >
              Join Discord
              <ArrowRight className="h-5 w-5" />
            </a>

            <p className="mt-6 text-sm text-gray-400">
              Server IP available inside Discord.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
