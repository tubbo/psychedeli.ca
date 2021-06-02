import frontMatter from "front-matter";
import { promises as fs } from "fs";
import path from "path";
import { sync as glob } from "glob";
import marked from "marked";

const parseParams = (filename: string): ArticleParams => {
  const [year, month, day, ...slugs] = filename.split("-");
  const slug = path.basename(slugs.join("-"), ".md");

  return {
    year,
    month,
    day,
    slug,
  };
};

const dateFrom = (filename: string): [Date, string] => {
  const { year, month, day, slug } = parseParams(filename);
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));

  return [date, slug];
};

const byDate = (lastFile: string, nextFile: string) => {
  const [last] = dateFrom(lastFile);
  const [next] = dateFrom(nextFile);

  if (last > next) {
    return 1;
  } else {
    return -1;
  }
};

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
  date: string;
  slug: string;
};

export async function parseArticle(filepath: string): Promise<Article> {
  const source = await fs.readFile(filepath, "utf-8");
  const {
    attributes: { title, description, tags, category },
    body: markdown,
  } = frontMatter(source);
  const body = marked(markdown);
  const [date, slug] = dateFrom(path.basename(filepath));

  return {
    title,
    description,
    tags,
    category,
    body,
    date: date.toISOString(),
    slug,
  };
}

export async function findArticle(
  params: ArticleParams
): Promise<Article | undefined> {
  if (!params) return;

  try {
    const { year, month, day, slug } = params;
    const filename = `${year}-${month}-${day}-${slug}.md`;
    const filepath = path.join(__dirname, filename);
    const article = await parseArticle(filepath);

    return article;
  } catch (_error) {
    return;
  }
}

export const ARTICLES_PATH = path.join(process.cwd(), "articles", "*.md");

export async function findLatestArticles(): Promise<Article[]> {
  return await Promise.all(
    glob(ARTICLES_PATH).sort(byDate).slice(0, 6).map(parseArticle)
  );
}

export function findArticlePaths(): string[] {
  return glob(ARTICLES_PATH)
    .map(parseParams)
    .map(({ year, month, day, slug }) => `/${year}/${month}/${day}/${slug}`);
}
