import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Components/Card/Card'
import Carousel, { CarouselItem } from '../Components/Carousel/Carousel.jsx'

const Home = () => {
  const products = useSelector((state) => state.cart.items)
  return (
    <>
      <Carousel>
        {products &&
          products
            .flat()
            .reverse()
            .map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>

      <h1>Товари у наявності</h1>
      <div className="icecream">
        {products && products.map((item, index) => <Card key={index} {...item} />)}
      </div>
    </>
  )
}

export default Home
