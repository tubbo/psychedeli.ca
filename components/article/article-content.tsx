import { FC } from "react";

export type ArticleContentProps = {
  body: string
}

export const ArticleContent: FC<ArticleContentProps> = ({ body: __html }) =>
  <main dangerouslySetInnerHTML={{ __html }}
