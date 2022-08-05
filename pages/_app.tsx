import '../styles/globals.scss';

import { Component, FC, useEffect } from 'react';

const MyApp: FC<{ Component: typeof Component; pageProps: any }> = ({ Component, pageProps }) => {
  useEffect(() => {
    import('tw-elements');
  }, []);
  return <Component {...pageProps} />;
};

export default MyApp;
