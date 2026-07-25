"use client";

import {
  Heart,
  MessageCircle,
  Shield,
  Swords,
  ChevronUp,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-black/30 backdrop-blur-xl">
      {/* Top Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="gradientText text-3xl font-black">
              ValoriaSMP
            </h2>

            <p className="mt-5 leading-7 text-gray-400">
              The ultimate StrengthSMP experience.
              Build your empire, dominate PvP,
              and become the strongest player in
              Season III.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xl font-bold">
              Navigation
            </h3>

            <div className="space-y-3">

              <a
                href="#about"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                About
              </a>

              <a
                href="#features"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                Features
              </a>

              <a
                href="#faq"
                className="block text-gray-400 transition hover:text-cyan-400"
              >
                FAQ
              </a>

            </div>
          </div>

          {/* Server */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Server
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-gray-400">
                <Swords className="h-5 w-5 text-cyan-400" />
                StrengthSMP
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Shield className="h-5 w-5 text-cyan-400" />
                Balanced Gameplay
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <MessageCircle className="h-5 w-5 text-cyan-400" />
                Active Community
              </div>

            </div>

          </div>

          {/* Discord */}
          <div>

            <h3 className="mb-5 text-xl font-bold">
              Join Our Community
            </h3>

            <p className="leading-7 text-gray-400">
              The official server IP is available
              exclusively inside our Discord server.

              Join today to receive updates,
              announcements,
              giveaways,
              and event notifications.
            </p>

            <a
              href="https://discord.gg/PcC4bC69WG"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/40"
            >
              Join Discord
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">

          <p className="flex items-center gap-2 text-gray-400">

            © {year} ValoriaSMP • Made with

            <Heart className="h-4 w-4 fill-red-500 text-red-500" />

            for the community.

          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full border border-cyan-500/30 bg-white/5 p-3 transition hover:scale-110 hover:border-cyan-400"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5 text-cyan-400" />
          </button>

        </div>

      </div>

    </footer>
  );
}
