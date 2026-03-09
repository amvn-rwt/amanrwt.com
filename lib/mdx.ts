import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = (type: "blog" | "projects") =>
  path.join(process.cwd(), "content", type);

export function getAllPosts(type: "blog" | "projects") {
  const dir = contentDir(type);
  const files = fs.readdirSync(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data } = matter(raw);
      return { ...data, slug: filename.replace(".mdx", "") };
    })
    .sort(
      (a: Record<string, unknown>, b: Record<string, unknown>) =>
        new Date(b.date as string).getTime() -
        new Date(a.date as string).getTime()
    );
}

export async function getPostBySlug(
  type: "blog" | "projects",
  slug: string
) {
  const file = path.join(contentDir(type), `${slug}.mdx`);
  const raw = fs.readFileSync(file, "utf-8");
  const { data: frontmatter, content } = matter(raw);
  return { frontmatter, content };
}
