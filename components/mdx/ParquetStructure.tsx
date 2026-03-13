"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type SectionId = "file" | "rowGroup" | "columnChunk" | "page" | "footer";

const sections: { id: SectionId; label: string; indent: number }[] = [
  { id: "file", label: "Parquet File", indent: 0 },
  { id: "rowGroup", label: "Row Group", indent: 1 },
  { id: "columnChunk", label: "Column Chunk", indent: 2 },
  { id: "page", label: "Page", indent: 3 },
  { id: "footer", label: "Footer (metadata)", indent: 0 },
];

const descriptions: Record<SectionId, { title: string; text: string }> = {
  file: {
    title: "Parquet File",
    text: "The top-level container. A single .parquet file holds data and self-describing metadata, making it fully portable between tools like Spark, Athena, DuckDB, and Pandas.",
  },
  rowGroup: {
    title: "Row Group",
    text: "A horizontal partition — typically 128 MB of rows. Query engines read statistics in the footer to skip entire row groups that can't match your filter (predicate pushdown).",
  },
  columnChunk: {
    title: "Column Chunk",
    text: "Within each row group, data is split by column. A query that selects only 3 of 50 columns reads just those 3 column chunks — the rest stay on disk untouched (column pruning).",
  },
  page: {
    title: "Page",
    text: "The smallest unit of storage (~1 MB). Pages are individually compressed and encoded. This is where dictionary encoding, RLE, and delta encoding do their magic.",
  },
  footer: {
    title: "Footer",
    text: "Written last, read first. Contains the full schema, row group locations, and min/max statistics per column chunk. This is what makes Parquet self-describing and enables predicate pushdown.",
  },
};

export function ParquetStructure() {
  const [active, setActive] = useState<SectionId>("file");
  const info = descriptions[active];

  return (
    <div className="my-8 grid gap-6 md:grid-cols-[1fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="rounded-lg border border-surface0 bg-mantle p-5 overflow-hidden"
      >
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.12em] text-overlay0">
          File layout
        </div>
        <div className="space-y-2">
          {sections.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                type="button"
                onMouseEnter={() => setActive(s.id)}
                onClick={() => setActive(s.id)}
                style={{
                  marginLeft: s.indent * 16,
                  width: `calc(100% - ${s.indent * 16}px)`,
                }}
                className={`block text-left rounded-md border px-3 py-2 font-mono text-[12px] uppercase tracking-[0.1em] transition-all duration-150 ${
                  isActive
                    ? "border-peach/60 bg-peach/10 text-peach"
                    : "border-surface1/60 bg-surface0/40 text-overlay1 hover:border-peach/40 hover:bg-peach/5"
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </motion.div>

      <div className="rounded-lg border border-surface0 bg-mantle p-5 flex flex-col justify-center">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-peach mb-2">
            {info.title}
          </div>
          <p className="font-body text-[14px] leading-[1.8] text-subtext0">
            {info.text}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
