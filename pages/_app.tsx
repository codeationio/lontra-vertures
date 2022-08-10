import '../styles/globals.scss';

import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    import('tw-elements');
  }, []);

  return (
    <div className="min-h-screen">
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
