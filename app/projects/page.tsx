import { getAllPosts } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { ProjectFrontmatter } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've shipped — from real-time collaborative IDEs to distributed databases.",
};

export default function ProjectsPage() {
  const projects = getAllPosts("projects") as unknown as ProjectFrontmatter[];

  return (
    <div className="pt-[70px]">
      <section className="py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <ScrollReveal>
            <span className="font-mono text-[13px] text-peach tracking-[0.12em] block mb-4">
              {"// Work"}
            </span>
            <h1
              className="font-display font-extrabold text-text tracking-[-0.04em] leading-[0.9]"
              style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
            >
              Projects
            </h1>
            <p className="font-display font-light italic text-peach text-[clamp(18px,2vw,26px)] mt-3 mb-4">
              Things I've shipped.
            </p>
            <p className="font-body text-[15px] font-light text-subtext0 leading-[1.85] max-w-[560px] mb-12">
              A selection of projects I've built — ranging from developer tools
              and distributed systems to AI-powered platforms. Each one taught me
              something new.
            </p>
          </ScrollReveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "2px", background: "var(--surface0)" }}
          >
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 0.08}>
                <ProjectCard
                  project={project}
                  index={i}
                  featured={i === 0 && project.featured}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
