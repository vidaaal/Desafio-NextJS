import type { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import light from '../styles/themes/light';
import GlobalStyles from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
