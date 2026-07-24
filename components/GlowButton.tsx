"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  target?: "_blank" | "_self";
}

export default function GlowButton({
  href,
  children,
  target = "_self",
}: GlowButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        target={target}
        className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-bold text-white shadow-[0_0_35px_rgba(59,130,246,.45)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(124,58,237,.75)]"
      >
        {children}
      </Link>
    </motion.div>
  );
}
