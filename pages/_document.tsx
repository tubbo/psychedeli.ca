import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { getCssString } from "stitches.config";

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    const styles = (
      <>
        {initialProps.styles}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssString() }}
        />
      </>
    );

    return {
      ...initialProps,
      styles,
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
