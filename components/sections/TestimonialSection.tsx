"use client";

import React from "react";
import { motion } from "framer-motion";

export function TestimonialSection() {
  const testimonials = [
    {
      text: "Vibe Prompter gave me a prompt so good, Cursor built my entire Auth flow without a single manual edit. It's basically a senior engineer in my pocket.",
      author: "Miras K.",
      role: "Lead Creative Developer"
    },
    {
      text: "I used to spend 20 minutes writing context files for AI to avoid hallucinations. Now my Telegram bot gives me the perfect rules format instantly.",
      author: "Arystan S.",
      role: "Freelance Architect"
    },
    {
      text: "Literally transcended my coding speed. From idea to deployment in an afternoon because the initial prompt structured my Next.js App perfectly.",
      author: "Marat K.",
      role: "Indie Hacker"
    }
  ];

  return (
    <section className="py-24 relative bg-cosmic-dark border-t border-y-white/5" id="testimonials">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Loved by <span className="text-cosmic-violet">Professionals</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="glass-panel p-8 rounded-3xl relative"
            >
              <div className="text-cosmic-blue text-4xl font-serif absolute top-4 left-6 opacity-40">&quot;</div>
              <p className="text-gray-300 relative z-10 italic mb-8 pt-4">&quot;{t.text}&quot;</p>
              <div>
                <p className="font-bold text-white">{t.author}</p>
                <p className="text-sm text-cosmic-violet">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
