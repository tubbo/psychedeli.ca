import { Article, findLatestArticlesTagged, findArticles } from "articles";
import { ArticleSummary } from "components/article";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Main, Title } from "components/page";
import uniq from "lodash.uniq";

export type TagPageProps = {
  name: string;
  articles: Article[];
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const name = params?.name as string;
    const articles = await findLatestArticlesTagged(name);

    return { props: { name, articles } };
  } catch (error) {
    return { props: { error }, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await findArticles();
  const paths = uniq(articles.map(({ tags }) => tags).flat()).map(
    (tag) => `/tags/${tag}`
  );

  return { paths, fallback: false };
};

export default function TagPage({ name, articles }: TagPageProps) {
  const title = `articles tagged ${name}`;

  return (
    <Main>
      <Head>
        <title key="title">
          {title} | {process.env.NEXT_PUBLIC_TITLE}
        </title>
        <meta key="og:title" property="og:title" content={title} />
      </Head>
      <Title>articles tagged #{name}</Title>
      {articles.map((article, key) => (
        <ArticleSummary key={key} article={article} />
      ))}
    </Main>
  );
}
