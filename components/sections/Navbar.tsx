"use client";

import React from "react";
import { motion } from "framer-motion";
import { Home, Zap, Sparkles, BookOpen, CheckCircle2, MessageSquare } from "lucide-react";
import Link from "next/link";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Zap, label: "Workflow", href: "/#workflow" },
  { icon: CheckCircle2, label: "Proof", href: "/#proof" },
  { icon: MessageSquare, label: "Reviews", href: "/#testimonials" },
  { icon: BookOpen, label: "Docs", href: "/docs" },
];

export function Navbar() {
  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
    >
      <nav className="glass-panel rounded-full px-6 py-3 flex items-center gap-6 shadow-2xl">
        <Link href="/" className="flex items-center gap-2 mr-4 group">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-cosmic-blue to-cosmic-violet flex items-center justify-center group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-white font-bold tracking-tight hidden sm:block text-sm">VIBE</span>
        </Link>
        
        <div className="flex items-center gap-4">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-gray-400 hover:text-white transition-colors relative group p-2"
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-cosmic-border border border-white/10 px-2 py-1 rounded text-white whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </motion.div>
  );
}
