import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import { DiReact } from "react-icons/di"

import styles from "./Navbar.module.css"

export default function Navbar() {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => {
    setClick(!click)
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  //TODO: separate responsive navbar in two components
  //TODO: add constants for conditional styles
  return (
    <>
      <IconContext.Provider value={{ color: "141414" }}>
        <nav
          id="nav"
          className={`flex justify-center items-center text-base sticky top-0 z-50
          ${click ? styles.clickedNav : styles.unclickedNav}
          ${scroll ? styles.activeNav : styles.inactiveNav}  `}
        >
          <div
            name="navbarContainer"
            className={`flex justify-between z-10 w-full max-w-screen-xl p-4 lg:p-1`}
          >
            <Link
              name="navbarLogo"
              className={`text-main-text justify-self-start cursor-pointer no-underline text-2xl flex items-center`}
              to="/"
            ></Link>
            <div
              name="mobileIcon"
              className={` block absolute top-0 right-0 mt-4 mr-8 transform text-3xl cursor-pointer lg:hidden z-40`}
              onClick={handleClick}
            >
              {click ? (
                <FaTimes className="menu-icon text-main-text" />
              ) : (
                <FaBars className="menu-icon text-main-text" />
              )}
            </div>
            <ul
              name="navMenu"
              className={` flex flex-col w-full h-almostscreen absolute opacity-100  left-0 bg-main-background
                                lg:flex-row lg:w-auto lg:h-auto lg:relative lg:text-center lg:list-none lg:items-center lg:bg-transparent 
              ${click ? `top-100` : `top-negative lg:top-100`} `}
              onClick={handleClick}
              click={click}
            >
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/#about-section"
                >
                  About Me
                  <span name="border"></span>
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/#skills-section"
                >
                  Skills
                  <span name="border"></span>
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/#projects-section"
                >
                  Projects
                  <span name="border"></span>
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/#testimonials-section"
                >
                  Testimonials
                  <span name="border"></span>
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/#contact-section"
                >
                  Contact
                  <span name="border"></span>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}
