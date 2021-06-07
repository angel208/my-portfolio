import React from "react"

import Loadable from "react-loadable"
const loader = () => <div>Loading...</div>

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/Banner"
import About from "../components/About"
import Skills from "../components/Skills"
import ProjectCatalog from "../components/ProjectCatalog"
import Contact from "../components/Contact"

const LoadableTestimonials = Loadable({
  loader: () => import("../components/Testimonials"),
  loading: loader,
})

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <About />
    <Skills />
    <ProjectCatalog />
    <LoadableTestimonials />
    <Contact />
  </Layout>
)

export default IndexPage
