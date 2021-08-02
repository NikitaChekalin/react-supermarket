import React from 'react'
import Card from '../../Components/Card/Card'
import Carousel, { CarouselItem } from '../../Components/Carousel/Carousel.jsx'
import Loader from '../../Components/Loader/Loader'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsToCartActionCreator } from '../../redux/reducers/cartReduser'
import GoogleMap from '../../Components/GoogleMap/GoogleMap'
const Home = () => {
  const products = useSelector((state) => state.products.items)
  const cart = useSelector((state) => state.cart.items)
  const isLoaded = useSelector((state) => state.products.isLoaded)
  const dispatch = useDispatch()

  const addProductToCart = (obj) => {
    dispatch(addProductsToCartActionCreator(obj))
    console.log(obj)
  }
  return (
    <>
      <h1>Кращі товари</h1>
      <Carousel>
        {products &&
          products
            .flat()
            .reverse()
            .map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>

      <h1>Товари у наявності</h1>
      <div className="icecream">
        {isLoaded ? (
          products.map((obj, index) => (
            <Card
              addedCountProducts={cart[obj.id] && cart[obj.id].length}
              onClickAddProduct={addProductToCart}
              key={index}
              {...obj}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <h1>Місця де Ми чекаємо на тебе!</h1>
      <GoogleMap />
    </>
  )
}

export default Home
