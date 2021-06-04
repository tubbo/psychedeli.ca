import { FC } from "react";
import { Main, Title } from "components/page";
import Head from "next/head";

const NotFoundPage: FC = () => {
  return (
    <Main>
      <Head>
        <title>Not Found - {process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Title>not found</Title>
      <p>The file you requested was not found.</p>
    </Main>
  );
};

export default NotFoundPage;
