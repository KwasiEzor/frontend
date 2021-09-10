// Layout component
import Layout from "../components/common/Layout";
// global styles
import "../styles/globals.css";
// Redux wrapper
import { wrapper } from "../../redux/store";
// ApolloClient
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import SEO from "../../next-seo.config";
import { DefaultSeo } from "next-seo";
const client = new ApolloClient({
  uri: process.env.STRAPI_GRAPHQL_API,
  cache: new InMemoryCache(),
});
function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
