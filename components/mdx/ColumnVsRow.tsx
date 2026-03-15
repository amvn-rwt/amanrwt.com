"use client";

import { motion } from "framer-motion";

const sampleRows = [
  { name: "Alice", age: 29, city: "Berlin" },
  { name: "Brian", age: 34, city: "London" },
  { name: "Chloe", age: 27, city: "Bangalore" },
  { name: "Derek", age: 41, city: "Tokyo" },
];

const columns = [
  { key: "name", label: "Name", color: "border-peach/60 bg-peach/5" },
  { key: "age", label: "Age", color: "border-blue/60 bg-blue/5" },
  { key: "city", label: "City", color: "border-teal/60 bg-teal/5" },
] as const;

const rowColors = [
  "border-mauve/50 bg-mauve/5",
  "border-peach/50 bg-peach/5",
  "border-blue/50 bg-blue/5",
  "border-teal/50 bg-teal/5",
];

export function ColumnVsRow() {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      {/* Row-oriented */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="rounded-lg border border-surface0 bg-mantle p-5"
      >
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay0">
          Row-oriented storage
        </div>

        <div className="mb-2 grid grid-cols-3 gap-2 px-2">
          {["Name", "Age", "City"].map((h) => (
            <span
              key={h}
              className="font-mono text-[10px] uppercase tracking-[0.1em] text-overlay1"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="space-y-2">
          {sampleRows.map((row, idx) => (
            <div
              key={row.name}
              className={`grid grid-cols-3 gap-2 rounded-md border px-2 py-2 ${rowColors[idx]}`}
            >
              <span className="text-[13px] text-subtext0">{row.name}</span>
              <span className="text-[13px] text-subtext0">{row.age}</span>
              <span className="text-[13px] text-subtext0">{row.city}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[12px] text-overlay1 leading-relaxed">
          Each <strong className="text-subtext1">row</strong> lives together on
          disk. Fast for fetching a single record, but wasteful when you only
          need one column across millions of rows.
        </p>
      </motion.div>

      {/* Column-oriented */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="rounded-lg border border-surface0 bg-mantle p-5"
      >
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay0">
          Column-oriented storage
        </div>

        <div className="grid grid-cols-3 gap-3">
          {columns.map((col) => (
            <div
              key={col.key}
              className={`rounded-md border px-3 py-3 ${col.color}`}
            >
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-overlay1">
                {col.label}
              </div>
              <div className="space-y-1.5">
                {sampleRows.map((row) => (
                  <div
                    key={row.name}
                    className="rounded bg-crust/60 px-2 py-1 text-[12px] text-subtext0"
                  >
                    {String(row[col.key])}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[12px] text-overlay1 leading-relaxed">
          Each <strong className="text-subtext1">column</strong> is stored
          contiguously. Scanning &ldquo;all ages&rdquo; reads only the Age
          block, skipping Name and City entirely.
        </p>
      </motion.div>
    </div>
  );
}
