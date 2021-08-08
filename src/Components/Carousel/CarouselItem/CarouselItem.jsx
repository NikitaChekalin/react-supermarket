import React from 'react'
import styled from './CarouselItem.module.scss'

const CarouselItem = React.memo(({ children, width, imageUrl }) => {
  return (
    <div className={styled.carousel__item} style={{ width: width }}>
      <img className={styled.carousel__img} src={imageUrl} alt="Carousel__image">
        {children}
      </img>
    </div>
  )
})
export default CarouselItem
