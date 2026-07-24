"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Swords,
  Users,
  Shield,
  Gift,
  Zap,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Heart,
    title: "StrengthSMP",
    description:
      "Unlock powerful abilities as your strength grows. Progress through custom mechanics and become stronger than ever.",
  },
  {
    icon: Swords,
    title: "Competitive PvP",
    description:
      "Fight intense battles against skilled players and prove yourself in epic combat.",
  },
  {
    icon: Users,
    title: "Teams",
    description:
      "Create your own team, recruit allies, dominate enemies, and build the strongest empire.",
  },
  {
    icon: Shield,
    title: "Balanced Gameplay",
    description:
      "Carefully balanced custom plugins provide a fun and fair experience for everyone.",
  },
  {
    icon: Gift,
    title: "Weekly Events",
    description:
      "Participate in exciting server events, tournaments, giveaways, and win exclusive rewards.",
  },
  {
    icon: Zap,
    title: "High Performance",
    description:
      "Optimized hardware and custom optimizations provide smooth gameplay with minimal lag.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="mb-3 text-cyan-400 font-semibold tracking-[0.3em] uppercase">
          FEATURES
        </p>

        <h2 className="text-5xl font-black">
          Why Play{" "}
          <span className="gradientText">
            ValoriaSMP?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          ValoriaSMP Season III delivers a unique StrengthSMP experience
          packed with custom content, competitive gameplay, and an
          amazing community.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 rounded-3xl border border-cyan-500/20 bg-white/5 p-10 text-center backdrop-blur-xl"
      >
        <h3 className="text-3xl font-black">
          Ready to Begin Your Journey?
        </h3>

        <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
          Whether you're a PvP champion, a builder, or a grinder,
          ValoriaSMP offers an unforgettable adventure with custom
          mechanics, an active community, regular updates, and
          exciting events.
        </p>

        <a
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
        >
          Join Our Discord
        </a>
      </motion.div>
    </section>
  );
}
