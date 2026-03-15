"use client";

import { Check, X } from "lucide-react";

interface ProsConsProps {
  pros: string[];
  cons: string[];
  prosLabel?: string;
  consLabel?: string;
}

export function ProsCons({
  pros,
  cons,
  prosLabel = "Advantages",
  consLabel = "Disadvantages",
}: ProsConsProps) {
  return (
    <div className="my-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-lg border border-surface0 bg-mantle p-5">
        <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-green">
          <Check className="h-4 w-4" aria-hidden />
          {prosLabel}
        </div>
        <ul className="space-y-2 font-body text-[14px] leading-[1.6] text-subtext0">
          {pros.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green/70" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg border border-surface0 bg-mantle p-5">
        <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-red">
          <X className="h-4 w-4" aria-hidden />
          {consLabel}
        </div>
        <ul className="space-y-2 font-body text-[14px] leading-[1.6] text-subtext0">
          {cons.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red/70" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
