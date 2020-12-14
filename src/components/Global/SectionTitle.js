import React from "react"

export default function SectionTitle(props) {
  const text = props.text
  const border = props.border ? true : false
  const left = props.left ? true : false

  return (
    <h1
      className={`text-main-text mt-12 lg:mt-0 py-4 w-auto  text-4xl  
      ${border ? `border-t-2  border-primary` : ``}
      ${left ? `text-center lg:text-left` : `text-center`}`}
    >
      {text}
    </h1>
  )
}
