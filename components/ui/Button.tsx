"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  magnetic?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, magnetic = true, type = "button", ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!magnetic || !buttonRef.current) return;
      
      const { clientX, clientY } = e;
      const { height, width, left, top } = buttonRef.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
      if (!magnetic) return;
      setPosition({ x: 0, y: 0 });
    };

    const combinedRef = (node: HTMLButtonElement) => {
      buttonRef.current = node;
      if (typeof ref === 'function') ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.button
        ref={combinedRef}
        type={type}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full bg-cosmic-blue text-white px-8 py-3 text-sm font-medium transition-colors hover:bg-cosmic-blue/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-blue disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";
