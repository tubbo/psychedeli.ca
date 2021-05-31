import { Article } from "articles";

export type ArticleSummaryProps = {
  article: Article;
};

export function ArticleSummary({ article }: ArticleSummaryProps) {
  return <p>{article.title}</p>;
}
