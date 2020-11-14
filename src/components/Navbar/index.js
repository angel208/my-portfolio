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
          className={`${styles.nav} 
          ${click ? styles.clickedNav : styles.unclickedNav}
          ${scroll ? styles.activeNav : styles.inactiveNav}  `}
        >
          <div className={styles.navbarContainer}>
            <Link className={styles.navbarLogo} to="/">
              <DiReact className={styles.navIcon} />
              MYSITE
            </Link>
            <div className={styles.mobileIcon} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul
              className={`${styles.navMenu} ${
                click ? styles.navMenuDisplayed : styles.navMenuHidden
              }`}
              onClick={handleClick}
              click={click}
            >
              <div className={styles.navItem}>
                <Link className={styles.navLinks} to="/">
                  Home
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link className={styles.navLinks} to="/images">
                  Images
                </Link>
              </div>
              <div className={styles.navItem}>
                <Link className={styles.navLinks} to="/destinations">
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
