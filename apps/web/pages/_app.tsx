import '../min.css';
import { AppProps } from 'next/app';
import { Layout, ThemeProvider } from 'ui';
import { useApollo, ApolloProvider } from 'apollo';
import { wrapper } from 'store';
import { useGetNftOfAWallet } from '../hooks';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  useGetNftOfAWallet();

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(App);
