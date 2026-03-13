"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SizeComparisonItem {
  label: string;
  size: string;
  value: number;
  color?: string;
}

interface SizeComparisonProps {
  items: SizeComparisonItem[];
}

export function SizeComparison({ items }: SizeComparisonProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const maxValue = Math.max(...items.map((item) => item.value));
  const minValue = Math.min(...items.map((item) => item.value));

  return (
    <div
      ref={ref}
      className="my-6 rounded-lg border border-surface0 bg-mantle p-6"
    >
      <div className="space-y-4">
        {items.map((item, index) => {
          const widthPercent =
            maxValue > 0 ? (item.value / maxValue) * 100 : 0;
          const isWinner = item.value === minValue;
          const barColor =
            item.color ?? (isWinner ? "var(--peach)" : "var(--surface1)");

          return (
            <div key={index} className="flex items-center gap-4">
              <span className="font-mono text-[12px] text-subtext1 shrink-0 w-20">
                {item.label}
              </span>
              <div className="flex-1 min-w-0 flex items-center gap-3">
                <div className="flex-1 h-6 rounded overflow-hidden bg-surface0">
                  <motion.div
                    className="h-full rounded"
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${widthPercent}%` } : { width: 0 }
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.1 * index,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                    style={{ backgroundColor: barColor }}
                  />
                </div>
                <span className="font-mono text-[12px] text-text shrink-0">
                  {item.size}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
