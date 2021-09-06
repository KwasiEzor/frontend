// Layout component
import Layout from "../components/common/Layout";
// global styles
import "../styles/globals.css";
// Redux wrapper
import { wrapper } from "../../redux/store";
// ApolloClient
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_API,
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
