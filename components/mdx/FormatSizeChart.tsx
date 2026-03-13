"use client";

import { SizeComparison } from "./SizeComparison";

const items = [
  { label: "JSON", size: "1.2 GB", value: 1200, color: "var(--blue)" },
  { label: "CSV", size: "1.0 GB", value: 1000, color: "var(--mauve)" },
  { label: "Parquet", size: "~130 MB", value: 130, color: "var(--peach)" },
];

export function FormatSizeChart() {
  return <SizeComparison items={items} />;
}
