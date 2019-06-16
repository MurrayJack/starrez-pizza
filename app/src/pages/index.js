import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Information from "../components/information";
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
    const [showInfo, setShowInfo] = useState({ Visible: false, ID: undefined });

    return (
        <Layout>
            <SEO title="Home" />

            <ApolloProvider client={client}>

                <PictureStudio onClick={(id) => setShowInfo({ Visible: true, ID: id })} />

                {/* <Information OnClose={() => setShowInfo({ Visible: false })} Visible={showInfo.Visible} ID={showInfo.ID} /> */}

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
