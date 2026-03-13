import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import type { BlogFrontmatter } from "@/lib/types";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts("blog");
  return posts.map((p) => ({ slug: (p as { slug: string }).slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug("blog", slug);
  const fm = frontmatter as unknown as BlogFrontmatter;
  return {
    title: fm.title,
    description: fm.description,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const { frontmatter, content } = await getPostBySlug("blog", slug);
  const fm = frontmatter as unknown as BlogFrontmatter;

  return (
    <div className="pt-[70px]">
      <article className="py-[110px]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-14">
          <ScrollReveal>
            <Link
              href="/blog"
              className="font-mono text-[13px] text-overlay0 hover:text-peach transition-colors duration-250 mb-8 inline-block"
            >
              ← Back to Blog
            </Link>

            <h1
              className="font-display font-bold text-text tracking-[-0.03em] leading-[1.05] mt-4"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {fm.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-5 mb-10">
              <span className="font-mono text-[12px] text-overlay0">
                By Aman Rawat
              </span>
              <span className="font-mono text-[12px] text-overlay0">
                {new Date(fm.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="font-mono text-[12px] text-overlay0">
                {fm.readingTime}
              </span>
              <div className="flex gap-2">
                {fm.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-subtext1 bg-surface0 px-2.5 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mdx-content">
              <MDXRemote
                source={content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      [rehypePrettyCode, { theme: "catppuccin-mocha" }],
                    ],
                  },
                }}
              />
            </div>
          </ScrollReveal>
        </div>
      </article>
    </div>
  );
}
