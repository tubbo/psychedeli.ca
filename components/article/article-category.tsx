import { FC } from "react";
import { Link } from "components/link";
import { styled } from "stitches.config";

const BoldLink = styled(Link, { fontWeight: "bold" });

export const ArticleCategory: FC<{ category: string }> = ({ category }) => {
  const to = `/${category}`;

  return <BoldLink href={to}>{category}</BoldLink>;
};
