import { GetStaticProps } from "next";
import { findArticle } from "articles";
import {
  Article,
  ArticleHeader,
  ArticleContent,
  ArticleFooter,
  ArticleDate,
  ArticleTitle,
} from "components/article";
import { Page } from "components/page";

export default function ArticlePage({ article }) {
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
    const article = await findArticle(params);

    return { props: { article } };
  } catch (error) {
    return { props: { error }, notFound: true };
  }
};
