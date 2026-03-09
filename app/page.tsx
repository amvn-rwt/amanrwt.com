"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { Marquee } from "@/components/Marquee";
import { TerminalWidget } from "@/components/TerminalWidget";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas").then((m) => m.HeroCanvas), {
  ssr: false,
});

const ease = [0.23, 1, 0.32, 1] as const;

const techPills = [
  "React/Next.js", "TypeScript", "Python", "Go", "Node.js",
  "FastAPI", "PostgreSQL", "Elasticsearch", "AWS", "Docker", "Kubernetes",
];

const experiences = [
  {
    year: "2024",
    role: "Software Engineer Intern",
    company: "Google",
    description: "Worked on Search Infrastructure — building distributed indexing pipelines handling billions of documents. Optimized query latency by 18% through cache-layer redesign.",
    badge: "FAANG",
  },
  {
    year: "2023",
    role: "Full Stack Engineer",
    company: "Stealth Startup",
    description: "Led frontend architecture for a Series A fintech product. Built real-time dashboards with Next.js and WebSocket streams, serving 50k+ daily active users.",
    badge: "Series A",
  },
  {
    year: "2022",
    role: "Teaching Assistant, DSA",
    company: "University",
    description: "Mentored 200+ students in Data Structures & Algorithms. Designed problem sets and conducted weekly lab sessions on graph algorithms and dynamic programming.",
    badge: "Education",
  },
];

const socials = [
  { name: "GitHub", handle: "@amanrawat", href: "https://github.com/amanrawat" },
  { name: "LinkedIn", handle: "/in/amanrawat", href: "https://linkedin.com/in/amanrawat" },
  { name: "Twitter / X", handle: "@amanrwt", href: "https://x.com/amanrwt" },
  { name: "Read.cv", handle: "amanrawat", href: "https://read.cv/amanrawat" },
];

const floatingBadges = [
  { label: "Currently", value: "Building SaaS", top: "12%", right: "8%", delay: 0 },
  { label: "Stack", value: "Next.js + Go", top: "32%", right: "2%", delay: 1.2 },
  { label: "Location", value: "Delhi, India", bottom: "28%", right: "12%", delay: 2.1 },
  { label: "Available", value: "Full-time", bottom: "10%", right: "5%", delay: 0.6 },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center pt-[70px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-center gap-2"
            >
              <span
                className="w-2 h-2 rounded-full bg-peach inline-block"
                style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
              />
              <span className="font-mono text-[11px] text-peach tracking-[0.2em] uppercase">
                Available for opportunities — 2025
              </span>
            </motion.div>

            <div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  className="font-display font-extrabold leading-[0.88] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(72px, 8vw, 120px)" }}
                >
                  Aman
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                  className="font-display font-light italic text-peach leading-[0.88] tracking-[-0.04em]"
                  style={{ fontSize: "clamp(72px, 8vw, 120px)" }}
                >
                  Rawat.
                </motion.h1>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease }}
              className="font-display font-light italic text-subtext0"
              style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
            >
              Software Engineer & Builder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="font-body text-[15px] font-light text-subtext0 leading-[1.85] max-w-[460px]"
            >
              I build scalable systems and thoughtful digital experiences. From
              distributed backends to polished frontends — I care about software
              that works beautifully and scales reliably.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="flex items-center gap-5 mt-2"
            >
              <Link
                href="/projects"
                className="inline-block font-body text-[13px] font-semibold uppercase tracking-[0.06em] px-7 py-3 bg-peach text-crust transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(250,179,135,0.4)]"
              >
                View my work →
              </Link>
              <a
                href="/cv.pdf"
                className="font-body text-[13px] font-medium uppercase tracking-[0.06em] text-subtext1 border-b border-surface1 pb-1 hover:border-peach hover:text-peach transition-all duration-300"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right column — canvas + floating badges */}
          <div className="relative min-h-[500px] lg:min-h-[600px] hidden lg:block">
            <HeroCanvas />
            {floatingBadges.map((badge) => (
              <div
                key={badge.label}
                className="absolute bg-mantle border border-surface0 rounded-lg px-4 py-3 z-10"
                style={{
                  top: badge.top,
                  right: badge.right,
                  bottom: badge.bottom,
                  animation: `float 4s ease-in-out ${badge.delay}s infinite`,
                }}
              >
                <span className="block font-mono text-[10px] tracking-[0.12em] uppercase text-overlay0">
                  {badge.label}
                </span>
                <span className="block font-body text-[13px] text-text mt-0.5">
                  {badge.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <Marquee />

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[13px] text-peach tracking-[0.12em]">
                {"// About me"}
              </span>
              <h2
                className="font-display font-bold text-text leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}
              >
                Turning ideas into{" "}
                <span className="italic text-peach font-light">reliable</span>{" "}
                software.
              </h2>
              <p className="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
                I'm a software engineer who thrives at the intersection of systems
                thinking and product craft. I've spent years working across the
                stack — from designing distributed backends in Go and Python to
                building interactive React frontends that feel alive. I care deeply
                about developer experience, clean abstractions, and shipping things
                that actually matter.
              </p>
              <p className="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
                Right now, I'm focused on leveling up toward FAANG-tier engineering,
                contributing to open source, and building side projects that solve
                real problems. When I'm not coding, I'm probably reading about
                distributed systems or exploring new tools.
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {techPills.map((pill, i) => (
                  <motion.span
                    key={pill}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4, ease }}
                    className="pill font-mono text-[11px] text-subtext1 border border-surface1 rounded-full px-3 py-1.5 transition-all duration-250 hover:border-peach hover:text-peach hover:bg-[rgba(250,179,135,0.06)]"
                  >
                    {pill}
                  </motion.span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TerminalWidget />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <ScrollReveal>
            <span className="font-mono text-[13px] text-peach tracking-[0.12em] block mb-4">
              {"// Experience"}
            </span>
            <h2
              className="font-display font-bold text-text leading-[1.1] tracking-[-0.03em] mb-12"
              style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}
            >
              Where I've{" "}
              <span className="italic text-peach font-light">worked.</span>
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className="group grid grid-cols-1 md:grid-cols-[160px_1fr_120px] gap-4 md:gap-8 py-8 transition-all duration-300 hover:pl-3.5"
                  style={{ borderBottom: "1px solid rgba(205, 214, 244, 0.07)" }}
                >
                  <span className="font-mono text-[12px] text-overlay0">
                    {exp.year}
                  </span>

                  <div className="flex flex-col gap-1.5">
                    <h3
                      className="font-display font-medium text-text"
                      style={{ fontSize: "clamp(20px, 2.2vw, 30px)" }}
                    >
                      {exp.role}
                    </h3>
                    <span className="font-body text-[12px] uppercase tracking-[0.08em] text-peach">
                      {exp.company}
                    </span>
                    <p className="font-body text-[14px] font-light text-subtext0 mt-1 leading-[1.75]">
                      {exp.description}
                    </p>
                  </div>

                  <div className="flex items-start justify-end">
                    <span className="font-mono text-[10px] text-peach bg-[rgba(250,179,135,0.1)] px-3 py-1 rounded-full">
                      {exp.badge}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[100px]">
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <span className="font-mono text-[13px] text-peach tracking-[0.12em]">
                {"// Contact"}
              </span>
              <h2
                className="font-display font-bold text-text leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 4.5vw, 64px)" }}
              >
                Let's build something{" "}
                <span className="italic text-peach font-light">great.</span>
              </h2>
              <p className="font-body text-[15px] font-light text-subtext0 leading-[1.85]">
                I'm always open to interesting conversations, new opportunities,
                and collaborations. Whether you have a project in mind or just want
                to say hello — drop me a line.
              </p>
              <a
                href="mailto:aman@amanrwt.com"
                className="font-display text-peach italic font-light text-[clamp(20px,2.5vw,32px)] border-b border-peach/30 hover:border-peach pb-1 transition-all duration-300 inline-block mt-2 w-fit"
              >
                aman@amanrwt.com
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-col">
              {socials.map((social, i) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 transition-all duration-300 hover:pl-3"
                  style={
                    i < socials.length - 1
                      ? { borderBottom: "1px solid rgba(205, 214, 244, 0.07)" }
                      : undefined
                  }
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="font-body text-[18px] font-medium text-text group-hover:text-peach transition-colors duration-250">
                      {social.name}
                    </span>
                    <span className="font-mono text-[11px] text-overlay0">
                      {social.handle}
                    </span>
                  </div>
                  <span className="text-peach opacity-0 translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
