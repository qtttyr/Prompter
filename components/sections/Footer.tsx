"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="relative border-t border-white/10 bg-cosmic-black pt-24 pb-12 overflow-hidden" id="reach">
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Join the <span className="text-transparent bg-clip-text bg-linear-to-r from-cosmic-blue to-cosmic-violet hover:drop-shadow-[0_0_10px_rgba(10,132,255,0.8)] transition-all">Revolution</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
            Try the Telegram Bot right now for free. Enter your email below to join the waitlist for the upcoming VS Code Extension.
          </p>

          <div className="flex justify-center mb-8">
            <a href="https://t.me/vibeprompterbot" target="_blank" rel="noopener noreferrer">
              <Button 
                className="h-14 px-8 bg-cosmic-blue text-white font-bold tracking-wide shadow-[0_0_20px_rgba(10,132,255,0.5)] border-none hover:bg-cosmic-blue/80"
                magnetic={true}
              >
                <span className="flex items-center gap-2">
                  Launch Telegram Bot <Send className="w-4 h-4 ml-2" />
                </span>
              </Button>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-8 border-t border-white/10">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="developer@vibe.ts"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cosmic-dark border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-colors"
                required
              />
            </div>
            <Button 
              type="submit" 
              className="w-full sm:w-auto h-14 px-8 bg-white text-black hover:bg-gray-200 font-bold tracking-wide"
              magnetic={false}
            >
              {submitted ? (
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cosmic-violet" />
                  Joined!
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Waitlist
                </span>
              )}
            </Button>
          </form>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 border-t border-white/5 pt-8 mt-16">
          <p>© 2026 Vibe Prompter. Built by Lead Creative Developer.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
