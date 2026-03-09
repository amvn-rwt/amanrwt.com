export interface ProjectFrontmatter {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  github: string;
  live: string;
}

export interface BlogFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  readingTime: string;
  tags: string[];
}
