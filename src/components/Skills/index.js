import React from "react"
import {
  FaPython,
  FaAws,
  FaAtlassian,
  FaReact,
  FaWordpressSimple,
} from "react-icons/fa"
import SectionTitle from "../Global/SectionTitle"

import SkillCard from "./SkillCard"

export default function Skills() {
  return (
    <div
      id="skills-section"
      className={`background-transparent h-auto w-full py-3 lg:pt-0 lg:pb-8 flex flex-col justify-center items-center object-fill`}
    >
      <SectionTitle text="Skills" border={true} />

      <div
        name="GridCardContainer"
        className="grid-card-container sm:w-7/10 md:w-8/10 h-auto lg:h-auto"
      >
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaPython className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaAws className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaReact className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaAtlassian className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaPython className="card-icon" />}
          smallHidden={true}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Back-End Developer"}
          iconComponent={<FaWordpressSimple className="card-icon" />}
          smallHidden={true}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
      </div>
    </div>
  )
}
