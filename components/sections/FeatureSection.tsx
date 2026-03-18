"use client";

import React from "react";
import { motion } from "framer-motion";
import { Copy, Wand2, Layers, Cpu } from "lucide-react";

export function FeatureSection() {
  const steps = [
    {
      icon: Wand2,
      title: "1. The Idea",
      desc: "Tell our Telegram bot what you want to build in plain words.",
      color: "text-cosmic-violet"
    },
    {
      icon: Layers,
      title: "2. The Context",
      desc: "Pick your Stack, Editor (Cursor, Windsurf), and AI Model.",
      color: "text-blue-400"
    },
    {
      icon: Cpu,
      title: "3. The Vibe",
      desc: "Receive an ultra-specific prompt engineered for zero hallucinations.",
      color: "text-cosmic-blue"
    },
    {
      icon: Copy,
      title: "4. Create",
      desc: "Paste it into your workspace and watch flawless code generate.",
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#050508]" id="workflow">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How it works in <span className="text-cosmic-violet">Telegram</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">Get your development jump-started in seconds right from your phone or desktop.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-1/8 right-1/8 h-0.5 bg-linear-to-r from-transparent via-cosmic-blue/30 to-transparent pointer-events-none" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col items-center text-center group"
            >
              <div className={`w-24 h-24 rounded-3xl bg-cosmic-dark border border-white/10 flex items-center justify-center mb-6 shadow-xl transition-transform group-hover:-translate-y-2 group-hover:border-${step.color.split('-')[1]}/50`}>
                <step.icon className={`w-10 h-10 ${step.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
