"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
}

export default function GlowButton({
  href,
  children,
}: GlowButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
    >
      <Link
        href={href}
        className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-8
        py-4
        font-bold
        text-white
        bg-gradient-to-r
        from-blue-600
        via-cyan-500
        to-purple-600
        shadow-[0_0_35px_rgba(59,130,246,.45)]
        transition-all
        duration-300
        hover:shadow-[0_0_60px_rgba(124,58,237,.75)]
        "
      >
        {children}
      </Link>
    </motion.div>
  );
}
