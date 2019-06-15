import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Information from "../components/information";

const IndexPage = ({ data }) => {
  const [showInfo, setShowInfo] = useState({ Visible: false, ID: undefined });

  return <Layout>
    <SEO title="Home" />

    <div className="container">
      {data.allSanityImages.edges.map(e => <div className="card">
        {e.node.image.asset &&
          <button type="button" onClick={() => setShowInfo({Visible: true, ID: e.node._id })}>
            <img alt="pizza" src={e.node.image.asset.url} />
          </button>
        }
      </div>)}

      <Information OnClose={() => setShowInfo({ Visible: false })} Visible={showInfo.Visible} ID={showInfo.ID} /> 

    </div>

  </Layout>
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
