import { styled } from "stitches.config";

export const Page = styled("main", {
  lineHeight: "1.2em",
  a: {
    color: "$colors$blue",
    "&:hover": {
      color: "$colors$magenta",
    },
  },
});
