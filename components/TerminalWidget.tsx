"use client";

import { motion } from "framer-motion";

const lines = [
  { type: "prompt", content: "❯ cat profile.json" },
  { type: "brace", content: "{" },
  { type: "kv", key: '"name"', value: '"Aman Rawat"' },
  { type: "kv", key: '"role"', value: '"Software Engineer"' },
  { type: "kv", key: '"location"', value: '"Delhi, India"' },
  { type: "array", key: '"stack"', value: '["Next.js", "Go", "Python", "AWS"]' },
  { type: "kv", key: '"open_to"', value: '"FAANG & great startups"' },
  { type: "kv", key: '"status"', value: '"building..."' },
  { type: "brace", content: "}" },
  { type: "cursor", content: "❯ _" },
];

function renderLine(line: (typeof lines)[number]) {
  if (line.type === "prompt") {
    return (
      <>
        <span style={{ color: "var(--green)" }}>❯</span>{" "}
        <span style={{ color: "var(--text)" }}>cat profile.json</span>
      </>
    );
  }
  if (line.type === "brace") {
    return <span style={{ color: "var(--subtext0)" }}>{line.content}</span>;
  }
  if (line.type === "kv") {
    return (
      <span className="pl-4">
        <span style={{ color: "var(--peach)" }}>{line.key}</span>
        <span style={{ color: "var(--subtext0)" }}>: </span>
        <span style={{ color: "var(--yellow)" }}>{line.value}</span>
        <span style={{ color: "var(--subtext0)" }}>,</span>
      </span>
    );
  }
  if (line.type === "array") {
    return (
      <span className="pl-4">
        <span style={{ color: "var(--peach)" }}>{line.key}</span>
        <span style={{ color: "var(--subtext0)" }}>: </span>
        <span style={{ color: "var(--lavender)" }}>{line.value}</span>
        <span style={{ color: "var(--subtext0)" }}>,</span>
      </span>
    );
  }
  if (line.type === "cursor") {
    return (
      <>
        <span style={{ color: "var(--green)" }}>❯</span>{" "}
        <span style={{ animation: "blink 1s step-end infinite", color: "var(--text)" }}>_</span>
      </>
    );
  }
  return null;
}

export function TerminalWidget() {
  return (
    <div className="rounded-lg overflow-hidden border border-surface0">
      <div
        className="flex items-center gap-2 px-4 py-3 bg-crust"
        style={{ borderBottom: "1px solid var(--surface0)" }}
      >
        <span className="w-3 h-3 rounded-full bg-red" />
        <span className="w-3 h-3 rounded-full bg-yellow" />
        <span className="w-3 h-3 rounded-full bg-green" />
        <span className="flex-1 text-center font-mono text-[11px] text-overlay0">
          ~/aman — zsh
        </span>
      </div>

      <div className="bg-mantle p-5 font-mono text-[13px] leading-relaxed">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.4, duration: 0.4 }}
          >
            {renderLine(line)}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
