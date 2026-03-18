"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Terminal, Copy, CheckCircle2, MessageSquare } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const samplePrompt = "Role: Expert React Developer.\nContext: Next.js 15, App Router, Tailwind v4.\nRules: Modularity, strict typing, zero hallucinations, 'vibe coding' approach.\n...";

  const handleCopy = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 mx-auto">
            <MessageSquare className="w-4 h-4 text-cosmic-blue" />
            <span className="text-sm font-medium text-gray-300">Telegram Bot live • Extension coming soon</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-br from-white via-gray-300 to-cosmic-blue">
            Turn your ideas into <span className="text-cosmic-violet drop-shadow-[0_0_15px_rgba(75,0,130,0.8)]">Vibe Code.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            The ultimate Telegram bot. Give it your idea, stack, editor, and model—get an elite personal prompt for perfect generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="https://t.me/vibeprompterbot" target="_blank" rel="noopener noreferrer">
              <Button magnetic className="bg-linear-to-r from-cosmic-violet to-cosmic-blue hover:opacity-90 shadow-[0_0_20px_rgba(45,11,90,0.5)] border-none h-14 px-8 text-lg">
                Start Telegram Bot
              </Button>
            </a>
            <a href="#reach">
              <Button magnetic={false} className="bg-transparent border border-white/20 hover:bg-white/5 h-14 px-8 text-lg">
                Join Extension Waitlist
              </Button>
            </a>
          </div>

          {/* Interactive Telegram Preview Box */}
          <motion.div 
            className="w-full max-w-3xl mx-auto glass-panel rounded-2xl p-1 md:p-2 shadow-[0_0_50px_rgba(10,132,255,0.15)] relative animate-float group text-left"
          >
            <div className="absolute inset-0 rounded-2xl border border-cosmic-blue/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="bg-cosmic-dark rounded-xl overflow-hidden border border-white/5 relative z-10">
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-[#12121a]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-gray-500 font-mono">
                  <Terminal className="w-3 h-3" />
                  vibe-prompter
                </div>
              </div>
              
              <div className="p-4 md:p-6 text-sm md:text-base">
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-cosmic-violet/20 flex items-center justify-center shrink-0">
                    <span className="text-cosmic-violet font-bold text-xs">U</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                    <p className="text-gray-300">Idea: SaaS for pet owners.</p>
                    <p className="text-gray-400 text-xs mt-1">Stack: Next.js + Supabase • Editor: Cursor • Model: Claude 3.5</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-cosmic-blue/20 flex items-center justify-center shrink-0">
                    <span className="text-cosmic-blue font-bold text-xs">V</span>
                  </div>
                  <div className="bg-cosmic-blue/10 p-3 rounded-2xl rounded-tr-none border border-cosmic-blue/20 relative w-full group/msg">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-cosmic-blue font-bold text-xs">READY. Copy this prompt to Cursor:</span>
                      <button onClick={handleCopy} className="text-gray-400 hover:text-white transition-colors">
                        {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <pre className="text-gray-300 text-xs font-mono whitespace-pre-wrap mt-2 select-all">
                      {samplePrompt}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
