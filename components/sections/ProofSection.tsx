"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export function ProofSection() {
  return (
    <section className="py-24 relative container mx-auto px-4 border-t border-white/5" id="proof">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
          See the <span className="text-cosmic-blue">Difference</span>
        </h2>
        <p className="mt-4 text-gray-400">Why a &quot;vibe&quot; prompt beats a generic prompt.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-red-950/20 border border-red-500/20 rounded-2xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500/50" />
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="w-5 h-5 text-red-400" />
            <span className="font-bold text-red-200">Generic Prompt</span>
          </div>
          <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-gray-400 mb-6">
            &quot;Build me a landing page using React and Tailwind.&quot;
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2"><span>•</span>AI invents bad folder structure.</li>
            <li className="flex gap-2"><span>•</span>Uses outdated libraries or CSS.</li>
            <li className="flex gap-2"><span>•</span>Creates monolithic 1000-line <code>page.tsx</code>.</li>
            <li className="flex gap-2"><span>•</span>Hallucinates imports that don&apos;t exist.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 bg-cosmic-blue/10 border border-cosmic-blue/30 rounded-2xl p-6 relative overflow-hidden shadow-[0_0_40px_rgba(10,132,255,0.1)]"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-cosmic-blue" />
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-cosmic-blue" />
            <span className="font-bold text-blue-200">Vibe Prompter Output</span>
          </div>
          <div className="bg-black/50 p-4 rounded-lg font-mono text-sm text-cosmic-blue mb-6 border border-cosmic-blue/20">
            &quot;Act as a Lead Next.js Developer. Context: Next 15 App Router... Rules: 1. Strict atomic design...&quot;
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2"><span className="text-cosmic-blue">•</span>Flawless folder architecture.</li>
            <li className="flex gap-2"><span className="text-cosmic-blue">•</span>Modern syntax, zero deprecated functions.</li>
            <li className="flex gap-2"><span className="text-cosmic-blue">•</span>Separation of concerns enforced.</li>
            <li className="flex gap-2"><span className="text-cosmic-blue">•</span>AI understands the exact &quot;vibe&quot; and rules.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
