import React, { ReactElement } from 'react';
import '../styles/globals.css';

interface AppProp {
  Component: React.FC;
  pageProps: any;
}
function MyApp(props: AppProp): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
}

export default MyApp;
