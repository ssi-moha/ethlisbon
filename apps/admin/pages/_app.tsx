import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo, ApolloProvider } from 'apollo';
import { Box, ThemeProvider } from 'ui';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider>
        <Box px={10} py={10}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
