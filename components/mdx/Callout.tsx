"use client";

import { Info, Lightbulb, AlertTriangle, BookOpen } from "lucide-react";

interface CalloutProps {
  type: "info" | "tip" | "warning" | "story";
  title?: string;
  children: React.ReactNode;
}

const calloutConfig = {
  info: {
    icon: Info,
    bgClass: "bg-blue/5",
    borderClass: "border-l-blue",
    iconClass: "text-blue",
  },
  tip: {
    icon: Lightbulb,
    bgClass: "bg-green/5",
    borderClass: "border-l-green",
    iconClass: "text-green",
  },
  warning: {
    icon: AlertTriangle,
    bgClass: "bg-yellow/5",
    borderClass: "border-l-yellow",
    iconClass: "text-yellow",
  },
  story: {
    icon: BookOpen,
    bgClass: "bg-peach/5",
    borderClass: "border-l-peach",
    iconClass: "text-peach",
  },
} as const;

export function Callout({ type, title, children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={`my-6 rounded-lg border border-surface0 border-l-[3px] ${config.borderClass} ${config.bgClass} px-5 py-4`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon
          className={`shrink-0 w-5 h-5 ${config.iconClass}`}
          aria-hidden
        />
        {title && (
          <span className="font-display font-medium text-text text-base">
            {title}
          </span>
        )}
      </div>
      <div className="font-body text-[15px] font-light text-subtext0 leading-[1.85] [&>*:last-child]:mb-0">
        {children}
      </div>
    </div>
  );
}
