import { FC } from "react";
import Head from "next/head";
import { styled, darkTheme, lightTheme } from "stitches.config";
//import { useMediaQuery } from 'react-media-query'

type PageProps = {
  title?: string;
};

export const Main = styled("main", {});

export const Page: FC<PageProps> = ({ title, children }) => {
  const prefersDark = true; //useMediaQuery('(color-scheme: prefers-dark)')
  const theme = prefersDark ? darkTheme : lightTheme;
  const pageTitle = title
    ? `${title} | ${process.env.NEXT_PUBLIC_APP_TITLE}`
    : process.env.NEXT_PUBLIC_APP_TITLE;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Main className={theme}>{children}</Main>
    </>
  );
};
