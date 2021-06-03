import { GetStaticProps, GetStaticPaths } from "next";
import {
  Article as ArticleType,
  findArticle,
  ArticleParams,
  findArticlePaths,
} from "articles";
import {
  Article,
  ArticleHeader,
  ArticleContent,
  ArticleFooter,
  ArticleDate,
  ArticleTitle,
} from "components/article";
import Head from "next/head";

export type ArticlePageProps = { article: ArticleType };

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <Article>
      <Head>
        <title key="title">
          {article.title} - {process.env.NEXT_PUBLIC_TITLE}
        </title>
        <meta key="og:title" property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:locale" content="en-US" />
        <meta property="article:published_time" content={article.date} />
        <meta property="article:author" content="Tom Scott" />
        <meta property="article:section" content={article.category} />
        {article.tags.map((tag, key) => (
          <meta key={key} property="article:tag" content={tag} />
        ))}
      </Head>
      <ArticleHeader>
        <ArticleTitle>{article.title}</ArticleTitle>
      </ArticleHeader>
      <ArticleContent body={article.body} />
      <ArticleFooter>
        <ArticleDate date={article.date} />
      </ArticleFooter>
    </Article>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const article = await findArticle(params as ArticleParams);

    if (!article) throw new Error("Article not found");

    return { props: { article } };
  } catch (error) {
    console.error(error);

    return { props: { error }, notFound: true };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = findArticlePaths();
  const fallback = true;

  return { paths, fallback };
};
