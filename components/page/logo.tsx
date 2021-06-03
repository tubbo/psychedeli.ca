import { styled } from "stitches.config";

export const Logo = styled("div", {
  flex: 1,
  fontFamily: "$fonts$logo",
  fontSize: "$fontSizes$10",
  padding: "0.3em 0 0 0.3em",
  a: {
    color: "$colors$violet",
    transition: "all 0.3s ease-in-out",
  },
});
