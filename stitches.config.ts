import { createCss } from "@stitches/react";
import "normalize.css/normalize.css";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        hiContrast: "#000",
        loContrast: "#FFF",
      },
      fontSizes: {
        base: "20px",
        1: "1.1em",
        2: "1.2em",
        3: "1.3em",
        4: "1.4em",
        5: "1.5em",
        6: "1.6em",
        7: "1.7em",
        8: "1.8em",
        9: "1.9em",
        10: "2em",
      },
    },
    media: {},
    utils: {},
    prefix: "",
    //insertionMethod: 'append | prepend | () => {}',
    themeMap: {},
  });

export const darkTheme = theme({
  colors: {
    hiContrast: "#FFF",
    loContrast: "#000",
  },
});

export const lightTheme = theme({
  colors: {
    hiContrast: "#000",
    loContrast: "#FFF",
  },
});
