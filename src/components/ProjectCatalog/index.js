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
      className={`background-transparent h-auto w-full pt-4 pb-56 flex flex-col justify-center items-center object-fill`}
    >
      <h1 className="text-main-text mt-12 lg:mt-0 pt-4 w-40 text-center text-4xl border-t border-primary">
        Projects
      </h1>
      <div name="GridCardContainer" className="grid-card-container">
        {data.allMarkdownRemark.edges.map(edge => (
          <Link
            className="post-item relative overflow-hidden h-64"
            to={edge.node.frontmatter.slug}
          >
            <div className="pt-3 pl-3 post-summary top-70 lg:top-100 h-full w-full absolute left-0 bg-black opacity-75 z-30 transition-all ease duration-500 flex flex-col justify-start items-start">
              <h2 className="font-bold text-primary lg:text-main-text text-lg hover:text-primary transform hover:scale-110 transition-all ease-in duration-200 w-full ">
                {edge.node.frontmatter.title}
              </h2>
              <p className="font-light">{edge.node.frontmatter.description}</p>
            </div>
            <Img
              fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
