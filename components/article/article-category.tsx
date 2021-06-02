import { FC } from "react";
import { Link } from "components/link";
import { styled } from "stitches.config";

export const ArticleCategory: FC<{ category: string }> = ({ category }) => {
  const to = `/${category}`;

  return (
    <Link weight="bold" decoration="none" href={to}>
      {category}
    </Link>
  );
};
