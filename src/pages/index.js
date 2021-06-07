import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/About"
import Skills from "../components/Skills"
import ProjectCatalog from "../components/ProjectCatalog"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <About />
    <Skills />
    <ProjectCatalog />
    <Contact />
  </Layout>
)

export default IndexPage
