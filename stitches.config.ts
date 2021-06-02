import { createCss } from "@stitches/react";
import "normalize.css/normalize.css";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        base03: "#002b36",
        base02: "#073642",
        base01: "#586e75",
        base00: "#657b83",
        base0: "#839496",
        base1: "#93a1a1",
        base2: "#eee8d5",
        base3: "#fdf6e3",
        yellow: "#b58900",
        orange: "#cb4b16",
        red: "#d30102",
        magenta: "#d33682",
        violet: "#6c71c4",
        blue: "#268bd2",
        cyan: "#2aa198",
        green: "#859900",
      },
      fontSizes: {
        base: "20px",
        0: "0.8em",
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
      fonts: {
        system: "'Fira Sans', sans-serif",
        heading: "'Ubuntu', sans-serif",
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
    base03: "#002b36",
    base02: "#073642",
    base01: "#586e75",
    base00: "#657b83",
    base0: "#839496",
    base1: "#93a1a1",
    base2: "#eee8d5",
    base3: "#fdf6e3",
  },
});

export const lightTheme = theme({
  colors: {
    base0: "#002b36",
    base1: "#073642",
    base2: "#586e75",
    base3: "#657b83",
    base03: "#839496",
    base02: "#93a1a1",
    base01: "#eee8d5",
    base00: "#fdf6e3",
  },
});
