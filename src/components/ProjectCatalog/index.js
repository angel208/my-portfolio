import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function ProjectCatalog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(projects)/" } }
      ) {
        edges {
          node {
            html
            id
            frontmatter {
              slug
              title
              description
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
      }
    }
  `)

  return (
    <div
      id="projects-section"
      className={`background-transparent h-auto w-full pt-4 pb-32 sm:pb-56 flex flex-col justify-center items-center object-fill`}
    >
      <h1 className="text-main-text mt-12 lg:mt-0 pt-4 w-40 text-center text-4xl border-t-2 border-primary">
        Projects
      </h1>
      <div
        name="GridCardContainer"
        className="grid-card-container sm:w-8/10 h-auto lg:h-auto"
      >
        {data.allMarkdownRemark.edges.map(edge => (
          <Link
            className="post-item relative overflow-hidden h-64"
            to={edge.node.frontmatter.slug}
          >
            <div className="post-summary">
              <h2 className="hover:text-primary hover:scale-110">
                {edge.node.frontmatter.title}
              </h2>
              <p className="font-light ">{edge.node.frontmatter.description}</p>
            </div>
            <Img
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Link>
        ))}
      </div>
      <div className="w-8/10 px-12 lg:w-auto">
        <button className="btn btn-primary">All Projects</button>
      </div>
    </div>
  )
}
