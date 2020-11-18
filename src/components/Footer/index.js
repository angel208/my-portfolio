import React from "react"
import {
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaArrowUp,
  FaGithub,
} from "react-icons/fa"

export default function Footer() {
  return (
    <div
      className={`bg-secondary-background pb-12 pt-20 h-auto w-full flex flex-col justify-center items-center relative`}
    >
      <button className="w-8 h-20 top-0 bg-primary absolute -mt-8 flex justify-center items-center">
        <FaArrowUp className="text-main-text font-light h-full" />
      </button>
      <h1 className="px-6 py-6 text-2xl lg:text-3xl md:w-5/10 lg:w-3/10 text-center leading-tight ">
        Let´s Make Something Great Together
      </h1>
      <p>angel.fp204@gmail.com</p>
      <div className="flex justify-center items-center mt-5">
        <span className="footer-social-icon">
          <a href="#">
            <FaGithub />
          </a>
        </span>
        <span className="footer-social-icon">
          <a href="#">
            <FaTwitter />
          </a>
        </span>
        <span className="footer-social-icon">
          <a href="#">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </div>
  )
}
