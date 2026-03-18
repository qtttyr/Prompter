"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BentoCard } from "@/components/ui/BentoCard";
import { Database, Layout, Activity, Server, Zap, Globe2 } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

export function BentoSection() {
  const codeSnippet = useTypewriter("import { vibe } from 'vibe-engine';\n\nconst agent = vibe.connect({\n  context: 'deep',\n  hallucinations: 0\n});", 40);
  
  const [lang, setLang] = useState<"EN" | "RU">("EN");

  useEffect(() => {
    const interval = setInterval(() => {
      setLang(prev => prev === "EN" ? "RU" : "EN");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 relative container mx-auto px-4" id="features">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500">
          Engineered for <span className="text-cosmic-blue">Perfection</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto h-auto md:h-[600px]">
        {/* Card 1 (Large): Deep Context Engine */}
        <BentoCard borderBeam className="md:col-span-2 md:row-span-2 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-cosmic-violet/20 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-cosmic-violet" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Deep Context Engine</h3>
            <p className="text-gray-400 max-w-md">Our AI understands your whole codebase intuitively. It reads through the lines.</p>
          </div>
          <div className="mt-8 bg-cosmic-dark rounded-xl border border-white/10 p-4 font-mono text-sm overflow-hidden h-40">
            <div className="flex gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-500/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </div>
            <pre className="text-cosmic-blue">
              <code>{codeSnippet}</code>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
               className="inline-block w-2 h-4 bg-cosmic-blue ml-1 align-middle" />
            </pre>
          </div>
        </BentoCard>

        {/* Card 2 (Medium): Multi-Stack Presets */}
        <BentoCard className="flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Multi-Stack Presets</h3>
            <p className="text-gray-400 text-sm">Pre-configured rules for React, FastAPI, Supabase, and more.</p>
          </div>
          <div className="flex justify-around items-center mt-6 bg-white/5 rounded-xl p-4">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }}>
              <Layout className="w-8 h-8 text-blue-400" />
            </motion.div>
            <Server className="w-8 h-8 text-green-400 opacity-80" />
            <Database className="w-8 h-8 text-emerald-500 opacity-80" />
          </div>
        </BentoCard>

        {/* Card 3 (Small): Zero Hallucinations */}
        <BentoCard className="flex flex-col justify-between group overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-br from-cosmic-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="z-10">
            <h3 className="text-lg font-bold mb-1">Zero Hallucinations</h3>
            <p className="text-gray-400 text-xs">Laser-focused accuracy.</p>
          </div>
          <div className="mt-4 flex justify-end z-10">
            <Activity className="w-10 h-10 text-red-400 animate-pulse" />
          </div>
        </BentoCard>

        {/* Card 4 (Medium): Global Reach */}
        <BentoCard className="flex flex-col justify-between col-span-1 border-t-cosmic-blue/20">
          <div>
            <h3 className="text-lg font-bold mb-1">Global Reach</h3>
            <p className="text-gray-400 text-xs text-balance">Seamlessly switch contexts. Available wherever you code.</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <Globe2 className="w-8 h-8 text-gray-400" />
            <div className="flex items-center gap-2 bg-cosmic-dark p-2 rounded-lg border border-white/5">
              <span className={`text-sm font-bold transition-colors ${lang === 'EN' ? 'text-cosmic-blue' : 'text-gray-600'}`}>EN</span>
              <div className="w-px h-4 bg-white/20" />
              <span className={`text-sm font-bold transition-colors ${lang === 'RU' ? 'text-cosmic-violet' : 'text-gray-600'}`}>RU</span>
            </div>
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
