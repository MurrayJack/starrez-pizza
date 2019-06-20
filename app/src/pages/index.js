import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from "react-apollo";
import PictureStudio from "../components/pictureStudio";

// require("./information.css");

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'https://zrnf9j0k.api.sanity.io/v1/graphql/production/default',
})

const client = new ApolloClient({
    cache,
    link
})

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />

            <ApolloProvider client={client}>

                <PictureStudio />

            </ApolloProvider>
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
{
  allSanityImages {
    edges {
      node {
        _id
        image {
          asset {
            url
          }
        }
      }
    }
  }
}
`;
