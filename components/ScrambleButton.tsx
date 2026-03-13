"use client";

import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface ScrambleButtonProps {
  href: string;
  text: string;
  external?: boolean;
  showArrow?: boolean;
}

export function ScrambleButton({ href, text, external, showArrow = true }: ScrambleButtonProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hovered, setHovered] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const iterationRef = useRef(0);

  const scramble = useCallback(() => {
    iterationRef.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < iterationRef.current) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iterationRef.current += 1 / 2;
      if (iterationRef.current >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 35);
  }, [text]);

  const onEnter = () => {
    setHovered(true);
    scramble();
  };

  const onLeave = () => {
    setHovered(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  useEffect(() => () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const className = [
    "group relative inline-flex items-center gap-3",
    "font-mono text-[11px] uppercase tracking-[0.14em]",
    "px-7 py-3.5",
    "text-text border border-surface1",
    "transition-colors duration-500",
    "hover:border-peach hover:text-peach",
  ].join(" ");

  const inner = (
    <>
      <span className="relative z-10 flex items-center gap-3">
        <span
          className="transition-opacity duration-300"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {displayText}
        </span>
        {showArrow && (
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-all duration-500"
            style={{
              transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
              opacity: hovered ? 1 : 0.4,
            }}
          >
            <path
              d="M1 13L13 1M13 1H3M13 1V11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      {/* bottom accent line */}
      <span
        className="absolute bottom-0 left-0 h-px bg-peach transition-all duration-700"
        style={{
          width: hovered ? "100%" : "0%",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
    </>
  );

  if (external) {
    return (
      <a href={href} className={className} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {inner}
    </Link>
  );
}
