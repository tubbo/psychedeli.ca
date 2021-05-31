import { createCss } from "@stitches/react";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {},
    media: {},
    utils: {},
    prefix: "",
    //insertionMethod: 'append | prepend | () => {}',
    themeMap: {},
  });

export const darkTheme = theme({});

export const lightTheme = theme({});
