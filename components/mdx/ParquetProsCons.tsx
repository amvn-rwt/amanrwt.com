"use client";

import { ProsCons } from "./ProsCons";

const pros = [
  "Much smaller files (often 85-90% smaller than CSV). Less storage, faster transfers.",
  "Query performance: engines only read the columns and row groups they need.",
  "Self-describing schema in the footer. No separate schema files.",
  "Schema evolution: add columns later, old readers see null for new ones.",
  "Every major tool reads Parquet. Default for data lakes, lakehouses, and ETL.",
  "Language agnostic: Python, Java, Go, Rust, C++, JS all have readers.",
];

const cons = [
  "Not human-readable. For quick inspection CSV wins (parquet-cli, DuckDB CLI help).",
  "Write overhead: heavier than appending a CSV line. Write-heavy workloads pay in latency.",
  "Small files: under a few MB, metadata can make Parquet bigger than CSV. Avoid tiny files, aim for 128-512 MB.",
  "Needs a library. For one-off scripts or quick handoffs, CSV is simpler.",
  "Write-once, read-many. For streaming append use JSON Lines/Avro then compact to Parquet (e.g. Delta, Iceberg).",
];

export function ParquetProsCons() {
  return <ProsCons pros={pros} cons={cons} />;
}
