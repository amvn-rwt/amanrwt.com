"use client";

import { ComparisonTable } from "./ComparisonTable";

const headers = ["Aspect", "CSV", "JSON", "Parquet"];

const rows = [
  { cells: ["File size", "Large", "Larger (keys repeat per row)", "85\u201390% smaller"], winner: 3 },
  { cells: ["Read speed (analytics)", "Slow \u2014 full scan", "Slow \u2014 parse overhead", "Fast \u2014 column pruning + pushdown"], winner: 3 },
  { cells: ["Write speed", "Fast \u2014 append-friendly", "Fast \u2014 easy to generate", "Slower \u2014 encoding + metadata"], winner: 1 },
  { cells: ["Schema", "None (header row at best)", "Implicit (no enforcement)", "Embedded + enforced"], winner: 3 },
  { cells: ["Human-readable", "Yes", "Yes", "No (binary format)"], winner: 1 },
  { cells: ["Nested data", "No", "Yes (native)", "Yes (repeated/group types)"], winner: 2 },
  { cells: ["Compression", "Poor (mixed types per row)", "Poor (verbose syntax)", "Excellent (homogeneous columns)"], winner: 3 },
  { cells: ["Ecosystem", "Universal", "Universal", "Data tools (Spark, Athena, DuckDB\u2026)"], winner: 3 },
  { cells: ["Splittable", "Line-by-line", "Not easily", "Yes \u2014 per row group"], winner: 3 },
];

export function FormatComparison() {
  return <ComparisonTable headers={headers} rows={rows} />;
}
