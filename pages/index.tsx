import { Article, findLatestArticles } from "articles";
import { ArticleSummary } from "components/article";
import { GetStaticProps } from "next";
import Head from "next/head";
import { Main } from "components/page";

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

const logo = "";

export default function Home({ articles }: HomePageProps) {
  return (
    <Main>
      <Head>
        <meta
          key="og:title"
          property="og:title"
          content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:url"
          property="og:url"
          content={process.env.NEXT_PUBLIC_HOST}
        />
        <meta key="og:image" property="og:image" content={logo} />
      </Head>
      {articles.map((article, key) => (
        <ArticleSummary key={key} article={article} />
      ))}
    </Main>
  );
}
