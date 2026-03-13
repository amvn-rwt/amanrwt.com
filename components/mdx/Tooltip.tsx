"use client";

import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

interface TooltipProps {
  children: React.ReactNode;
  term: string;
  link?: string;
}

export function Tooltip({ children, term, link }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState<{ x: number; y: number } | null>(null);
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimeout = useCallback(() => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const updatePosition = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setCoords({
      x: rect.left + rect.width / 2,
      y: rect.top,
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    clearHideTimeout();
    updatePosition();
    setIsHovered(true);
  }, [clearHideTimeout, updatePosition]);

  const handleMouseLeave = useCallback(() => {
    hideTimeoutRef.current = setTimeout(() => setIsHovered(false), 150);
  }, []);

  useLayoutEffect(() => {
    if (!isHovered) return;
    const handleScroll = () => updatePosition();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHovered, updatePosition]);

  return (
    <>
      <span
        ref={anchorRef}
        className="inline text-lavender border-b border-dotted border-lavender cursor-help"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </span>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isHovered && coords && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                style={{
                  position: "fixed",
                  left: coords.x,
                  top: coords.y - 8,
                  transform: "translateX(-50%) translateY(-100%)",
                  zIndex: 50,
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="bg-mantle border border-surface0 rounded-lg shadow-lg px-4 py-3 max-w-[280px]">
                  <div className="font-body text-sm text-subtext0 leading-relaxed">
                    {term}
                  </div>
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
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
