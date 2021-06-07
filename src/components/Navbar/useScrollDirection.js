import { useState, useEffect, useRef } from "react"

const useScrollDirection = () => {
  const prevPosition = useRef(0)
  const [scrollingDown, setScrollingDown] = useState(() => false)

  let checkScrollDirection = () => {
    const previousPosition = prevPosition.current
    const currentPosition = window.scrollY

    if (currentPosition > previousPosition) setScrollingDown(true)
    if (currentPosition < previousPosition) setScrollingDown(false)

    prevPosition.current = currentPosition
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollDirection)

    return function cleanupListener() {
      window.removeEventListener("scroll", checkScrollDirection)
    }
  }, [])

  return scrollingDown
}

export default useScrollDirection
