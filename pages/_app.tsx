import '../styles/globals.scss';

import { AppProps } from 'next/app';
import { FC, useEffect } from 'react';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    import('tw-elements');
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
