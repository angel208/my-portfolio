import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/About"
import Skills from "../components/Skills"
import ProjectCatalog from "../components/ProjectCatalog"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <About />
    <Skills />
    <ProjectCatalog />
  </Layout>
)

export default IndexPage
