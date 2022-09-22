import '../styles/globals.scss';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  console.log('🚀 ~ file: _app.tsx ~ line 12 ~ router', router, router.pathname);
  useEffect(() => {
    import('tw-elements');
  }, []);

  return (
    <div
      className="min-h-screen bg-no-repeat bg-cover h-screen"
      style={{
        backgroundImage: router.pathname === '/' ? 'url(/images/lontra-full-homepage.png)' : 'url(/images/lontra-mini-white.png)',
      }}>
      <Head>
        <title>Lontra Ventures</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar logo={router.pathname !== '/'} />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
