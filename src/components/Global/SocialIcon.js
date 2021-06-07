import React from "react"

export default function SocialIcon(props) {
  const iconComponent = props.iconComponent
  const size = props.size
  const linkRef = props.linkRef

  return (
    <span
      className={`mx-3 transform scale-100 transition-all ease-in duration-200 hover:scale-110  
      ${
        size === "sm"
          ? ` text-xl lg:mx-6 lg:my-4 lg:text-2xl `
          : ` text-4xl lg:mx-8 lg:my-4 `
      }`}
    >
      <a href={linkRef} target="blank">
        {iconComponent}
      </a>
    </span>
  )
}
