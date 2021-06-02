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
import { Page } from "components/page";

export type ArticlePageProps = { article: ArticleType };

export default function ArticlePage({ article }: ArticlePageProps) {
  return (
    <Page>
      <Article>
        <ArticleHeader>
          <ArticleTitle>{article.title}</ArticleTitle>
        </ArticleHeader>
        <ArticleContent body={article.body} />
        <ArticleFooter>
          <ArticleDate date={article.date} />
        </ArticleFooter>
      </Article>
    </Page>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const article = await findArticle(params as ArticleParams);

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
