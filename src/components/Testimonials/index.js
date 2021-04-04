import React from "react"
import {
  FaPenFancy,
  FaQuoteLeft,
  FaQuoteRight,
  FaAngleLeft,
  FaAngleRight,
  FaSquare,
} from "react-icons/fa"
import SectionTitle from "../Global/SectionTitle"
import Carousel from "react-gallery-carousel"
import "react-gallery-carousel/dist/index.css"

export default function Testimonials() {
  const testimonials = [
    <p className="testimonial-text">
      1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      tempornulla in porta faucibus. Nam at convallis magna. Vivamus vitae
      odioposuere, molestie lorem sit amet, ultricies quam. Nunc mollis
      mollissapien, at ornare velit pretium non. Nam vel elit odio. Nulla leo
      augue, tempor vel consectetur quis, suscipit ultrices turpis.
    </p>,
    <p className="testimonial-text">
      2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      tempornulla in porta faucibus. Nam at convallis magna. Vivamus vitae
      odioposuere, molestie lorem sit amet, ultricies quam. Nunc mollis
      mollissapien, at ornare velit pretium non. Nam vel elit odio. Nulla leo
      augue, tempor vel consectetur quis, suscipit ultrices turpis.
    </p>,
    <p className="testimonial-text">
      3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      tempornulla in porta faucibus. Nam at convallis magna. Vivamus vitae
      odioposuere, molestie lorem sit amet, ultricies quam. Nunc mollis
      mollissapien, at ornare velit pretium non. Nam vel elit odio. Nulla leo
      augue, tempor vel consectetur quis, suscipit ultrices turpis.
    </p>,
  ]

  return (
    <div
      id="testimonials-section"
      className={`bg-secondary-background py-20  lg:py-24 w-full flex flex-col justify-center items-center object-fill`}
    >
      <SectionTitle text="Testimonials" />
      <div className="border mt-8 border-opacity-25 border-secondary-text xl:w-8/10 w-8/10 px-0 sm:px-16 py-10 text-center relative ">
        <FaQuoteLeft className="text-primary absolute top-0 left-0 mt-5 ml-5" />
        <FaQuoteRight className="text-primary absolute bottom-0 right-0 mb-5 mr-5" />

        <Carousel
          children={testimonials}
          hasLeftButton={false}
          hasRightButton={false}
          hasCaptions={false}
          hasIndexBoard={false}
          hasMediaButton={false}
          hasSizeButton={false}
          hasThumbnails={false}
          isAutoPlaying={true}
          transitionSpeed={10}
          hasDotButtons={"bottomCenter"}
          activeIcon={<FaSquare className="text-primary mx-1 text-xs" />}
          passiveIcon={
            <FaSquare className="text-secondary-text mx-1 text-xs" />
          }
          leftIcon={
            <FaAngleLeft className="text-secondary-text mx-1 text-4xl" />
          }
          rightIcon={
            <FaAngleRight className="text-secondary-text mx-1 text-4xl" />
          }
          className="bg-transparent text-secondary-text  text-sm sm:text-base"
        />
      </div>
    </div>
  )
}
