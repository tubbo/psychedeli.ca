import { FC } from "react";
import { GetStaticProps } from "next";
import { findCategory, Category } from "articles";
import Head from "next/head";
import { Main } from "components/main";
import { ArticleSummary } from "components/article";

export type CategoryPageProps = {
  category: Category;
};

const CategoryPage: FC<CategoryPageProps> = ({ category }) => (
  <Main>
    <Head>
      <title>
        {category.name} - {process.env.NEXT_PUBLIC_APP_TITLE}
      </title>
    </Head>
    {category.articles.map((article, key) => (
      <ArticleSummary key={key} article={article} />
    ))}
  </Main>
);

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const slug = (params?.category as string[])?.join("/");
    const category = await findCategory(slug);

    return { props: { category } };
  } catch (error) {
    return {
      props: { error },
      notFound: true,
    };
  }
};

export default CategoryPage;
