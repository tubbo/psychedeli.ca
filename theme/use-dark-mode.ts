import { useMediaQuery } from "react-responsive";

export const useDarkMode = (): boolean => {
  const prefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  if (typeof window !== "undefined") return prefersDark;
  if (new Date().getHours() >= 20) return true;

  return false;
};
