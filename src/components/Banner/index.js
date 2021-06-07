import React from "react"
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import SocialIcon from "../Global/SocialIcon"
import { Link } from "gatsby"

export default function Banner() {
  return (
    <div
      className={`banner-background lg:banner-background-lg h-screen w-full flex flex-col justify-center items-center object-fill -mt-24 pt-24`}
    >
      <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="z-20 h-full w-full flex flex-col items-center justify-center lg:flex-row lg:justify-start">
        <div
          name="socialIcons"
          className="text-white flex flex-row  lg:h-full lg:flex-col lg:mb-12 justify-end "
        >
          <SocialIcon iconComponent={<FaLinkedin />} linkRef="#" size="md" />
          <SocialIcon iconComponent={<FaGithub />} linkRef="#" size="md" />
          <SocialIcon iconComponent={<FaInstagram />} linkRef="#" size="md" />
        </div>
        <div name="Hero" className="p-6 lg:pl-12">
          <h1 className="text-4xl sm:text-6xl uppercase text-center md:text-left">
            Angel Peña
          </h1>
          <p className=" text-secondary-text  text-center lg:text-left lg:text-2xl">
            SW Engineer / Backend Dev / Cloud Arch
          </p>
          <div className="mt-8 lg:mt-16">
            <Link name="navLinks" to="/#contact-section">
              <button className="btn btn-primary">Let's Talk</button>
            </Link>
            <Link name="navLinks" to="/#projects-section">
              <button className="btn lg:ml-6">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
