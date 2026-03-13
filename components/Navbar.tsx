"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ScrambleButton } from "@/components/ScrambleButton";

const links = [
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between h-[70px] px-6 lg:px-14"
        style={{
          backgroundColor: "rgba(30, 30, 46, 0.7)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(205, 214, 244, 0.06)",
        }}
      >
        <Link href="/" className="font-display text-[22px] font-bold tracking-tight text-text">
          AR<span className="text-peach">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} active={isActive(link.href)} />
          ))}
        </div>

        <div className="hidden md:block">
          <ScrambleButton href="mailto:aman@amanrwt.com" text="Let's talk" external showArrow={false} />
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-199 flex flex-col items-center justify-center gap-8 bg-base/95 backdrop-blur-xl"
          style={{ paddingTop: 70 }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-2xl font-medium text-text hover:text-peach transition-colors duration-250"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:aman@amanrwt.com"
            className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.14em] px-7 py-3.5 border border-peach text-peach"
          >
            Let's talk
          </a>
        </div>
      )}
    </>
  );
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="relative font-body text-[13px] font-normal uppercase tracking-[0.06em] transition-colors duration-250"
      style={{ color: active || hovered ? "var(--text)" : "var(--overlay1)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
      <span
        className="absolute left-0 bottom-[-4px] h-px bg-peach"
        style={{
          width: active || hovered ? "100%" : "0%",
          transition: "width 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      />
    </Link>
  );
}
