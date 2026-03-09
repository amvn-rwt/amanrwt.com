import Link from "next/link";
import type { BlogFrontmatter } from "@/lib/types";

interface BlogCardProps {
  post: BlogFrontmatter;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col md:flex-row md:items-baseline justify-between py-7 transition-all duration-300 hover:pl-4"
      style={{ borderBottom: "1px solid rgba(205, 214, 244, 0.07)" }}
    >
      <div className="flex flex-col gap-1.5 flex-1">
        <div className="flex items-center gap-4 mb-1">
          <span className="font-mono text-[12px] text-overlay0">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <div className="flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-overlay0 border border-surface0 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3
          className="font-display font-semibold text-text group-hover:text-peach transition-colors duration-250 leading-tight"
          style={{ fontSize: "clamp(22px, 2.5vw, 32px)" }}
        >
          {post.title}
        </h3>

        <p className="font-body text-[14px] font-light text-subtext0 leading-[1.75] mt-1 max-w-[600px]">
          {post.description}
        </p>
      </div>

      <span className="font-mono text-[11px] text-overlay0 mt-2 md:mt-0 md:ml-8 shrink-0">
        {post.readingTime}
      </span>
    </Link>
  );
}
