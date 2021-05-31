import { Article, findLatestArticles } from "articles";
import { ArticleSummary } from "components/article";
import { Page } from "components/page";
import { GetStaticProps } from "next";

type HomePageProps = {
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articles = await findLatestArticles();

    return { props: { articles } };
  } catch (error) {
    return { props: { error }, notFound: true };
  }
};

export default function Home({ articles }: HomePageProps) {
  return (
    <Page>
      {articles.map((article) => (
        <ArticleSummary article={article} />
      ))}
    </Page>
  );
}
