import React from "react"
import { FaInstagram, FaLinkedin, FaArrowUp, FaGithub } from "react-icons/fa"
import SocialIcon from "../Global/SocialIcon"

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div
      className={`bg-secondary-background pb-12 pt-20 h-auto w-full flex flex-col justify-center items-center relative`}
    >
      <button
        onClick={scrollTop}
        className="w-8 h-20 top-0 bg-primary absolute -mt-8 flex justify-center items-center focus:outline-none hover:scale-110 transform transition ease-in duration-100"
      >
        <FaArrowUp className="text-main-text font-light h-full" />
      </button>
      <h1 className="px-6 py-6 text-2xl lg:text-3xl md:w-5/10 lg:w-3/10 text-center leading-tight ">
        Let´s Make Something Great Together
      </h1>
      <div className="flex justify-center items-center mt-5">
        <SocialIcon iconComponent={<FaLinkedin />} linkRef="https://www.linkedin.com/in/angelfabriciop/" size="sm" />
        <SocialIcon iconComponent={<FaGithub />} linkRef="https://github.com/angel208" size="sm" />
        <SocialIcon iconComponent={<FaInstagram />} linkRef="https://www.instagram.com/angelfabriciop/" size="sm" />
      </div>
    </div>
  )
}
