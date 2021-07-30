import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card'
import Carousel, { CarouselItem } from '../../Components/Carousel/Carousel.jsx'
import Loader from '../../Components/Loader/Loader'

const Home = () => {
  const products = useSelector((state) => state.cart.items)
  const isLoaded = useSelector((state) => state.cart.isLoaded)
  console.log(isLoaded, products)
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
        {isLoaded ? products.map((item, index) => <Card key={index} {...item} />) : <Loader />}
      </div>
    </>
  )
}

export default Home
