import { styled } from "stitches.config";
import { Link } from "components/link";

export type ArticleTagsProps = { tags: string[] };

export const ArticleTagLink = styled(Link, {
  padding: "0 5px",
});

export function ArticleTags({ tags }: ArticleTagsProps) {
  return (
    <nav>
      {tags.map((tag, key) => (
        <ArticleTagLink decoration="none" key={key} href={`/tags/${tag}`}>
          #{tag}
        </ArticleTagLink>
      ))}
    </nav>
  );
}
