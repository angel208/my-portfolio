import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const image = useStaticQuery(graphql`
    query {
      file(extension: { eq: "jpeg" }, name: { eq: "profile2" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div
      id="about-section"
      className={`background-transparent h-auto py-20 lg:py-40 w-full flex flex-col justify-center items-center object-fill px-8 sm:px-32 xl:px-64
                  lg:flex-row`}
    >
      <h1 className="text-3xl w-8/10 sm:text-4xl text-center block mb-5 lg:hidden ">
        About me
      </h1>
      <div name="Portrait" className="mb-6 lg:mb-0">
        <Img fixed={image.file.childImageSharp.fixed} />
      </div>
      <div name="Content" className="lg:px-8">
        <h1 className="text-4xl text-center hidden lg:text-left lg:mb-6 lg:block ">
          About me
        </h1>
        <p className=" text-secondary-text  text-center lg:text-left lg:text-lg">
          I am a detail driven software engineer, focused on the developmentof
          maintainable solutions, with experience in cloud architecture,
          Atlassian tools implantation and maintenance and softwaredevelopment.
        </p>
        <div className="mt-8 lg:mt-8">
          <button className="btn ">Download CV</button>
        </div>
      </div>
    </div>
  )
}
