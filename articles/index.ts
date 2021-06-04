import frontMatter from "front-matter";
import { promises as fs } from "fs";
import path from "path";
import { sync as glob } from "glob";
import removeMarkdown from "remove-markdown";

const parseParams = (filename: string): ArticleParams => {
  const [year, month, day, ...slugs] = path.basename(filename).split("-");
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
    return -1;
  } else {
    return 1;
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

export function computeArticlePath(filename: string): string {
  const { year, month, day, slug } = parseParams(filename);

  return `/${year}/${month}/${day}/${slug}`;
}

export async function parseArticle(filepath: string): Promise<Article> {
  const source = await fs.readFile(filepath, "utf-8");
  const {
    attributes: { title, description: descriptionSource, tags, category },
    body,
  } = frontMatter(source);
  const description = removeMarkdown(descriptionSource);
  const [date, slug] = dateFrom(path.basename(filepath));

  return {
    title,
    description,
    tags: tags ?? [],
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
    const filepath = path.join(process.cwd(), "articles", filename);
    const article = await parseArticle(filepath);

    return article;
  } catch (error) {
    console.error(error);
    return;
  }
}

export const ARTICLES_PATH = path.join(process.cwd(), "articles", "*.md");

export async function findLatestArticles(): Promise<Article[]> {
  const all = await findArticles();

  return all.slice(0, 6);
}

export async function findLatestArticlesTagged(
  name: string
): Promise<Article[]> {
  const all = await findArticles();
  const tagged = all.filter((article) => article.tags.includes(name));

  return tagged.slice(0, 6);
}

export async function findArticles(): Promise<Article[]> {
  return await Promise.all(glob(ARTICLES_PATH).sort(byDate).map(parseArticle));
}

export function findArticlePaths(): string[] {
  return glob(ARTICLES_PATH).map(computeArticlePath);
}

export type Category = {
  name: string;
  articles: Article[];
};

export async function findCategory(name: string): Promise<Category> {
  const data = await findArticles();
  const articles = data.filter((article) => article.category === name);

  return { name, articles };
}
