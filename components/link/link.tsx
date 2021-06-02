import NextLink, { LinkProps } from "next/link";
import { FC } from "react";
import { Anchor } from "components/link";

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink passHref {...props}>
      <Anchor>{children}</Anchor>
    </NextLink>
  );
};
