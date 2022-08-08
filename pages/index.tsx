import Footer from 'components/Footer';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import Head from 'next/head';
import { FC } from 'react';

const Index: FC = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Lontra Ventures</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
