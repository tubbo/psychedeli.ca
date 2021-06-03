import { styled } from "stitches.config";

export const Button = styled("button", {
  border: 0,
  padding: "1rem",
  background: "transparent",
  cursor: "pointer",
  svg: {
    fill: "$colors$base3",
    "&:hover": {
      fill: "$colors$base1",
      transition: "all 0.3s ease-in-out",
    },
    "&:active": {
      fill: "$colors$base1",
      transition: "all 0.3s ease-in-out",
    },
  },
  outline: "none",
});
