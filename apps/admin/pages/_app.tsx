import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo, ApolloProvider } from 'apollo';
import { ThemeProvider } from 'ui';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
