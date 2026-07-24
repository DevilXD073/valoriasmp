"use client";

import { motion } from "framer-motion";
import { Swords, Shield, Trophy } from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "Epic StrengthSMP",
    description:
      "Experience custom StrengthSMP mechanics where every battle makes you stronger and every decision matters.",
  },
  {
    icon: Shield,
    title: "Balanced Gameplay",
    description:
      "Enjoy a fair and competitive environment with active moderation, optimized performance, and custom features.",
  },
  {
    icon: Trophy,
    title: "Season 3 Awaits",
    description:
      "A brand-new world, fresh competition, exciting events, and endless adventures begin in ValoriaSMP Season 3.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="mb-3 text-cyan-400 font-semibold tracking-[0.3em] uppercase">
          About ValoriaSMP
        </p>

        <h2 className="text-5xl font-black">
          Welcome to{" "}
          <span className="gradientText">
            Season III
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          ValoriaSMP Season III brings an entirely fresh
          <span className="text-cyan-400 font-semibold">
            {" "}StrengthSMP{" "}
          </span>
          experience.

          Progress through unique mechanics, dominate PvP,
          build powerful alliances, participate in community events,
          and become one of the strongest warriors on the server.
        </p>
      </motion.div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">

        {features.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15
              }}
              whileHover={{
                y: -10,
                scale: 1.03
              }}
              className="
              card
              group
              rounded-3xl
              "
            >

              <div
                className="
                mb-6
                inline-flex
                rounded-2xl
                bg-cyan-500/10
                p-5
                transition
                group-hover:bg-cyan-500/20
                "
              >
                <Icon
                  size={36}
                  className="text-cyan-400"
                />
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {item.description}
              </p>

            </motion.div>

          );

        })}

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .4 }}
        className="
        mt-20
        rounded-3xl
        border
        border-cyan-500/20
        bg-white/5
        p-10
        text-center
        backdrop-blur-xl
        "
      >

        <h3 className="text-3xl font-black">
          Why ValoriaSMP?
        </h3>

        <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
          We focus on creating a premium survival experience with
          balanced gameplay, custom plugins, regular updates,
          engaging events, and an active community.

          Whether you're a grinder, PvP player, builder,
          or explorer, ValoriaSMP has something for everyone.
        </p>

      </motion.div>

    </section>
  );
}
