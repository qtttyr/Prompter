"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  borderBeam?: boolean;
  className?: string;
}

export function BentoCard({ className, children, borderBeam = false }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "relative overflow-hidden rounded-3xl glass-panel p-6 flex flex-col group",
        className
      )}
    >
      {/* Internal Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>

      {/* Shimmering Border Beam Effect */}
      {borderBeam && (
        <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-cosmic-blue to-transparent animate-shimmer" />
          <div className="absolute bottom-0 right-0 w-full h-px bg-linear-to-l from-transparent via-cosmic-violet to-transparent animate-shimmer" />
          <div className="absolute top-0 left-0 w-px h-full bg-linear-to-b from-transparent via-cosmic-blue to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-0 right-0 w-px h-full bg-linear-to-t from-transparent via-cosmic-violet to-transparent animate-shimmer" style={{ animationDelay: '1s' }} />
        </div>
      )}
    </motion.div>
  );
}
