import { useDarkMode } from "theme";
import { darkTheme, lightTheme } from "stitches.config";
import { ThemeRule } from "@stitches/core";
import { useState, MouseEventHandler } from "react";

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

  return [theme, toggle];
}
