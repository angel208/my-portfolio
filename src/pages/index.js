import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <h1 className="text-secondary-text">Hello world</h1>
  </Layout>
)

export default IndexPage
