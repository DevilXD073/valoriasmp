"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 18,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-400/40
        hover:bg-white/10
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 transition-all duration-300 group-hover:bg-cyan-500/20">
          <Icon
            size={36}
            className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
