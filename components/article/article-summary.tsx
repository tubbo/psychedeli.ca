import { Article } from "articles";
import { Link } from "components/link";
import { ArticleDate, ArticleCategory } from "components/article";
import { styled } from "stitches.config";

export type ArticleSummaryProps = {
  article: Article;
};

export const Summary = styled("summary", {
  listStyleType: "none",
});

export function ArticleSummary({ article }: ArticleSummaryProps) {
  const date = new Date(article.date);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDay();
  const path = `/${year}/${month}/${day}/${article.slug}`;

  return (
    <Summary>
      <header>
        <h2>{article.title}</h2>
      </header>
      <main>
        <p>{article.description}</p>
        <p>
          <Link href={path}>Read more...</Link>
        </p>
      </main>
      <footer>
        Posted on <ArticleDate date={article.date} /> in{" "}
        <ArticleCategory category={article.category} />
      </footer>
    </Summary>
  );
}