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
      
      {/* Adsterra Ad Script */}
      <Script
        id="adsterra-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Add your Adsterra ad code here
            // Example: atOptions = { 'key': 'your-key', ... }
          `,
        }}
      />
      
      <Component {...pageProps} />
    </>
  );
}
