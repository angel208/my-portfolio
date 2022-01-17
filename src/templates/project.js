import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { FaGithub, FaLink } from "react-icons/fa"
import SocialIcon from "../components/Global/SocialIcon"

export default function project({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  //TODO: what is dangeouslysethtml?
  //TODO: add images?
  //TODO: add postlist
  return (
    <Layout>
      <SEO title="Page two" />
      <div className=" lg:w-10/12 mx-auto bg-white text-black ">
        <div className=" ml-auto mr-auto py-16 px-6 sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-6/12 2xl:w-6/12 ">
          <div
            className={`fixed top-2/10 -ml-20  ${
              frontmatter.github === "none" ? ` hidden ` : ``
            }`}
          >
            <SocialIcon
              iconComponent={<FaGithub color="black" />}
              linkRef={frontmatter.github}
              size="md"
            />
            { frontmatter.url ? 
             <SocialIcon
              iconComponent={<FaLink color="black" />}
              linkRef={frontmatter.url}
              size="sm"
            /> : ""
          }
          </div>
          <Link
              name="navbarLogo"
              className={`text-subtitle block text-right w-full`}
              to="/">
                 {'< Go back'}
          </Link>
          <h1 className="text-black text-4xl lg:text-5xl">
            {frontmatter.title}
          </h1>
          <div>{ frontmatter.tags ?
            frontmatter.tags.map( (tag, i)=> (
              <div className="inline text-subtitle text-sm"> { i > 0 ? <>&middot;</> : ''}  {tag}</div>
            )) : ''
          }
          </div>
          <h2 className="mt-4 text-subtitle text-xl lg:text-2xl ">
            {frontmatter.description}
          </h2>
         
         
          <Img
            className="my-10 "
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
          <div>
            <div
              className="project-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
        description
        github
        url
        tags
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
