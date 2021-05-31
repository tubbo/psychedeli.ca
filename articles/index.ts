import frontMatter from "front-matter";
import { promises as fs } from "fs";
import path from "path";
import { sync as glob } from "glob";
import marked from "marked";

export type ArticleParams = {
  year: string;
  month: string;
  day: string;
  slug: string;
};

export type Article = {
  title: string;
  description: string;
  body: string;
  tags: string[];
  category: string;
};

export async function parseArticle(filepath: string): Promise<Article> {
  const source = await fs.readFile(filepath, "utf-8");
  const {
    attributes: { title, description, tags, category },
    body: markdown,
  } = frontMatter(source);
  const body = marked(markdown);

  return { title, description, tags, category, body };
}

export async function findArticle(
  params: ArticleParams
): Promise<Article | undefined> {
  if (!params) return;

  const { year, month, day, slug } = params;
  const filename = `${year}-${month}-${day}-${slug}.md`;
  const filepath = path.join(__dirname, filename);
  const article = await parseArticle(filepath);

  return article;
}

const dateFrom = (filename: string): Date => {
  const [year, month, day] = filename.split("-").map(parseInt);

  return new Date(year, month, day);
};

const byDate = (lastFile: string, nextFile: string) => {
  const last = dateFrom(lastFile);
  const next = dateFrom(nextFile);

  if (last > next) {
    return 1;
  } else {
    return -1;
  }
};

export async function findLatestArticles(): Promise<Article[]> {
  return await Promise.all(
    glob(path.join(__dirname, "*.md"))
      .sort(byDate)
      .slice(0, 6)
      .map(parseArticle)
  );
}
