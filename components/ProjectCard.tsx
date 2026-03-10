"use client";

import Link from "next/link";
import { useState } from "react";
import type { ProjectFrontmatter } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectFrontmatter;
  index: number;
  featured?: boolean;
}

export function ProjectCard({ project, index, featured }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`project-card group relative block bg-mantle p-8 lg:p-11 transition-all duration-400 h-full ${featured ? "col-span-full" : ""}`}
      style={{ backgroundColor: hovered ? "#1f1f2e" : "var(--mantle)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 transition-opacity duration-400 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(250,179,135,0.07), transparent)",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div
        className="absolute bottom-0 left-0 h-[2px] bg-peach transition-all duration-500"
        style={{
          width: hovered ? "100%" : "0%",
          transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />

      <div className="relative z-10">
        <span className="font-mono text-[11px] text-overlay0 block mb-3">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3
          className="font-display font-semibold text-text mb-3 leading-tight"
          style={{ fontSize: featured ? "clamp(32px, 4vw, 44px)" : "clamp(28px, 3vw, 36px)" }}
        >
          {project.title}
        </h3>

        <p className="font-body text-[14px] font-light text-subtext0 leading-[1.75] mb-4 max-w-[520px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-subtext1 bg-surface0 px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="text-peach text-lg inline-block transition-all duration-300"
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translate(0, 0)" : "translate(-8px, 8px)",
          }}
        >
          ↗
        </span>
      </div>
    </Link>
  );
}
