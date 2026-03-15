import { getAllPosts, getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/MDXComponents";
import { ScrollReveal } from "@/components/ScrollReveal";
import Link from "next/link";
import type { Metadata } from "next";
import type { ProjectFrontmatter } from "@/lib/types";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts("projects");
  return posts.map((p) => ({ slug: (p as { slug: string }).slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = await getPostBySlug("projects", slug);
  const fm = frontmatter as unknown as ProjectFrontmatter;
  const url = `https://amanrwt.com/projects/${fm.slug}`;

  return {
    title: fm.title,
    description: fm.description,
    alternates: { canonical: url },
    openGraph: {
      title: fm.title,
      description: fm.description,
      url,
      siteName: "Aman Rawat",
      type: "article",
      publishedTime: fm.date,
      authors: ["Aman Rawat"],
      tags: fm.tags,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.description,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const { frontmatter, content } = await getPostBySlug("projects", slug);
  const fm = frontmatter as unknown as ProjectFrontmatter;

  return (
    <div className="pt-[70px]">
      <article className="py-[110px]">
        <div className="max-w-[800px] mx-auto px-6 lg:px-14">
          <ScrollReveal>
            <Link
              href="/projects"
              className="font-mono text-[13px] text-overlay0 hover:text-peach transition-colors duration-250 mb-8 inline-block"
            >
              ← Back to Projects
            </Link>

            <h1
              className="font-display font-bold text-text tracking-[-0.03em] leading-[1.05] mt-4"
              style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
            >
              {fm.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mt-5 mb-3">
              {fm.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-subtext1 bg-surface0 px-2.5 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[12px] text-overlay0">
                {new Date(fm.date).toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </span>
              {fm.github && (
                <a
                  href={fm.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] text-lavender hover:text-peach transition-colors"
                >
                  GitHub ↗
                </a>
              )}
              {fm.live && (
                <a
                  href={fm.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[12px] text-lavender hover:text-peach transition-colors"
                >
                  Live ↗
                </a>
              )}
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
