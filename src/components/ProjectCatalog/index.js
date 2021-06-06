import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SectionTitle from "../Global/SectionTitle"
import ProjectItem from "./ProjectItem"

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
      className={`background-transparent h-auto w-full pt-4 pb-32 sm:pb-24 flex flex-col justify-center items-center object-fill`}
    >
      <SectionTitle text="Projects" border={true} />
      <div
        name="GridCardContainer"
        className="grid-card-container sm:w-8/10 h-auto lg:h-auto"
      >
        {data.allMarkdownRemark.edges.map(edge => (
          <ProjectItem projectPost={edge.node.frontmatter} />
        ))}
      </div>

      <div
        className={`w-8/10 px-12 lg:w-auto xl:pt-24 ${
          data.allMarkdownRemark.edges.length < 6 ? "hidden" : ""
        } `}
      >
        <button className="btn btn-primary">All Projects</button>
      </div>
    </div>
  )
}
