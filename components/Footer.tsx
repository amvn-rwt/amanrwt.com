import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-crust" style={{ borderTop: "1px solid rgba(205, 214, 244, 0.06)" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-14 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-[20px] font-bold tracking-tight text-text">
            AR<span className="text-peach">.</span>
          </span>

          <p className="font-display text-[16px] italic font-light text-subtext0 text-center">
            Designed & built by Aman Rawat{" "}
            <span className="text-peach mx-2">✦</span>
          </p>

          <span className="font-mono text-[11px] tracking-widest text-overlay0">
            Delhi, India — 2025
          </span>
        </div>

        <div
          className="mt-4 pt-4 flex items-center justify-center gap-4"
          style={{ borderTop: "1px solid var(--surface0)" }}
        >
          {footerLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-4">
              {i > 0 && <span className="text-overlay0 text-[11px]">·</span>}
              <Link
                href={link.href}
                className="font-mono text-[11px] text-overlay0 hover:text-peach transition-colors duration-250"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
