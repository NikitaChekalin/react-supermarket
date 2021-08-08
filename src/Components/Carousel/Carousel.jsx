import styled from './Carousel.module.scss'
import React, { useEffect, useState } from 'react'

const Carousel = React.memo(({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children) - 1) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const activeCarousel = () => setPaused(true)
    const interval = setInterval(() => {
      if (paused) {
        updateIndex(activeIndex + 1)
      }
    }, 1300)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
      activeCarousel()
    }
  })

  return (
    <div className={styled.carousel}>
      <div
        className={styled.carousel__inner}
        style={{ transform: `translateX(-${activeIndex * 40}%)` }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, { width: '450px' })
        })}
      </div>
    </div>
  )
})

export default Carousel
