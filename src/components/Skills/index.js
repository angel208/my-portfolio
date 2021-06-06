import React from "react"
import {
  FaPython,
  FaAws,
  FaAtlassian,
  FaReact,
  FaWordpressSimple,
  FaDatabase,
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
          title={"Back-End Development"}
          iconComponent={<FaPython className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"AWS Architectures"}
          iconComponent={<FaAws className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Front-End Development"}
          iconComponent={<FaReact className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Atlassian Certificated"}
          iconComponent={<FaAtlassian className="card-icon" />}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Database Analysis"}
          iconComponent={<FaDatabase className="card-icon" />}
          smallHidden={true}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elitasd fesasd, consectetur fre."
          }
        />
        <SkillCard
          title={"Wordpress Development"}
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
