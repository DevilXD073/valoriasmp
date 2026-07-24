"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Swords, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Discord Members",
  },
  {
    icon: Swords,
    value: "1000+",
    label: "Epic Battles",
  },
  {
    icon: Trophy,
    value: "50+",
    label: "Community Events",
  },
  {
    icon: Zap,
    value: "24/7",
    label: "Server Uptime",
  },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="text-5xl font-black">
          Server <span className="gradientText">Statistics</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Join thousands of players in one of the most exciting
          StrengthSMP experiences.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="card text-center"
            >
              <div className="mb-5 flex justify-center">
                <div className="rounded-2xl bg-cyan-500/10 p-4">
                  <Icon
                    size={36}
                    className="text-cyan-400"
                  />
                </div>
              </div>

              <h3 className="text-4xl font-black text-cyan-400">
                {stat.value}
              </h3>

              <p className="mt-3 text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
