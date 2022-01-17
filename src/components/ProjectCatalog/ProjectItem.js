import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function SkillCard(props) {
  const projectPost = props.projectPost

  return (
    <Link
      className="post-item relative overflow-hidden h-64"
      to={projectPost.slug}
    >
      <div className="post-summary ">
        <h2 className="hover:text-primary hover:scale-110">
          {projectPost.title}
        </h2>
        <p className="font-light px-2">{projectPost.description}</p>
      </div>
      <Img fluid={projectPost.featuredImage.childImageSharp.fluid} />
    </Link>
  )
}
