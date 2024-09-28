import { Html, Head, Main, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Society of Hispanic Professional Engineers - Cal Poly SLO</title>
        <meta
          name="title"
          content="Society of Hispanic Professional Engineers - Cal Poly SLO"
        />
        <meta
          name="description"
          content="Welcome to SHPE @ Cal Poly SLO. Find out more about our events, officers, and partners here."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.calpolyshpe.org/" />
        <meta
          property="og:title"
          content="Society of Hispanic Professional Engineers - Cal Poly SLO"
        />
        <meta
          property="og:description"
          content="Welcome to SHPE @ Cal Poly SLO. Find out more about our events, officers, and partners here."
        />
        <meta
          property="og:image"
          content="/HomeImgs/Mainpage_GroupPhoto.jpeg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.calpolyshpe.org/" />
        <meta
          property="twitter:title"
          content="Society of Hispanic Professional Engineers - Cal Poly SLO"
        />
        <meta
          property="twitter:description"
          content="Welcome to SHPE @ Cal Poly SLO. Find out more about our events, officers, and partners here."
        />
        <meta
          property="twitter:image"
          content="/HomeImgs/Mainpage_GroupPhoto.jpeg"
        />
      </Head>
      <body>
        <Header />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
