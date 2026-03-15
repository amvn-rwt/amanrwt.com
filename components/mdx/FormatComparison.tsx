"use client";

import { ComparisonTable } from "./ComparisonTable";

const headers = ["Aspect", "CSV", "JSON", "Parquet"];

const rows = [
  {
    cells: [
      "File size",
      "Large",
      "Varies (JSON Lines can be compact, but keys still repeat)",
      "85 to 90% smaller",
    ],
    winner: 3,
  },
  { cells: ["Read speed (analytics)", "Slow, full scan", "Slow, parse overhead", "Fast (column pruning + pushdown)"], winner: 3 },
  { cells: ["Write speed", "Fast, append-friendly", "Fast, easy to generate", "Slower (encoding + metadata)"], winner: 1 },
  { cells: ["Schema", "None (header row at best)", "Implicit (no enforcement)", "Embedded and enforced"], winner: 3 },
  { cells: ["Human-readable", "Yes", "Yes", "No (binary)"], winner: 1 },
  { cells: ["Nested data", "No", "Yes (native)", "Yes (repeated/group types)"], winner: 2 },
  { cells: ["Compression", "Poor (mixed types per row)", "Poor (verbose syntax)", "Excellent (homogeneous columns)"], winner: 3 },
  { cells: ["Ecosystem", "Universal", "Universal", "Data tools (Spark, Athena, DuckDB, etc.)"], winner: 3 },
  { cells: ["Splittable", "Line-by-line", "Not easily", "Yes, per row group"], winner: 3 },
];

export function FormatComparison() {
  return <ComparisonTable headers={headers} rows={rows} />;
}
