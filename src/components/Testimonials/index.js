import React from "react"
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"
import SectionTitle from "../Global/SectionTitle"

export default function Testimonials() {
  return (
    <div
      id="testimonials-section"
      className={`bg-secondary-background py-20  lg:py-24 w-full flex flex-col justify-center items-center object-fill`}
    >
      <SectionTitle text="Testimonials" />
      <div className="border mt-8 border-opacity-25 border-secondary-text xl:w-8/12 w-8/10 px-10 sm:px-16 py-10 text-center relative ">
        <FaQuoteLeft className="text-primary absolute top-0 left-0 mt-5 ml-5" />
        <FaQuoteRight className="text-primary absolute bottom-0 right-0 mb-5 mr-5" />
        <p className="text-secondary-text text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          nulla in porta faucibus. Nam at convallis magna. Vivamus vitae odio
          posuere, molestie lorem sit amet, ultricies quam. Nunc mollis mollis
          sapien, at ornare velit pretium non. Nam vel elit odio. Nulla leo
          augue, tempor vel consectetur quis, suscipit ultrices turpis.
        </p>
      </div>
    </div>
  )
}
