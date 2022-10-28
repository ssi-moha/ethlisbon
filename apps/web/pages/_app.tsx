import '../min.css';
import { AppProps } from 'next/app';
import { Layout, ThemeProvider } from 'ui';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
