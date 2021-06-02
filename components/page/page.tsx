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
  fontFamily: "$fonts$heading",
});

export const Page: FC<PageProps> = ({ title, children }) => {
  const prefersDark = useMediaQuery({ query: "(prefers-color-scheme: dark)" });
  const theme = prefersDark ? darkTheme : lightTheme;
  const pageTitle = title
    ? `${title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`
    : process.env.NEXT_PUBLIC_APP_TITLE;

  global({
    body: {
      color: "$colors$base3",
      background: "$colors$base03",
      fontSize: "$fontSizes$base",
      fontFamily: "$fonts$system",
    },
  })();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Ubuntu:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {title && <Title>{title}</Title>}
      <Main className={theme.className}>{children}</Main>
    </>
  );
};
