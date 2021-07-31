import './Carousel.css'

import React, { useEffect, useState } from 'react'

export const CarouselItem = ({ children, width, imageUrl }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <img className="carousel__img" src={imageUrl} alt="Carousel__image">
        {children}
      </img>
    </div>
  )
}
console.log('rendered')
const Carousel = ({ children }) => {
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
    <div className="carousel">
      <div className="inner" style={{ transform: `translateX(-${activeIndex * 40}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '450px' })
        })}
      </div>
    </div>
  )
}

export default Carousel
