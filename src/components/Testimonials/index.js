import React from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

export default function Testimonials() {
  return (
    <div
      className={`bg-secondary-background py-32 w-full flex flex-col justify-center items-center object-fill`}
    >
      <h2 className="text-3xl text-main-text w-8/10 sm:text-4xl text-center block mb-5">
        Testimonials
      </h2>
      <div className="border border-opacity-25 border-secondary-text xl:w-8/12 w-8/10 px-16 py-10 text-center relative ">
        <FaQuoteLeft className="text-primary absolute top-0 left-0 mt-5 ml-5" />
        <FaQuoteRight className="text-primary absolute bottom-0 right-0 mb-5 mr-5" />
        <p className="text-secondary-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          nulla in porta faucibus. Nam at convallis magna. Vivamus vitae odio
          posuere, molestie lorem sit amet, ultricies quam. Nunc mollis mollis
          sapien, at ornare velit pretium non. Nam vel elit odio. Nulla leo
          augue, tempor vel consectetur quis, suscipit ultrices turpis.
          Pellentesque urna odio, venenatis vulputate nulla sit amet, consequat
          tempus nisl. Sed vestibulum eget ex lobortis consequat. Cras feugiat
          ipsum metus.
        </p>
      </div>
    </div>
  )
}
