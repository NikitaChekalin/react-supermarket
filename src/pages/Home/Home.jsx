import React from 'react'
import Card from '../../Components/Card/Card'
import Carousel from '../../Components/Carousel/Carousel.jsx'
import Loader from '../../Components/Loader/Loader'
import CarouselItem from '../../Components/Carousel/CarouselItem/CarouselItem'
import { useSelector, useDispatch } from 'react-redux'
import { addProductsToCartActionCreator } from '../../redux/reducers/cartReduser'
import GoogleMap from '../../Components/GoogleMap/GoogleMap'
import Title from '../../Components/Title/Title'
const Home = React.memo(() => {
  const products = useSelector((state) => state.products.items)
  const cart = useSelector((state) => state.cart.items)
  const isLoaded = useSelector((state) => state.products.isLoaded)

  const dispatch = useDispatch()
  const addProductToCart = (obj) => {
    dispatch(addProductsToCartActionCreator(obj))
  }
  return (
    <>
      <Title title="Кращі товари"></Title>
      <Carousel>
        {products &&
          products
            .flat()
            .reverse()
            .map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>
      <Title title="Товари у наявності"></Title>

      <div className="icecream">
        {isLoaded ? (
          products.map((obj) => (
            <Card
              addedCountProducts={cart[obj.id] && cart[obj.id].items.length}
              onClickAddProduct={addProductToCart}
              key={obj.id}
              {...obj}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <Title title="Місця де Ми чекаємо на тебе!"></Title>
      <GoogleMap />
    </>
  )
})

export default Home
