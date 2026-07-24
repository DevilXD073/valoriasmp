"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
  {
    name: "Rules",
    href: "/rules",
  },
  {
    name: "Staff",
    href: "/staff",
  },
  {
    name: "Changelog",
    href: "/changelog",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: .7 }}
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/10
      backdrop-blur-xl
      bg-black/30
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-5
        flex
        justify-between
        items-center
        "
      >
        <Link
          href="/"
          className="
          text-3xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          ValoriaSMP
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
              text-gray-300
              hover:text-cyan-400
              transition
              duration-300
              "
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          className="
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-purple-600
          px-5
          py-3
          font-bold
          hover:scale-105
          transition
          "
        >
          Join Discord
        </Link>
      </div>
    </motion.header>
  );
}
