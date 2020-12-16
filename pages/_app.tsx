import '../styles/common/globals.scss';
import 'antd/dist/antd.compact.min.css';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import type { AppProps /* , AppContext */ } from 'next/app';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Layout from '../components/Layout';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER_URL,
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
