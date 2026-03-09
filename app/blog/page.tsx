import { getAllPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/BlogCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { BlogFrontmatter } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software engineering, distributed systems, and building things that matter.",
};

export default function BlogPage() {
  const posts = getAllPosts("blog") as unknown as BlogFrontmatter[];

  return (
    <div className="pt-[70px]">
      <section className="py-[110px]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-14">
          <ScrollReveal>
            <span className="font-mono text-[13px] text-peach tracking-[0.12em] block mb-4">
              {"// Writing"}
            </span>
            <h1
              className="font-display font-extrabold text-text tracking-[-0.04em] leading-[0.9]"
              style={{ fontSize: "clamp(56px, 7vw, 96px)" }}
            >
              Blog
            </h1>
            <p className="font-display font-light italic text-peach text-[clamp(18px,2vw,26px)] mt-3 mb-4">
              Thoughts & writeups.
            </p>
            <p className="font-body text-[15px] font-light text-subtext0 leading-[1.85] max-w-[560px] mb-12">
              Writing about what I'm learning, building, and thinking about.
              Mostly backend systems, developer tools, and the craft of software
              engineering.
            </p>
          </ScrollReveal>

          <div className="flex flex-col">
            {posts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.08}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
