import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/About"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <About />
    <h1 className="text-secondary-text">Hello world</h1>
  </Layout>
)

export default IndexPage
