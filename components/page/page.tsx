import { styled } from "stitches.config";

export const Page = styled("main", {
  color: "$colors$base3",
  background: "$colors$base03",
  fontSize: "$fontSizes$base",
  fontFamily: "$fonts$system",
  lineHeight: "1.2em",
  a: {
    color: "$colors$blue",
    "&:hover": {
      color: "$colors$magenta",
    },
  },
  transition: "all 0.5s ease-in-out",
});
