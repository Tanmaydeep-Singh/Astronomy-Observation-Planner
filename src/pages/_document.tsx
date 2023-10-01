import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;1,200&display=swap"
        rel="stylesheet"
      />
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
