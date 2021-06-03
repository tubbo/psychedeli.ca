import { FC } from "react";
import remark from "remark";
import html from "remark-html";
import highlight from "remark-highlight.js";
import { styled } from "stitches.config";

export type ArticleContentProps = {
  body: string;
};

const Main = styled("main", {
  pre: {
    background: "#2b2b2b",
    padding: "1rem",
    overflow: "scroll",
    minWidth: "500px",
  },
});

export const ArticleContent: FC<ArticleContentProps> = ({ body }) => {
  const __html = remark().use(highlight).use(html).processSync(body).toString();

  return <Main dangerouslySetInnerHTML={{ __html }} />;
};
