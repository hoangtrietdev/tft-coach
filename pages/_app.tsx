/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TFT AI Coach - Powered by Groq</title>
        <meta name="description" content="Get Challenger-level TFT coaching powered by AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Adsterra 728x90 Banner Configuration */}
      <Script
        id="adsterra-banner-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions_banner = {
              'key' : '0cfa02fa0d283aa13d4b82e520cd5eb1',
              'format' : 'iframe',
              'height' : 90,
              'width' : 728,
              'params' : {}
            };
          `,
        }}
      />
      
      {/* Adsterra 300x250 Sidebar Configuration */}
      <Script
        id="adsterra-sidebar-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions_sidebar = {
              'key' : '64a576d2a15d1e00a2624d6e84bbae1d',
              'format' : 'iframe',
              'height' : 250,
              'width' : 300,
              'params' : {}
            };
          `,
        }}
      />      
      {/* Adsterra 320x50 Mobile Banner Configuration */}
      <Script
        id="adsterra-mobile-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var atOptions_mobile = {
              'key' : 'd5c1f6df763bfaacd95e8f44cc0ce0e7',
              'format' : 'iframe',
              'height' : 50,
              'width' : 320,
              'params' : {}
            };
          `,
        }}
      />      
      <Component {...pageProps} />
    </>
  );
}
