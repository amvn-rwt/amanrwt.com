"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  children: React.ReactNode;
  term: string;
  link?: string;
}

export function Tooltip({ children, term, link }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearHideTimeout();
    setIsHovered(true);
  }, [clearHideTimeout]);

  const handleMouseLeave = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  }, []);

  return (
    <span
      className="relative inline"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="text-lavender border-b border-dotted border-lavender cursor-help">
        {children}
      </span>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-1/2 bottom-full -translate-x-1/2 mb-2 z-50"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="bg-mantle border border-surface0 rounded-lg shadow-lg px-4 py-3 max-w-[280px]">
              <p className="font-body text-sm text-subtext0 leading-relaxed">
                {term}
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-peach text-sm font-medium hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  Learn more ↗
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
