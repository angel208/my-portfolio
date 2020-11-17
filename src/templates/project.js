import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

export default function project({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  //TODO: what is dangeouslysethtml?
  //TODO: add images?
  //TODO: add postlist
  return (
    <Layout>
      <SEO title="Page two" />
      <div>
        <div>
          <Img fluid={frontmatter.featuredImage.childImageSharp.fluid} />
          <div>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
