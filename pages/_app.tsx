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
      className="flex max-h-screen min-h-screen flex-col bg-cover bg-no-repeat"
      style={{
        backgroundImage: router.pathname === '/' ? 'url(/images/lontra-full-homepage.png)' : 'url(/images/lontra-mini-white.png)',
      }}>
      <Head>
        <title>Lontra Ventures</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar logo={router.pathname !== '/'} />
      <div className="flex-grow">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
