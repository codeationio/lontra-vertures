import '../styles/globals.scss';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    import('tw-elements');
  }, []);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Lontra Ventures</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
