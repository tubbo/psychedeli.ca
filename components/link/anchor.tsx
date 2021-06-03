import { styled } from "stitches.config";

export const Anchor = styled("a", {
  color: "$colors$blue",
  "&:hover": {
    color: "$colors$magenta",
  },
  variants: {
    weight: {
      bold: {
        fontWeight: "bold",
      },
    },
    decoration: {
      none: {
        textDecoration: "none",
      },
    },
  },
});
