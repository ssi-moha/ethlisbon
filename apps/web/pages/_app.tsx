import '../min.css';
import { AppProps } from 'next/app';
import { Layout, ThemeProvider } from 'ui';
import { useApollo, ApolloProvider } from 'apollo';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

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

export default App;
