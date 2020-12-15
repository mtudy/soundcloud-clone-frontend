import '../styles/globals.css';
import 'antd/dist/antd.compact.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import type { AppProps /* , AppContext */ } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
