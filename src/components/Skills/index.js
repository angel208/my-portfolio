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
            "Development of back-end apps with Python, Nodejs and Java."
          }
        />
        <SkillCard
          title={"AWS Architectures"}
          iconComponent={<FaAws className="card-icon" />}
          text={
            "Design and maintenance of AWS architectures. Certified as AWS Solutions Architect."
          }
        />
         <SkillCard
          title={"Database Analysis"}
          iconComponent={<FaDatabase className="card-icon" />}
          smallHidden={true}
          text={
            "Design and implementation of Relational and NoSQL databases."
          }
        />
        <SkillCard
          title={"Front-End Development"}
          iconComponent={<FaReact className="card-icon" />}
          text={
            "Creation of front-end web apps using React ecosystem."
          }
        />
        <SkillCard
          title={"Atlassian Certified"}
          iconComponent={<FaAtlassian className="card-icon" />}
          text={
            "Jira setup, management and plugin development. Certified as Jira administrator."
          }
        />
       
        <SkillCard
          title={"Wordpress Development"}
          iconComponent={<FaWordpressSimple className="card-icon" />}
          smallHidden={true}
          text={
            "Sites and stores creation using WordPress. WordPress custom code programming."
          }
        />
      </div>
    </div>
  )
}
