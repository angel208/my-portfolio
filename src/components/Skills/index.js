import React from "react"
import {
  FaPython,
  FaAws,
  FaAtlassian,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa"

export default function Skills() {
  return (
    <div
      id="skills-section"
      className={`background-transparent h-auto w-full py-8 lg:pt-0 lg:pb-16 flex flex-col justify-center items-center object-fill`}
    >
      <h1 className="text-main-text mt-12 lg:mt-0 pt-4 w-24 text-center text-4xl border-t border-primary">
        Skills
      </h1>
      <div
        name="GridCardContainer"
        className="grid-card-container sm:w-7/10 md:w-8/10 h-auto lg:h-80vh"
      >
        <div className="skill-card">
          <FaPython className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
        <div className="skill-card">
          <FaAws className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
        <div className="skill-card">
          <FaReact className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
        <div className="skill-card">
          <FaAtlassian className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
        <div className="skill-card hidden md:flex">
          <FaPython className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
        <div className="skill-card  hidden  md:flex">
          <FaWordpressSimple className="card-icon" />
          <h2>Back-End Developer</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd,
            consectetur fre.
          </p>
        </div>
      </div>
    </div>
  )
}
