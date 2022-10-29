import '../min.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'ui';
import { useApollo, ApolloProvider } from 'apollo';
import { useAppDispatch, useAppSelector, wrapper } from 'store';
import { useGetNftOfAWallet } from '../hooks';
import { useEffect } from 'react';
import { connect, reset } from 'store/slices/address';
import { Layout } from '../modules';

function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  useGetNftOfAWallet();
  const nfts = useAppSelector((state) => state.user.nfts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('message', (event) => {
        if (event.data.type === 'ADDRESS') {
          const { address } = event.data as { address: string };
          dispatch(address ? connect(address) : reset());
        }
      });
    }
  });

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
