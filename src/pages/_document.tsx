
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className='font-primary'>
      <Head />
      <body className='appear-animate bg-tertiary'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
