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
              className={`text-black justify-self-start cursor-pointer no-underline text-2xl flex items-center`}
              to="/"
            >
              <DiReact name="navIcon" className={`mt-0 mr-2 mb-0 ml-8`} />
              PORTFOLIO
            </Link>
            <div
              name="mobileIcon"
              className={`block absolute top-0 right-0 mt-4 mr-8 transform text-3xl cursor-pointer lg:hidden z-40`}
              onClick={handleClick}
            >
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              name="navMenu"
              className={` flex flex-col w-full h-almostscreen absolute opacity-100 transition ease-out duration-500 bg-white left-0 
                                lg:flex-row lg:w-auto lg:h-auto lg:relative lg:bg-none lg:text-center lg:list-none lg:items-center 
              ${click ? `top-100` : `top-negative lg:top-100`} `}
              onClick={handleClick}
              click={click}
            >
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/"
                >
                  Home
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/images"
                >
                  Images
                </Link>
              </div>
              <div name="navItem" className={`w-full lg:w-auto lg:h-20`}>
                <Link
                  name="navLinks"
                  className={`nav-link lg:nav-link-lg`}
                  to="/destinations"
                >
                  Destinations
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}
