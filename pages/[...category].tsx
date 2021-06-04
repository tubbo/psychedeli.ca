import { Category, findCategory, findArticles } from "articles";
import { ArticleSummary } from "components/article";
import { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Main, Title } from "components/page";
import uniq from "lodash.uniq";

type CategoryPageProps = {
  category: Category;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await findArticles();
  const paths = uniq(articles.map(({ category }) => `/${category}`));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const name = params?.category ? params?.category[0] : "";
    const category = await findCategory(name);

    return { props: { category } };
  } catch (error) {
    return { props: { error }, notFound: true };
  }
};

export default function CategoryPage({ category }: CategoryPageProps) {
  return (
    <Main>
      <Head>
        <title key="title">
          {category.name} {process.env.NEXT_PUBLIC_TITLE}
        </title>
        <meta key="og:title" property="og:title" content={category.name} />
      </Head>
      <Title>{category.name}</Title>
      {category.articles.map((article, key) => (
        <ArticleSummary key={key} article={article} />
      ))}
    </Main>
  );
}
