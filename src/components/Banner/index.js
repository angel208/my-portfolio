import React from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa"

export default function Banner() {
  return (
    <div
      className={`banner-background lg:banner-background-lg h-screen w-full flex flex-col justify-center items-center object-fill -mt-24`}
    >
      <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0 z-10"></div>
      <div className="z-20 h-full w-full flex flex-col items-center justify-center lg:flex-row lg:justify-start">
        <div
          name="socialIcons"
          className="text-white flex flex-row  lg:h-full lg:flex-col lg:mb-12 justify-end "
        >
          <span className="social-icon">
            <a href="#">
              <FaLinkedin />
            </a>
          </span>
          <span className="social-icon">
            <a href="#">
              <FaGithub />
            </a>
          </span>
          <span className="social-icon">
            <a href="#">
              <FaInstagram />
            </a>
          </span>
        </div>
        <div name="Hero" className="p-6 lg:pl-12">
          <h1 className="text-4xl sm:text-6xl uppercase text-center md:text-left">
            Angel Peña
          </h1>
          <p className=" text-secondary-text  text-center lg:text-left lg:text-2xl">
            SW Engineer / Backend Dev / Cloud Arch
          </p>
          <div className="mt-8 lg:mt-16">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn lg:ml-6">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}
