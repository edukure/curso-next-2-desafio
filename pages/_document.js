import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log('rodando o _document.js');
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
