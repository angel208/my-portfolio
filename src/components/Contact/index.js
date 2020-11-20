import React from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa"

export default function Contact() {
  return (
    <div
      className={` h-auto w-full px-32 py-24 lg:py-32 xl:px-48 flex flex-col-reverse lg:flex-row`}
    >
      <div name="form" className="w-full lg:w-2/3 bg-secondary-background">
        <p>sad</p>
      </div>
      <div
        name="contact-text"
        className="w-full lg:w-1/3 lg:mx-12 text-center lg:text-left py-8"
      >
        <p className="text-primary">Lets Talk</p>
        <h2 className="text-2xl py-2">Contact Me</h2>
        <p className="text-secondary-text py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          nulla in porta faucibus. Nam at convallis magna. Vivamus vitae odio
          posuere, molestie lorem sit amet, ultricies quam. Nunc mollis mollis
          sapien, at ornare velit pretium non. Nam vel elit odio.
        </p>
      </div>
    </div>
  )
}
