import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Images from "../components/Images"

import Band from "../components/mdj-ui/Band";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Band BGColor="#50AABF" Color="white">
      main thig
    </Band>

    <Band BGColor="DDE0E0" Color="#364459">
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
      <Images />
    </Band>

    <Band BGColor="#364459" Color="white">
      footer
    </Band>



  </Layout>
)

export default IndexPage
