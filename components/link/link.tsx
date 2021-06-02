import NextLink from "next/link";
import { FC } from "react";
import { Anchor } from "components/link";
import { StitchesVariants } from "@stitches/core";

export type LinkProps = StitchesVariants<typeof Anchor> & { href: string };

export const Link: FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Anchor {...props}>{children}</Anchor>
    </NextLink>
  );
};
