import { Article } from "articles";
import { Link } from "components/link";
import { ArticleDate, ArticleCategory } from "components/article";
import { styled } from "stitches.config";

export type ArticleSummaryProps = {
  article: Article;
};

const Summary = styled("summary", {
  listStyleType: "none",
});

const Title = styled("h2", {
  fontFamily: "$fonts$heading",
});

const Footer = styled("footer", {
  fontSize: "$fontSizes$0",
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
        <Title>{article.title}</Title>
      </header>
      <main>
        <p>{article.description}</p>
        <p>
          <Link href={path}>Read more...</Link>
        </p>
      </main>
      <Footer>
        Posted on <ArticleDate date={article.date} /> in{" "}
        <ArticleCategory category={article.category} />.
      </Footer>
    </Summary>
  );
}
