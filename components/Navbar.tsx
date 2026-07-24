"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/30 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-3xl font-black text-transparent"
        >
          ValoriaSMP
        </Link>

        <nav className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 font-bold text-white transition hover:scale-105"
        >
          Join Discord
        </a>
      </div>
    </motion.header>
  );
}
