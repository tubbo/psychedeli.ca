import { useDarkMode } from "theme";
import { darkTheme, lightTheme } from "stitches.config";
import { ThemeRule } from "@stitches/core";
import { useState, MouseEventHandler, useEffect } from "react";

export function useTheme(): [ThemeRule, MouseEventHandler] {
  const prefersDark = useDarkMode();
  const [theme, setTheme] = useState<ThemeRule>(
    prefersDark ? darkTheme : lightTheme
  );
  const toggle: MouseEventHandler<HTMLButtonElement> = () => {
    if (theme) {
      setTheme(theme.className === "dark" ? lightTheme : darkTheme);
    }
  };

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.className = "";
      body.classList.add(theme.className);
    }
  }, [theme]);

  return [theme, toggle];
}
