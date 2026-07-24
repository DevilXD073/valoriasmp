"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do I join ValoriaSMP?",
    answer:
      "Join our Discord server to receive the official server IP and all the latest announcements.",
  },
  {
    question: "What is StrengthSMP?",
    answer:
      "StrengthSMP is a custom survival experience featuring unique progression, powerful abilities, PvP, events, and much more.",
  },
  {
    question: "Is the server Pay-to-Win?",
    answer:
      "No. ValoriaSMP is designed to provide a fair and balanced gameplay experience for everyone.",
  },
  {
    question: "Which Minecraft version is supported?",
    answer:
      "Please check our Discord server for the latest supported Minecraft version and connection information.",
  },
  {
    question: "Where can I get the server IP?",
    answer:
      "The official server IP is shared exclusively inside our Discord server.",
  },
  {
    question: "How can I report bugs or hackers?",
    answer:
      "Open a support ticket in our Discord server and our staff team will assist you as soon as possible.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-cyan-400">
          FAQ
        </p>

        <h2 className="text-5xl font-black">
          Frequently Asked{" "}
          <span className="gradientText">
            Questions
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Everything you need to know before joining
          ValoriaSMP Season III.
        </p>
      </motion.div>

      <div className="mt-16 space-y-5">
        {faqs.map((faq, index) => {
          const isOpen = open === index;

          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <button
                onClick={() =>
                  setOpen(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-white/10 px-6 py-5 text-gray-300 leading-7">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-16 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 text-center backdrop-blur-xl"
      >
        <h3 className="text-2xl font-bold">
          Still have questions?
        </h3>

        <p className="mt-4 text-gray-300">
          Join our Discord community and our staff team will be happy to help you.
        </p>

        <a
          href="https://discord.gg/PcC4bC69WG"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 px-8 py-4 font-bold text-white transition hover:scale-105"
        >
          Join Discord
        </a>
      </motion.div>
    </section>
  );
}
