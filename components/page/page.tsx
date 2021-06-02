import { FC } from "react";
import Head from "next/head";
import { styled, global, darkTheme, lightTheme } from "stitches.config";
import { useMediaQuery } from "react-responsive";

type PageProps = {
  title?: string;
};

export const Main = styled("main", {
  maxWidth: "76rem",
  padding: "2rem",
  margin: "auto",
});

export const Title = styled("h1", {
  fontSize: "$fontSizes$1",
});

export const Page: FC<PageProps> = ({ title, children }) => {
  const prefersDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  const theme = prefersDark ? darkTheme : lightTheme;
  const pageTitle = title
    ? `${title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`
    : process.env.NEXT_PUBLIC_APP_TITLE;

  global({
    body: {
      color: "$hiContrast",
      background: "$loContrast",
      fontSize: "$fontSizes$base",
    },
  })();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {title && <Title>{title}</Title>}
      <Main className={theme.className}>{children}</Main>
    </>
  );
};
