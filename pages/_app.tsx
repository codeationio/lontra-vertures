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

  const bgStyle = {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };

  if (router.pathname === '/') {
    bgStyle['backgroundImage'] = 'url(/images/lontra-full-homepage.png)';
  } else if (!router.pathname.toLowerCase().includes('portfolio')) {
    bgStyle['backgroundImage'] = 'url(/images/lontra-mini-white.png)';
  }

  return (
    <div className="flex h-max min-h-screen flex-col bg-cover bg-no-repeat" style={bgStyle}>
      <Head>
        <title>Lontra Ventures</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar type={router.pathname !== '/' ? 'blue' : 'white'} />
      <div className="flex flex-grow flex-col">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default MyApp;
