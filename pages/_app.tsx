import { AppInitialProps } from "next/app";
import { FunctionComponent, useEffect } from "react";
import Head from "next/head";
import Sun from "icons/sun.svg";
import Moon from "icons/moon.svg";
import { Link } from "components/link";
import { Page, Header, Navigation, Logo } from "components/page";
import { Button } from "components/button";
import { useTheme } from "theme";
import { useCurrentURL } from "urls";
import { global, config } from "stitches.config";
import ProgressBar from "nextjs-progressbar";

import "normalize.css/normalize.css";
import "highlight.js/styles/a11y-dark.css";

export type AppProps = {
  Component: FunctionComponent<AppInitialProps>;
  pageProps: AppInitialProps;
};

function App({ Component, pageProps }: AppProps) {
  const [theme, toggle] = useTheme();
  const url = useCurrentURL();

  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      body.className = "";
      body.classList.add(theme.className);
    }
  }, [theme]);

  global({
    body: {
      color: "$colors$base3",
      background: "$colors$base03",
      transition: "all 0.5s ease-in-out",
    },
    ":root": {
      fontSize: "$fontSizes$base",
      fontFamily: "$fonts$system",
    },
  })();

  return (
    <Page className={theme.className}>
      <Head>
        <title key="title">{process.env.NEXT_PUBLIC_TITLE}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&&family=Rum+Raisin&display=swap"
          rel="stylesheet"
        />
        <meta
          key="og:title"
          property="og:title"
          content={process.env.NEXT_PUBLIC_TITLE}
        />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={process.env.NEXT_PUBLIC_TITLE} />
      </Head>
      <ProgressBar color={config.theme.colors.green} />
      <Header>
        <Logo>
          <Link decoration="none" href="/">
            psychedeli.ca
          </Link>
        </Logo>
        <Navigation>
          <Button onClick={toggle}>
            {theme?.className === "dark" ? (
              <Sun width="1em" height="1em" />
            ) : (
              <Moon width="1em" height="1em" />
            )}
          </Button>
        </Navigation>
      </Header>
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
