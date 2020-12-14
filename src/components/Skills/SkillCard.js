import React from "react"

export default function SkillCard(props) {
  const iconComponent = props.iconComponent
  const smallHidden = props.smallHidden ? props.smallHidden : false

  return (
    <div
      className={`w-full h-full bg-secondary-background  px-4  py-4 text-center flex flex-col items-center justify-evenly lg:px-8  lg:py-8 ${
        smallHidden ? `hidden  md:flex` : ``
      }`}
    >
      {iconComponent}
      <h2 className=" text-main-text text-xl  mb-3 lg:text-2xl">
        {props.title}
      </h2>
      <p className=" text-secondary-text text-sm lg:text-base">{props.text}</p>
    </div>
  )
}
